"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import BannerSlider from "../components/layout/BannerSlider";
import CategorySlider from "../components/layout/CategorySlider";
import ProductCard from "../components/product/ProductCard";
import ExclusiveOffersSlider from '../components/ExclusiveOffersSlider';
import { getProducts, getCollections } from "../lib/shopify";


// Definindo a página como assíncrona para buscar dados
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    async function fetchData() {
      const prods = await getProducts();
      const colls = await getCollections();
      setProducts(prods);
      setCollections(colls);
    }
    fetchData();
  }, []);
return (
  <>
    <BannerSlider />
      {/* Benefícios rápidos */}
      <section className="w-full py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image src="/icons/Produto_Oficial.png" alt="Produtos Oficiais" width={48} height={48} className="w-12 h-12 mb-4" />
            <h3 className="font-semibold">Produtos Oficiais</h3>
            <p className="text-gray-600">Loja Oficial Xiaomi Brasil.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/Garantia_Xiaomi.png" alt="Garantia Xiaomi" width={48} height={48} className="w-12 h-12 mb-4" />
            <h3 className="font-semibold">Garantia Xiaomi</h3>
            <p className="text-gray-600">Em produtos adquiridos no site.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/Frete_gratis.png" alt="Frete Grátis" width={48} height={48} className="w-12 h-12 mb-4" />
            <h3 className="font-semibold">*Frete Grátis</h3>
            <p className="text-gray-600">Nas compras acima de R$ 200,00.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/desconto_a_vista.png" alt="8% de desconto à vista" width={48} height={48} className="w-12 h-12 mb-4" />
      

            <h3 className="font-semibold">**8% de desconto à vista</h3>
            <p className="text-gray-600">Parcele em 12X sem juros<br/>Não cumulativo com outras ofertas, exceto Frete Grátis.</p>
          </div>
        </div>
      </section>

      {/* Ofertas Exclusivas */}
      <ExclusiveOffersSlider products={products} />

    {/* Categorias em destaque */}
    <CategorySlider categories={collections.slice(0, 6)} />
    
    <div className="container mx-auto px-4 py-8">

      {/* Produtos em destaque */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
          <Link
            href="/shop"
            className="text-[#FF6700] hover:underline font-medium"
          >
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              handle={product.handle}
              description={product.description || ""}
              price={{
                amount: product.priceRange.minVariantPrice.amount,
                currencyCode: product.priceRange.minVariantPrice.currencyCode,
              }}
              image={{
                src: product.images.edges[0]?.node.originalSrc || "",
                alt: product.images.edges[0]?.node.altText || product.title,
              }}
            />
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Por que escolher a Mi Brasil?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF6700]/10 text-[#FF6700] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Parcele em até 12x sem juros</h3>
            <p className="text-gray-600">
              Facilidade no pagamento com diversas opções de parcelamento sem juros.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF6700]/10 text-[#FF6700] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Frete Grátis acima de R$200</h3>
            <p className="text-gray-600">
              Entrega gratuita para compras acima de R$200 para todo o Brasil.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF6700]/10 text-[#FF6700] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Garantia Xiaomi</h3>
            <p className="text-gray-600">
              Produtos originais com garantia oficial da Xiaomi no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#FF6700] text-white rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Inscreva-se em nossa newsletter
          </h2>
          <p className="mb-6">
            Receba as últimas novidades, lançamentos e ofertas exclusivas diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </div>
  </>
);

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
