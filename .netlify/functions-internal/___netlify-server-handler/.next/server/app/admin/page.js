(()=>{var e={};e.id=698,e.ids=[698],e.modules={440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var o=r(1658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1132:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Backup\\\\\xc1rea de Trabalho\\\\XIAOMI\\\\project\\\\project\\\\loja-shopify\\\\src\\\\app\\\\admin\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\admin\\page.tsx","default")},2454:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(687),a=r(3210),s=r(7451),i=r(5814),n=r.n(i);function l(){let[e,t]=(0,a.useState)({title:"",descriptionHtml:"",productType:"",vendor:"Xiaomi",tags:[],images:[{src:"",altText:""}],variants:[{price:"0.00"}]}),[r,i]=(0,a.useState)({title:"",description:"",image:""}),[l,c]=(0,a.useState)({type:"",text:""}),[d,u]=(0,a.useState)({type:"",text:""}),[p,m]=(0,a.useState)(!1),[g,x]=(0,a.useState)(!1),h=(e,r)=>{t(t=>({...t,[e]:r}))},y=e=>{h("tags",e.split(",").map(e=>e.trim()).filter(e=>e))},b=(t,r)=>{let o=[...e.images||[]];0===o.length&&o.push({src:"",altText:""}),o[0]={...o[0],[t]:r},h("images",o)},f=(t,r)=>{let o=[...e.variants||[]];0===o.length&&o.push({price:"0.00"}),o[0]={...o[0],[t]:r},h("variants",o)},v=async r=>{r.preventDefault(),m(!0),c({type:"",text:""});try{let r=await (0,s.WY)(e);c({type:"success",text:`Produto "${r.title}" criado com sucesso! ID: ${r.id}`}),t({title:"",descriptionHtml:"",productType:"",vendor:"Xiaomi",tags:[],images:[{src:"",altText:""}],variants:[{price:"0.00"}]})}catch(e){c({type:"error",text:`Erro ao criar produto: ${e instanceof Error?e.message:String(e)}`})}finally{m(!1)}},j=async e=>{e.preventDefault(),x(!0),u({type:"",text:""});try{let e=await (0,s.No)(r.title,r.description,r.image||void 0);u({type:"success",text:`Cole\xe7\xe3o "${e.title}" criada com sucesso! ID: ${e.id}`}),i({title:"",description:"",image:""})}catch(e){u({type:"error",text:`Erro ao criar cole\xe7\xe3o: ${e instanceof Error?e.message:String(e)}`})}finally{x(!1)}};return(0,o.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Painel de Administra\xe7\xe3o"}),(0,o.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,o.jsx)(n(),{href:"/",className:"hover:text-[#FF6700]",children:"In\xedcio"}),(0,o.jsx)("span",{className:"mx-2",children:"/"}),(0,o.jsx)("span",{children:"Admin"})]})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,o.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,o.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Criar Novo Produto"}),l.text&&(0,o.jsx)("div",{className:`mb-4 p-3 rounded ${"success"===l.type?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:l.text}),(0,o.jsxs)("form",{onSubmit:v,children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"productTitle",children:"T\xedtulo*"}),(0,o.jsx)("input",{id:"productTitle",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.title,onChange:e=>h("title",e.target.value),required:!0})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"productDescription",children:"Descri\xe7\xe3o"}),(0,o.jsx)("textarea",{id:"productDescription",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",rows:4,value:e.descriptionHtml,onChange:e=>h("descriptionHtml",e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"productType",children:"Tipo de Produto"}),(0,o.jsx)("input",{id:"productType",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.productType,onChange:e=>h("productType",e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"productVendor",children:"Fabricante"}),(0,o.jsx)("input",{id:"productVendor",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.vendor,onChange:e=>h("vendor",e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"productTags",children:"Tags (separadas por v\xedrgula)"}),(0,o.jsx)("input",{id:"productTags",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.tags?.join(", ")||"",onChange:e=>y(e.target.value)})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Imagem"}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productImageSrc",children:"URL da Imagem"}),(0,o.jsx)("input",{id:"productImageSrc",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.images?.[0]?.src||"",onChange:e=>b("src",e.target.value)})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productImageAlt",children:"Texto Alternativo"}),(0,o.jsx)("input",{id:"productImageAlt",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.images?.[0]?.altText||"",onChange:e=>b("altText",e.target.value)})]})]})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Variante"}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productPrice",children:"Pre\xe7o*"}),(0,o.jsx)("input",{id:"productPrice",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.variants?.[0]?.price||"0.00",onChange:e=>f("price",e.target.value),required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productCompareAtPrice",children:"Pre\xe7o Comparativo"}),(0,o.jsx)("input",{id:"productCompareAtPrice",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.variants?.[0]?.compareAtPrice||"",onChange:e=>f("compareAtPrice",e.target.value)})]})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productSKU",children:"SKU"}),(0,o.jsx)("input",{id:"productSKU",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.variants?.[0]?.sku||"",onChange:e=>f("sku",e.target.value)})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm mb-2",htmlFor:"productInventory",children:"Quantidade em Estoque"}),(0,o.jsx)("input",{id:"productInventory",type:"number",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:e.variants?.[0]?.inventoryQuantity||0,onChange:e=>f("inventoryQuantity",parseInt(e.target.value))})]})]})]}),(0,o.jsx)("button",{type:"submit",className:"bg-[#FF6700] text-white py-2 px-4 rounded-md hover:bg-[#E05A00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6700] focus:ring-opacity-50 disabled:opacity-50",disabled:p,children:p?"Criando...":"Criar Produto"})]})]}),(0,o.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,o.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Criar Nova Cole\xe7\xe3o"}),d.text&&(0,o.jsx)("div",{className:`mb-4 p-3 rounded ${"success"===d.type?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:d.text}),(0,o.jsxs)("form",{onSubmit:j,children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"collectionTitle",children:"T\xedtulo*"}),(0,o.jsx)("input",{id:"collectionTitle",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:r.title,onChange:e=>i({...r,title:e.target.value}),required:!0})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"collectionDescription",children:"Descri\xe7\xe3o"}),(0,o.jsx)("textarea",{id:"collectionDescription",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",rows:4,value:r.description,onChange:e=>i({...r,description:e.target.value})})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"collectionImage",children:"URL da Imagem"}),(0,o.jsx)("input",{id:"collectionImage",type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6700]",value:r.image,onChange:e=>i({...r,image:e.target.value})})]}),(0,o.jsx)("button",{type:"submit",className:"bg-[#FF6700] text-white py-2 px-4 rounded-md hover:bg-[#E05A00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6700] focus:ring-opacity-50 disabled:opacity-50",disabled:g,children:g?"Criando...":"Criar Cole\xe7\xe3o"})]})]})]})]})}},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},7451:(e,t,r)=>{"use strict";r.d(t,{No:()=>f,WY:()=>b,d$:()=>x,qw:()=>h,zh:()=>y});var o=r(6408),a=r(570),s=r(1566),i=r(9826);console.log("Vari\xe1veis de ambiente carregadas:"),console.log("SHOPIFY_STORE_DOMAIN:","uxh1te-1d.myshopify.com"),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:","c468b35799acbc73e0a1ee98713bad6c"),console.log("SHOPIFY_ADMIN_API_TOKEN:",process.env.SHOPIFY_ADMIN_API_TOKEN);let n="uxh1te-1d.myshopify.com",l="c468b35799acbc73e0a1ee98713bad6c",c=process.env.SHOPIFY_ADMIN_API_TOKEN;if(!l)throw Error("A vari\xe1vel de ambiente SHOPIFY_STOREFRONT_TOKEN_CLIENT n\xe3o est\xe1 definida.");if(!c)throw Error("A vari\xe1vel de ambiente SHOPIFY_ADMIN_API_TOKEN n\xe3o est\xe1 definida.");console.log("Valores usados para a integra\xe7\xe3o:"),console.log("SHOPIFY_STORE_DOMAIN:",n),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:",l);let d=()=>({mockProducts:Array(10).fill(null).map((e,t)=>({id:`gid://shopify/Product/${t+1}`,title:`Xiaomi Smartphone ${t+1}`,handle:`xiaomi-smartphone-${t+1}`,description:`Este \xe9 um smartphone Xiaomi de alta qualidade com excelentes recursos e desempenho.`,priceRange:{minVariantPrice:{amount:`${999+100*t}`,currencyCode:"BRL"}},images:{edges:[{node:{originalSrc:"https://placehold.co/600x400?text=Xiaomi+Smartphone",altText:`Xiaomi Smartphone ${t+1}`}}]}})),mockCollections:[{id:"gid://shopify/Collection/1",title:"Smartphones",handle:"smartphones",description:"Nossa cole\xe7\xe3o de smartphones Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Smartphones",altText:"Smartphones"}},{id:"gid://shopify/Collection/2",title:"Acess\xf3rios",handle:"acessorios",description:"Acess\xf3rios para seus dispositivos Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Acessorios",altText:"Acess\xf3rios"}},{id:"gid://shopify/Collection/3",title:"Casa Inteligente",handle:"casa-inteligente",description:"Produtos Xiaomi para sua casa inteligente",image:{originalSrc:"https://placehold.co/600x400?text=Casa+Inteligente",altText:"Casa Inteligente"}}]}),u=(0,o.$)({uri:`https://${n}/api/2023-10/graphql.json`,headers:{"X-Shopify-Storefront-Access-Token":l,"Content-Type":"application/json"}}),p=(0,o.$)({uri:`https://${n}/admin/api/2023-10/graphql.json`,headers:{"X-Shopify-Access-Token":c,"Content-Type":"application/json"}}),m=new a.R({link:u,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}}),g=new a.R({link:p,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}}});async function x(){let e=`
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
  `;try{console.log("Tentando buscar produtos da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`),console.log("Token usado:",l);let t=await m.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (produtos):",t),t.data.products.edges.map(e=>e.node)}catch(t){console.error("Erro ao buscar produtos:",t),console.warn("Usando dados mockados para produtos devido a erro na API");let{mockProducts:e}=d();return e}}async function h(){let e=`
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
  `;try{console.log("Tentando buscar cole\xe7\xf5es da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`);let t=await m.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (cole\xe7\xf5es):",t),t.data.collections.edges.map(e=>e.node)}catch(t){console.error("Erro ao buscar cole\xe7\xf5es:",t),console.warn("Usando dados mockados para cole\xe7\xf5es devido a erro na API");let{mockCollections:e}=d();return e}}async function y(e){let t=`
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
  `;try{return(await m.query({query:(0,i.J1)(t),variables:{query:e}})).data.products.edges.map(e=>e.node)}catch(r){console.error("Erro ao buscar produtos:",r);let{mockProducts:t}=d();return t.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase()))}}async function b(e){let t=(0,i.J1)`
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
  `,r=e.images?.map(t=>({src:t.src,altText:t.altText||e.title}))||[],o=e.variants?.map(e=>({price:e.price,compareAtPrice:e.compareAtPrice,sku:e.sku,inventoryQuantity:e.inventoryQuantity||0,requiresShipping:void 0===e.requiresShipping||e.requiresShipping,taxable:void 0===e.taxable||e.taxable}))||[{price:"0.00"}],a={title:e.title,descriptionHtml:e.descriptionHtml||"",productType:e.productType||"",vendor:e.vendor||"Xiaomi",tags:e.tags||[],images:r,variants:o};try{let e=await g.mutate({mutation:t,variables:{input:a}});if(e.data.productCreate.userErrors.length>0)throw console.error("Erros ao criar produto:",e.data.productCreate.userErrors),Error(e.data.productCreate.userErrors[0].message);return e.data.productCreate.product}catch(e){throw console.error("Erro ao criar produto:",e),e}}async function f(e,t,r){let o=(0,i.J1)`
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
  `,a={title:e,descriptionHtml:t};r&&(a.image={src:r,altText:e});try{let e=await g.mutate({mutation:o,variables:{input:a}});if(e.data.collectionCreate.userErrors.length>0)throw console.error("Erros ao criar cole\xe7\xe3o:",e.data.collectionCreate.userErrors),Error(e.data.collectionCreate.userErrors[0].message);return e.data.collectionCreate.collection}catch(e){throw console.error("Erro ao criar cole\xe7\xe3o:",e),e}}},7937:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var o=r(5239),a=r(8088),s=r(8170),i=r.n(s),n=r(893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c={children:["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1132)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\admin\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4431)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\admin\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")},9575:(e,t,r)=>{Promise.resolve().then(r.bind(r,2454))},9743:(e,t,r)=>{Promise.resolve().then(r.bind(r,1132))}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[447,911,658,500,449],()=>r(7937));module.exports=o})();