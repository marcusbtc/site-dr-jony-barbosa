/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/servicos/histeroscopia-goiania',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/videolaparoscopia-goiania',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/videohisteroscopia-goiania',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/cirurgia-ginecologica-goiania',
        destination: '/servicos',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
