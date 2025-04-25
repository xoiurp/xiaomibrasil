(()=>{var e={};e.id=959,e.ids=[959],e.modules={440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var o=t(1658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1951:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Backup\\\\\xc1rea de Trabalho\\\\XIAOMI\\\\project\\\\project\\\\loja-shopify\\\\src\\\\app\\\\search\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\search\\page.tsx","default")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3232:(e,r,t)=>{Promise.resolve().then(t.bind(t,3773))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3773:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var o=t(687),a=t(3210),s=t(6189),i=t(5814),n=t.n(i),c=t(7897);function l(){let e=(0,s.useSearchParams)().get("q")||"",[r,t]=(0,a.useState)([]),[i,l]=(0,a.useState)(!0),[d,p]=(0,a.useState)(e);return(0,o.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Busca"}),(0,o.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,o.jsx)(n(),{href:"/",className:"hover:text-[#FF6700]",children:"In\xedcio"}),(0,o.jsx)("span",{className:"mx-2",children:"/"}),(0,o.jsx)("span",{children:"Busca"})]})]}),(0,o.jsx)("div",{className:"mb-8",children:(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault();let r=new URL(window.location.href);r.searchParams.set("q",d),window.history.pushState({},"",r.toString()),window.location.href=r.toString()},className:"flex w-full max-w-3xl mx-auto",children:[(0,o.jsx)("input",{type:"text",value:d,onChange:e=>p(e.target.value),placeholder:"O que voc\xea est\xe1 procurando?",className:"flex-grow py-3 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF6700] focus:border-transparent"}),(0,o.jsx)("button",{type:"submit",className:"bg-[#FF6700] text-white py-3 px-6 rounded-r-md hover:bg-[#E05A00] transition-colors",children:"Buscar"})]})}),(0,o.jsx)("div",{children:i?(0,o.jsxs)("div",{className:"text-center py-12",children:[(0,o.jsx)("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6700]"}),(0,o.jsx)("p",{className:"mt-4 text-gray-600",children:"Buscando produtos..."})]}):(0,o.jsxs)(o.Fragment,{children:[e?(0,o.jsx)("h2",{className:"text-xl font-semibold mb-6",children:r.length>0?`${r.length} resultados para "${e}"`:`Nenhum resultado encontrado para "${e}"`}):(0,o.jsx)("h2",{className:"text-xl font-semibold mb-6",children:"Digite um termo para buscar produtos"}),r.length>0?(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:r.map(e=>(0,o.jsx)(c.default,{id:e.id,title:e.title,handle:e.handle,description:e.description||"",price:{amount:e.priceRange.minVariantPrice.amount,currencyCode:e.priceRange.minVariantPrice.currencyCode},image:{src:e.images.edges[0]?.node.originalSrc||"",alt:e.images.edges[0]?.node.altText||e.title}},e.id))}):e?(0,o.jsxs)("div",{className:"text-center py-12",children:[(0,o.jsx)("p",{className:"text-gray-500 mb-4",children:"N\xe3o encontramos produtos correspondentes \xe0 sua busca."}),(0,o.jsx)("p",{className:"text-gray-500 mb-6",children:"Tente usar termos mais gerais ou verifique a ortografia."}),(0,o.jsx)(n(),{href:"/shop",className:"bg-[#FF6700] text-white py-2 px-6 rounded-md hover:bg-[#E05A00] transition-colors inline-block",children:"Ver todos os produtos"})]}):(0,o.jsx)("div",{className:"text-center py-12",children:(0,o.jsx)("p",{className:"text-gray-500",children:"Use a barra de busca acima para encontrar produtos."})})]})})]})}function d(){return(0,o.jsx)(a.Suspense,{fallback:(0,o.jsxs)("div",{className:"text-center py-12",children:[(0,o.jsx)("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6700]"}),(0,o.jsx)("p",{className:"mt-4 text-gray-600",children:"Carregando busca..."})]}),children:(0,o.jsx)(l,{})})}t(7451)},3873:e=>{"use strict";e.exports=require("path")},6384:(e,r,t)=>{Promise.resolve().then(t.bind(t,1951))},7451:(e,r,t)=>{"use strict";t.d(r,{No:()=>v,WY:()=>y,d$:()=>x,qw:()=>g,zh:()=>f});var o=t(6408),a=t(570),s=t(1566),i=t(9826);console.log("Vari\xe1veis de ambiente carregadas:"),console.log("SHOPIFY_STORE_DOMAIN:","uxh1te-1d.myshopify.com"),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:","c468b35799acbc73e0a1ee98713bad6c"),console.log("SHOPIFY_ADMIN_API_TOKEN:",process.env.SHOPIFY_ADMIN_API_TOKEN);let n="uxh1te-1d.myshopify.com",c="c468b35799acbc73e0a1ee98713bad6c",l=process.env.SHOPIFY_ADMIN_API_TOKEN;if(!c)throw Error("A vari\xe1vel de ambiente SHOPIFY_STOREFRONT_TOKEN_CLIENT n\xe3o est\xe1 definida.");if(!l)throw Error("A vari\xe1vel de ambiente SHOPIFY_ADMIN_API_TOKEN n\xe3o est\xe1 definida.");console.log("Valores usados para a integra\xe7\xe3o:"),console.log("SHOPIFY_STORE_DOMAIN:",n),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:",c);let d=()=>({mockProducts:Array(10).fill(null).map((e,r)=>({id:`gid://shopify/Product/${r+1}`,title:`Xiaomi Smartphone ${r+1}`,handle:`xiaomi-smartphone-${r+1}`,description:`Este \xe9 um smartphone Xiaomi de alta qualidade com excelentes recursos e desempenho.`,priceRange:{minVariantPrice:{amount:`${999+100*r}`,currencyCode:"BRL"}},images:{edges:[{node:{originalSrc:"https://placehold.co/600x400?text=Xiaomi+Smartphone",altText:`Xiaomi Smartphone ${r+1}`}}]}})),mockCollections:[{id:"gid://shopify/Collection/1",title:"Smartphones",handle:"smartphones",description:"Nossa cole\xe7\xe3o de smartphones Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Smartphones",altText:"Smartphones"}},{id:"gid://shopify/Collection/2",title:"Acess\xf3rios",handle:"acessorios",description:"Acess\xf3rios para seus dispositivos Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Acessorios",altText:"Acess\xf3rios"}},{id:"gid://shopify/Collection/3",title:"Casa Inteligente",handle:"casa-inteligente",description:"Produtos Xiaomi para sua casa inteligente",image:{originalSrc:"https://placehold.co/600x400?text=Casa+Inteligente",altText:"Casa Inteligente"}}]}),p=(0,o.$)({uri:`https://${n}/api/2023-10/graphql.json`,headers:{"X-Shopify-Storefront-Access-Token":c,"Content-Type":"application/json"}}),u=(0,o.$)({uri:`https://${n}/admin/api/2023-10/graphql.json`,headers:{"X-Shopify-Access-Token":l,"Content-Type":"application/json"}}),m=new a.R({link:p,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}}),h=new a.R({link:u,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}}});async function x(){let e=`
    query GetProducts {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;try{console.log("Tentando buscar produtos da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`),console.log("Token usado:",c);let r=await m.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (produtos):",r),r.data.products.edges.map(e=>e.node)}catch(r){console.error("Erro ao buscar produtos:",r),console.warn("Usando dados mockados para produtos devido a erro na API");let{mockProducts:e}=d();return e}}async function g(){let e=`
    query GetCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              originalSrc
              altText
            }
          }
        }
      }
    }
  `;try{console.log("Tentando buscar cole\xe7\xf5es da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`);let r=await m.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (cole\xe7\xf5es):",r),r.data.collections.edges.map(e=>e.node)}catch(r){console.error("Erro ao buscar cole\xe7\xf5es:",r),console.warn("Usando dados mockados para cole\xe7\xf5es devido a erro na API");let{mockCollections:e}=d();return e}}async function f(e){let r=`
    query SearchProducts($query: String!) {
      products(first: 20, query: $query) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;try{return(await m.query({query:(0,i.J1)(r),variables:{query:e}})).data.products.edges.map(e=>e.node)}catch(t){console.error("Erro ao buscar produtos:",t);let{mockProducts:r}=d();return r.filter(r=>r.title.toLowerCase().includes(e.toLowerCase())||r.description.toLowerCase().includes(e.toLowerCase()))}}async function y(e){let r=(0,i.J1)`
    mutation productCreate($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
          title
          handle
          descriptionHtml
          productType
          vendor
          tags
          variants(first: 10) {
            edges {
              node {
                id
                title
                price
                compareAtPrice
                sku
                inventoryQuantity
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                id
                src
                altText
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `,t=e.images?.map(r=>({src:r.src,altText:r.altText||e.title}))||[],o=e.variants?.map(e=>({price:e.price,compareAtPrice:e.compareAtPrice,sku:e.sku,inventoryQuantity:e.inventoryQuantity||0,requiresShipping:void 0===e.requiresShipping||e.requiresShipping,taxable:void 0===e.taxable||e.taxable}))||[{price:"0.00"}],a={title:e.title,descriptionHtml:e.descriptionHtml||"",productType:e.productType||"",vendor:e.vendor||"Xiaomi",tags:e.tags||[],images:t,variants:o};try{let e=await h.mutate({mutation:r,variables:{input:a}});if(e.data.productCreate.userErrors.length>0)throw console.error("Erros ao criar produto:",e.data.productCreate.userErrors),Error(e.data.productCreate.userErrors[0].message);return e.data.productCreate.product}catch(e){throw console.error("Erro ao criar produto:",e),e}}async function v(e,r,t){let o=(0,i.J1)`
    mutation collectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection {
          id
          title
          handle
          descriptionHtml
          image {
            id
            src
            altText
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `,a={title:e,descriptionHtml:r};t&&(a.image={src:t,altText:e});try{let e=await h.mutate({mutation:o,variables:{input:a}});if(e.data.collectionCreate.userErrors.length>0)throw console.error("Erros ao criar cole\xe7\xe3o:",e.data.collectionCreate.userErrors),Error(e.data.collectionCreate.userErrors[0].message);return e.data.collectionCreate.collection}catch(e){throw console.error("Erro ao criar cole\xe7\xe3o:",e),e}}},7897:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var o=t(687);t(3210);var a=t(474),s=t(5814),i=t.n(s),n=t(3844);let c=({id:e,title:r,handle:t,description:s,price:c,image:l})=>{let{addToCart:d}=(0,n._)();return(0,o.jsxs)("div",{className:"group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:[(0,o.jsx)(i(),{href:`/product/${t}`,className:"block relative h-64 overflow-hidden",children:l.src?(0,o.jsx)(a.default,{src:l.src,alt:l.alt||r,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",className:"object-cover group-hover:scale-105 transition-transform duration-300"}):(0,o.jsx)("div",{className:"w-full h-full flex items-center justify-center bg-gray-100 text-gray-400",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),(0,o.jsxs)("div",{className:"p-4",children:[(0,o.jsx)(i(),{href:`/product/${t}`,className:"block",children:(0,o.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-1 hover:text-[#FF6700] transition-colors",children:r})}),(0,o.jsx)("p",{className:"text-gray-600 text-sm line-clamp-2 mb-3",children:s}),(0,o.jsxs)("div",{className:"flex justify-between items-center",children:[(0,o.jsx)("span",{className:"text-[#FF6700] font-semibold",children:((e,r="BRL")=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:r}).format(parseFloat(e)))(c.amount,c.currencyCode)}),(0,o.jsx)("button",{onClick:()=>{d({id:e,title:r,price:parseFloat(c.amount),currencyCode:c.currencyCode,image:l.src,variantId:e,productId:e,quantity:1})},className:"bg-[#FF6700] text-white py-2 px-4 rounded-md hover:bg-[#E05A00] transition-colors text-sm font-medium",children:"Adicionar"})]})]})]})}},8647:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>l});var o=t(5239),a=t(8088),s=t(8170),i=t.n(s),n=t(893),c={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(r,c);let l={children:["",{children:["search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1951)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\search\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,4431)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\search\\page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/search/page",pathname:"/search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[447,911,658,500,449],()=>t(8647));module.exports=o})();