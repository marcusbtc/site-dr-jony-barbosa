import { getPayload } from 'payload'
import config from '../src/payload/payload.config'

const seed = async () => {
  console.log('🌱 Iniciando seed de dados...')

  const payload = await getPayload({ config })

  // Adicionar serviços de exemplo
  const services = [
    {
      title: 'Pré-natal de Alto Risco',
      slug: 'pre-natal-alto-risco',
      description: 'Acompanhamento especializado para gestações complexas em Goiânia.',
      category: 'service',
      featured: true,
      order: 1,
    },
    {
      title: 'Ultrassom Obstétrico 4D',
      slug: 'ultrassom-obstetrico-4d',
      description: 'Tecnologia avançada para visualizar seu bebê em detalhes.',
      category: 'exam',
      featured: true,
      order: 2,
    },
    {
      title: 'Inserção de DIU',
      slug: 'insercao-diu',
      description: 'Contraceptivo de longa duração com segurança.',
      category: 'procedure',
      featured: false,
      order: 3,
    },
  ]

  for (const service of services) {
    await payload.create({
      collection: 'services',
      data: service,
    })
    console.log(`✅ Serviço criado: ${service.title}`)
  }

  // Adicionar posts de exemplo
  const posts = [
    {
      title: 'Importância do Pré-natal',
      slug: 'importancia-pre-natal',
      excerpt: 'Entenda por que o acompanhamento pré-natal é essencial.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'O pré-natal é fundamental para garantir a saúde da mãe e do bebê durante toda a gestação.',
                },
              ],
            },
          ],
        },
      },
      publishedDate: new Date().toISOString(),
      author: 'Dr. Jony Barbosa',
      featured: true,
    },
  ]

  for (const post of posts) {
    await payload.create({
      collection: 'posts',
      data: post,
    })
    console.log(`✅ Post criado: ${post.title}`)
  }

  console.log('\n✨ Seed concluído com sucesso!')
  console.log('Execute "npm run dev" para ver os dados no site.\n')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Erro no seed:', err)
  process.exit(1)
})
