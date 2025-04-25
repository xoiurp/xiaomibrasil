import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  },
};

export default nextConfig;
