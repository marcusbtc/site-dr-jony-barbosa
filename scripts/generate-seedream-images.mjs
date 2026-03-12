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
      'Foto realista de consultorio ginecologico elegante em Goiania, medica conversando com paciente adulta sem mostrar rostos identificaveis, ambiente claro, acolhedor, tons suaves azul e branco, estilo editorial premium, sem texto, sem marcas, composicao horizontal'
  },
  {
    fileName: 'medicina-fetal-ultrassom.webp',
    prompt:
      'Foto realista de exame de ultrassom obstetrico em clinica moderna, tela de ultrassonografia visivel, gestante deitada, profissional de saude operando equipamento, ambiente limpo e sofisticado, luz natural, alta definicao, sem texto, sem marcas, composicao horizontal'
  },
  {
    fileName: 'cirurgia-ginecologica.webp',
    prompt:
      'Foto realista de centro cirurgico ginecologico moderno, equipe medica preparada com foco em instrumentos laparoscopicos e monitor, sem sangue, ambiente esterilizado, iluminacao profissional, estilo institucional premium, sem texto, sem marcas, composicao horizontal'
  },
  {
    fileName: 'prenatal-ultrassom.webp',
    prompt:
      'Foto realista de acompanhamento pre-natal, gestante sorrindo durante ultrassom com parceiro ao lado, ambiente de clinica privada sofisticada, sensacao de cuidado e seguranca, tons quentes suaves, sem texto, sem marcas, composicao vertical'
  },
  {
    fileName: 'cta-clinica-feminina.webp',
    prompt:
      'Foto realista artistica de recepcao de clinica ginecologica premium, plantas, luz suave, atmosfera acolhedora e moderna, sem pessoas identificaveis, sem texto, sem logotipos, composicao horizontal ampla'
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
