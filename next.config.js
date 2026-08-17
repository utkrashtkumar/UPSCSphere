/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'api.dicebear.com', 
      'lh3.googleusercontent.com', 
      'lh4.googleusercontent.com', 
      'lh5.googleusercontent.com', 
      'lh6.googleusercontent.com',
      'googleusercontent.com',
      'avatars.githubusercontent.com'
    ],
  },
}

module.exports = nextConfig
