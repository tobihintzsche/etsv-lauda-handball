/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    async headers() {
      return [
        {
          source: '/(.*)?',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            },
          ],
        },
      ]
    },
  },
}

module.exports = nextConfig
