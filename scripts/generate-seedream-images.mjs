import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  throw new Error('OPENROUTER_API_KEY nao definido. Exemplo: OPENROUTER_API_KEY=... npm run generate:images');
}

const model = process.env.OPENROUTER_IMAGE_MODEL || 'bytedance-seed/seedream-4.5';
const outputDir = path.resolve(process.cwd(), 'public/generated');

const imageSpecs = [
  {
    fileName: 'consulta-medica-feminina.webp',
    prompt:
      'Foto realista em consultorio ginecologico de Goiania, Brasil, medico brasileiro de meia-idade com pele morena clara, entradas no cabelo, sem barba, sorriso acolhedor, jaleco branco sobre camisa escura (sem logos), conversando com paciente adulta, ambiente brasileiro premium, luz natural, sem texto, composicao horizontal'
  },
  {
    fileName: 'medicina-fetal-ultrassom.webp',
    prompt:
      'Foto realista de exame de ultrassom obstetrico em clinica brasileira de alto padrao, medico brasileiro de meia-idade com pele morena clara, entradas no cabelo, sem barba, jaleco branco sobre camisa escura operando equipamento, gestante deitada, tela de ultrassom visivel, ambiente moderno em Goiania, sem texto, composicao horizontal'
  },
  {
    fileName: 'cirurgia-ginecologica.webp',
    prompt:
      'Foto realista de centro cirurgico ginecologico no Brasil, equipe medica brasileira com foco em instrumentos laparoscopicos e monitor, medico principal de meia-idade com pele morena clara e entradas no cabelo, sem sangue, ambiente esterilizado premium, sem texto, composicao horizontal'
  },
  {
    fileName: 'prenatal-ultrassom.webp',
    prompt:
      'Foto realista de acompanhamento pre-natal em Goiania, gestante brasileira sorrindo durante ultrassom com parceiro ao lado, medico brasileiro de meia-idade com jaleco branco e camisa escura, clinica privada sofisticada brasileira, acolhimento e seguranca, sem texto, composicao vertical'
  },
  {
    fileName: 'cta-clinica-feminina.webp',
    prompt:
      'Foto realista artistica de recepcao de clinica ginecologica brasileira premium em Goiania, arquitetura contemporanea brasileira, plantas naturais, luz suave, atmosfera acolhedora, sem pessoas identificaveis, sem texto, composicao horizontal ampla'
  },
  {
    fileName: 'especialidades/ginecologia-goiania.webp',
    prompt:
      'Foto realista de consulta de ginecologia humanizada em Goiania, Brasil, medico de meia-idade com pele morena clara, entradas no cabelo, sem barba, jaleco branco, paciente adulta em consultorio premium brasileiro, sem texto, composicao horizontal'
  },
  {
    fileName: 'especialidades/obstetricia-goiania.webp',
    prompt:
      'Foto realista de atendimento obstetrico em clinica privada brasileira em Goiania, gestante em consulta, medico de meia-idade com pele morena clara, entradas no cabelo, sem barba, jaleco branco e camisa escura, ambiente moderno e acolhedor, sem texto, composicao horizontal'
  },
  {
    fileName: 'especialidades/gestacao-alto-risco-goiania.webp',
    prompt:
      'Foto realista de monitoramento de gestacao de alto risco em clinica brasileira, medico principal de meia-idade analisando ultrassom e exames com equipe brasileira, ambiente tecnologico e humano em Goiania, sem texto, composicao horizontal'
  },
  {
    fileName: 'especialidades/medicina-fetal-goiania.webp',
    prompt:
      'Foto realista de medicina fetal em Goiania, Brasil, medico de meia-idade realizando ultrassonografia avancada, monitor com imagem fetal, ambiente clinico premium brasileiro, atmosfera calma, sem texto, composicao horizontal'
  },
  {
    fileName: 'especialidades/ultrassonografia-goiania.webp',
    prompt:
      'Foto realista de sala de ultrassonografia moderna em clinica brasileira de Goiania, equipamento de ultima geracao, medico de meia-idade com jaleco branco realizando ultrassom, ambiente limpo e elegante, sem texto, composicao horizontal'
  }
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateImage = async (spec) => {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'user',
          content: spec.prompt
        }
      ],
      modalities: ['image'],
      image_config: {
        aspect_ratio: spec.fileName.includes('prenatal') ? '2:3' : '3:2',
        image_size: '2K'
      }
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Erro ao gerar ${spec.fileName}: ${response.status} ${errorBody}`);
  }

  const json = await response.json();
  const imageDataUrl = json?.choices?.[0]?.message?.images?.[0]?.image_url?.url;
  if (!imageDataUrl) {
    throw new Error(`Resposta sem imagem para ${spec.fileName}`);
  }

  const outputPath = path.join(outputDir, spec.fileName);
  await mkdir(path.dirname(outputPath), { recursive: true });
  const base64 = imageDataUrl.includes('base64,') ? imageDataUrl.split('base64,')[1] : '';
  if (!base64) {
    throw new Error(`Formato de imagem invalido para ${spec.fileName}`);
  }

  const buffer = Buffer.from(base64, 'base64');
  await writeFile(outputPath, buffer);
};

await mkdir(outputDir, { recursive: true });

for (const spec of imageSpecs) {
  process.stdout.write(`Gerando ${spec.fileName}... `);
  await generateImage(spec);
  process.stdout.write('ok\n');
  await sleep(800);
}

process.stdout.write(`Concluido. Imagens salvas em ${outputDir}\n`);
