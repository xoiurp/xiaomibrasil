import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    domains: [
      'i01.appmifile.com',
      'placehold.co',
      'cdn.shopify.com',
      'uxh1te-1d.myshopify.com'
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Expor variáveis de ambiente para o cliente
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_TOKEN_CLIENT: process.env.SHOPIFY_STOREFRONT_TOKEN_CLIENT,
=======
  /* config options here */
  typescript: {
    // Desativa a verificação de tipos durante o build
    ignoreBuildErrors: true,
>>>>>>> 5f18ab569611432419326ddb4bb09ac0d9d5a00c
  },
};

export default nextConfig;
