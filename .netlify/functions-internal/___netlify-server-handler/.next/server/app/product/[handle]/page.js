(()=>{var e={};e.id=861,e.ids=[861],e.modules={288:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Backup\\\\\xc1rea de Trabalho\\\\XIAOMI\\\\project\\\\project\\\\loja-shopify\\\\src\\\\components\\\\product\\\\ProductClientDetails.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\components\\product\\ProductClientDetails.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(1658);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1968:(e,t)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return r}})},2005:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var a=r(687),s=r(3210),o=r(5814),n=r.n(o),l=r(3844);let i=({product:e,quantity:t=1,className:r=""})=>{let{addToCart:o}=(0,l._)(),[n,i]=(0,s.useState)(!1);return(0,a.jsx)("button",{onClick:()=>{i(!0),o({...e,quantity:t}),setTimeout(()=>{i(!1)},1500)},disabled:n,className:`h-[55px] w-full max-w-[418px] font-bold flex justify-center items-center relative text-white text-sm border border-[#FF6700] bg-[#FF6700] rounded-[50px] transition duration-300 hover:bg-white hover:text-[#FF6700] ${n?"opacity-75 cursor-not-allowed":"cursor-pointer"} ${r}`,children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Adicionando..."]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"Adicionar ao Carrinho"]})})};var c=r(9587);let d=r.n(c)()(async()=>{},{loadableGenerated:{modules:["components\\product\\DynamicIsolatedHtmlContent.tsx -> ./IsolatedHtmlContent"]},ssr:!1});var m=r(474);let u=({images:e})=>{let[t,r]=(0,s.useState)(0);0===e.length&&(e=[{src:"",alt:"Produto sem imagem"}]);let o=e[t];return(0,a.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col md:flex-row",children:[e.length>1&&(0,a.jsxs)("div",{className:"hidden md:flex flex-col justify-center gap-2 mr-4 w-20",children:[(0,a.jsx)("div",{className:"flex justify-center mb-2",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})}),e.slice(0,3).map((e,s)=>(0,a.jsx)("div",{className:`relative h-20 w-full rounded-md overflow-hidden cursor-pointer border ${t===s?"border-[#FF6700]":"hover:border-[#FF6700] border-gray-200"}`,onClick:()=>r(s),children:e.src&&(0,a.jsx)(m.default,{src:e.src,alt:e.alt,fill:!0,className:"object-cover"})},s)),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"relative h-[500px] rounded-lg overflow-hidden",children:o.src?(0,a.jsx)(m.default,{src:o.src,alt:o.alt,fill:!0,className:"object-contain",priority:!0}):(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center bg-gray-100 text-gray-400",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.length>1&&(0,a.jsx)("div",{className:"flex md:hidden flex-row gap-2 mt-2 overflow-x-auto",children:e.slice(0,3).map((e,s)=>(0,a.jsx)("div",{className:`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border ${t===s?"border-[#FF6700]":"hover:border-[#FF6700] border-gray-200"}`,onClick:()=>r(s),children:e.src&&(0,a.jsx)(m.default,{src:e.src,alt:e.alt,fill:!0,className:"object-cover"})},s))}),(0,a.jsxs)("div",{className:"flex items-center mt-4 text-gray-600",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),(0,a.jsx)("span",{className:"text-sm",children:"Zoom"})]})]})]})},p=({title:e,children:t,startOpen:r=!1})=>{let[o,n]=(0,s.useState)(r);return(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("button",{onClick:()=>{n(!o)},className:"flex justify-between items-center w-full py-4 px-0 text-left font-bold text-gray-900 focus:outline-none transition-colors","aria-expanded":o,children:[(0,a.jsx)("span",{className:"text-2xl",children:e}),o?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})]}),(0,a.jsx)("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${o?"max-h-screen":"max-h-0"}`,style:{transitionProperty:"max-height"},children:(0,a.jsxs)("div",{className:"py-4",children:[" ",t]})})]})};function h({product:e,variants:t,images:r,uniqueColors:o,price:l,mainImage:c,desktopCss:m,mobileCss:h}){let[x,f]=(0,s.useState)(o.length>0?o[0].name:null),g=t.find(e=>{let t=e.selectedOptions.find(e=>"color"===e.name.toLowerCase()||"cor"===e.name.toLowerCase());return t&&t.value===x})?.id||t[0]?.id||e.variants?.edges?.[0]?.node.id||"",[v,y]=(0,s.useState)(1),j=t.find(e=>{let t=e.selectedOptions.find(e=>"cor"===e.name.toLowerCase());return t&&t.value===x}),b=e=>"object"==typeof e&&null!==e&&"variantImages"in e&&Array.isArray(e.variantImages),w=j&&b(j)&&j.variantImages&&j.variantImages.length>0?j.variantImages.map(e=>({src:e.src,alt:e.alt||""})):r.map(e=>({src:e.src,alt:e.alt||""})),N=(0,s.useCallback)(()=>{y(e=>e+1)},[]),k=(0,s.useCallback)(()=>{y(e=>Math.max(1,e-1))},[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full lg:max-w-[1200px] mx-auto px-4 py-8",children:[(0,a.jsx)("div",{className:"block md:hidden mb-4",children:(0,a.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,a.jsx)("div",{className:"bg-[#00E676] text-white px-3 py-1 rounded-full text-xs font-medium mr-4",children:"Frete Gr\xe1tis"}),(0,a.jsx)(n(),{href:"/",className:"hover:text-[#FF6700]",children:"Home"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)(n(),{href:"/shop",className:"hover:text-[#FF6700]",children:"Celulares"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)("span",{className:"truncate max-w-[150px]",children:e.title})]})}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 mb-16",children:[(0,a.jsx)(u,{images:w})," ",(0,a.jsxs)("div",{className:"w-full md:w-1/2",children:[(0,a.jsx)("div",{className:"hidden md:block mb-6",children:(0,a.jsxs)("div",{className:"flex items-center text-sm text-gray-500",children:[(0,a.jsx)("div",{className:"bg-[#00E676] text-white px-3 py-1 rounded-full text-xs font-medium mr-4",children:"Frete Gr\xe1tis"}),(0,a.jsx)(n(),{href:"/",className:"hover:text-[#FF6700]",children:"Home"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)(n(),{href:"/shop",className:"hover:text-[#FF6700]",children:"Celulares"}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)("span",{className:"truncate max-w-[150px]",children:e.title})]})}),(0,a.jsx)("h1",{className:"text-3xl font-bold mb-4",children:e.title}),(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsxs)("div",{className:"text-sm text-gray-500",children:["C\xf3d.: ",e.id.split("/").pop()?.substring(0,6)]}),(0,a.jsxs)("button",{className:"flex items-center text-gray-500 hover:text-[#FF6700]",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),(0,a.jsx)("span",{children:"Favoritar"})]})]}),o.length>0&&(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("h2",{className:"text-base font-medium mb-3",children:["Selecione uma cor: ",(0,a.jsx)("span",{className:"font-semibold",children:x||"Padr\xe3o"})]}),(0,a.jsx)("div",{className:"flex gap-3 flex-wrap",children:o.map(e=>(0,a.jsx)("button",{onClick:()=>f(e.name),className:`w-8 h-8 rounded-full border-2 ${x===e.name?"border-[#FF6700]":"border-gray-200"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6700] transition-colors`,style:{backgroundColor:e.hex},"aria-label":`Selecionar cor ${e.name}`},e.name))})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"text-gray-500 line-through text-sm",children:["De R$ ",(1.15*parseFloat(e.priceRange.minVariantPrice.amount)).toFixed(2)]})," ",(0,a.jsx)("div",{className:"text-3xl text-[#FF6700] font-bold",children:l}),(0,a.jsx)("div",{className:"text-sm text-gray-700",children:"Com 8% de desconto \xe0 vista"})]}),(0,a.jsxs)("div",{className:"mb-8 bg-gray-50 p-4 rounded-md",children:[(0,a.jsxs)("div",{className:"text-gray-700",children:["Ou R$ ",parseFloat(e.priceRange.minVariantPrice.amount).toFixed(2)]}),(0,a.jsxs)("div",{className:"text-gray-700",children:["12 x R$ ",(parseFloat(e.priceRange.minVariantPrice.amount)/12).toFixed(2)," sem juros"]})]}),(0,a.jsx)("div",{className:"mb-8",children:(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex border rounded-md",children:[(0,a.jsx)("button",{onClick:k,className:"px-3 py-2 border-r hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",disabled:v<=1,children:"-"}),(0,a.jsx)("input",{type:"text",value:v,readOnly:!0,className:"w-12 text-center py-2","aria-label":"Quantidade"}),(0,a.jsx)("button",{onClick:N,className:"px-3 py-2 border-l hover:bg-gray-100",children:"+"})]}),(0,a.jsx)(i,{product:{id:e.id,title:`${e.title} - ${j?.title||x||""}`,price:parseFloat("string"==typeof j?.price?j.price:e.priceRange.minVariantPrice.amount),currencyCode:(j&&b(j)&&"string"==typeof j.currencyCode?j.currencyCode:e.priceRange.minVariantPrice.currencyCode)||"BRL",image:j&&b(j)&&j.variantImages&&j.variantImages[0]?.src?j.variantImages[0].src:c.src||"",variantId:g,productId:e.id},quantity:v,className:"flex-grow text-center"})]})}),(0,a.jsxs)("div",{className:"border-t border-gray-200 pt-6 flex justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center text-gray-600",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 text-[#FF6700]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),(0,a.jsx)("span",{children:"Calcule o frete"})]}),(0,a.jsxs)("div",{className:"flex items-center text-gray-600",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 text-[#FF6700]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"})}),(0,a.jsx)("span",{children:"Devolu\xe7\xe3o Gr\xe1tis"})]})]})]})]}),e.metafields&&e.metafields.length>0&&(0,a.jsx)("div",{className:"w-full mb-8",children:(0,a.jsx)(p,{title:"Especifica\xe7\xf5es",children:(0,a.jsx)("div",{className:"space-y-2",children:e.metafields.filter(e=>e&&"specs"===e.namespace&&e.value).map(e=>(0,a.jsxs)("div",{className:"flex text-sm",children:[(0,a.jsxs)("span",{className:"font-medium w-1/3 capitalize",children:[e.key.replace(/_/g," "),":"]}),(0,a.jsx)("span",{className:"text-gray-700 w-2/3",children:e.value})]},e.key))})})}),(0,a.jsx)("div",{className:"w-full mt-12 border-t border-gray-200 pt-12",children:(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Detalhes do Produto"})})]}),(0,a.jsx)("div",{className:"fullwidth-html-content",children:(0,a.jsx)(d,{htmlContent:e.descriptionHtml||"",mobileHtmlContent:function(e){if(e.metafields&&Array.isArray(e.metafields)){let t=e.metafields.find(e=>e&&"custom"===e.namespace&&"html_mobile"===e.key);if(t&&t.value)return t.value}}(e)||"",desktopCss:m,mobileCss:h,mobileFooterHeight:600,desktopFooterHeight:500})})]})}},2507:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var a=r(5239),s=r(8088),o=r(8170),n=r.n(o),l=r(893),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let c={children:["",{children:["product",{children:["[handle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9805)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\product\\[handle]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4431)),"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\app\\product\\[handle]\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/product/[handle]/page",pathname:"/product/[handle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3453:(e,t,r)=>{"use strict";r.d(t,{IQ:()=>g,d$:()=>h,qw:()=>f,vv:()=>x});var a=r(3034),s=r(5328),o=r(6877),n=r(7499);console.log("Vari\xe1veis de ambiente carregadas:"),console.log("SHOPIFY_STORE_DOMAIN:","uxh1te-1d.myshopify.com"),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:","c468b35799acbc73e0a1ee98713bad6c"),console.log("SHOPIFY_ADMIN_API_TOKEN:",process.env.SHOPIFY_ADMIN_API_TOKEN);let l="uxh1te-1d.myshopify.com",i="c468b35799acbc73e0a1ee98713bad6c",c=process.env.SHOPIFY_ADMIN_API_TOKEN;if(!i)throw Error("A vari\xe1vel de ambiente SHOPIFY_STOREFRONT_TOKEN_CLIENT n\xe3o est\xe1 definida.");if(!c)throw Error("A vari\xe1vel de ambiente SHOPIFY_ADMIN_API_TOKEN n\xe3o est\xe1 definida.");console.log("Valores usados para a integra\xe7\xe3o:"),console.log("SHOPIFY_STORE_DOMAIN:",l),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:",i);let d=()=>({mockProducts:Array(10).fill(null).map((e,t)=>({id:`gid://shopify/Product/${t+1}`,title:`Xiaomi Smartphone ${t+1}`,handle:`xiaomi-smartphone-${t+1}`,description:`Este \xe9 um smartphone Xiaomi de alta qualidade com excelentes recursos e desempenho.`,priceRange:{minVariantPrice:{amount:`${999+100*t}`,currencyCode:"BRL"}},images:{edges:[{node:{originalSrc:"https://placehold.co/600x400?text=Xiaomi+Smartphone",altText:`Xiaomi Smartphone ${t+1}`}}]}})),mockCollections:[{id:"gid://shopify/Collection/1",title:"Smartphones",handle:"smartphones",description:"Nossa cole\xe7\xe3o de smartphones Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Smartphones",altText:"Smartphones"}},{id:"gid://shopify/Collection/2",title:"Acess\xf3rios",handle:"acessorios",description:"Acess\xf3rios para seus dispositivos Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Acessorios",altText:"Acess\xf3rios"}},{id:"gid://shopify/Collection/3",title:"Casa Inteligente",handle:"casa-inteligente",description:"Produtos Xiaomi para sua casa inteligente",image:{originalSrc:"https://placehold.co/600x400?text=Casa+Inteligente",altText:"Casa Inteligente"}}]}),m=(0,a.$)({uri:`https://${l}/api/2023-10/graphql.json`,headers:{"X-Shopify-Storefront-Access-Token":i,"Content-Type":"application/json"}}),u=(0,a.$)({uri:`https://${l}/admin/api/2023-10/graphql.json`,headers:{"X-Shopify-Access-Token":c,"Content-Type":"application/json"}}),p=new s.R({link:m,cache:new o.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}});async function h(){let e=`
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
  `;try{console.log("Tentando buscar produtos da Shopify..."),console.log("URL da API:",`https://${l}/api/2023-10/graphql.json`),console.log("Token usado:",i);let t=await p.query({query:(0,n.J1)(e)});return console.log("Resposta da API Shopify (produtos):",t),t.data.products.edges.map(e=>e.node)}catch(t){console.error("Erro ao buscar produtos:",t),console.warn("Usando dados mockados para produtos devido a erro na API");let{mockProducts:e}=d();return e}}async function x(e){let t=`
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
              selectedOptions {
                name
                value
              }
              # Adiciona busca pelo metafield da cor na variante
              metafield(namespace: "custom", key: "cor") {
                 value
              }
              # Busca o metafield com as imagens da variante
              mediavariant: metafield(namespace: "custom", key: "mediavariant") {
                # Assumindo que o valor \xe9 uma lista de refer\xeancias de m\xeddia
                references(first: 5) { # Pega as primeiras 5 imagens da variante
                   nodes {
                     ... on MediaImage {
                       id
                       image {
                         originalSrc
                         altText
                       }
                     }
                   }
                }
              }
            }
          }
        }
        # Adicionando busca por metacampos espec\xedficos
        metafields(identifiers: [
          # Especifica\xe7\xf5es t\xe9cnicas
          {namespace: "specs", key: "tela"},
          {namespace: "specs", key: "sistema_operacional"},
          {namespace: "specs", key: "sensores"},
          {namespace: "specs", key: "rede_bandas"},
          {namespace: "specs", key: "processador"},
          {namespace: "specs", key: "memoria"},
          {namespace: "specs", key: "garantia"},
          {namespace: "specs", key: "dimensoes"},
          {namespace: "specs", key: "conteudo_embalagem"},
          {namespace: "specs", key: "conectividade"},
          {namespace: "specs", key: "camera"},
          {namespace: "specs", key: "bateria"},
          {namespace: "specs", key: "audio_video"},
          # Conte\xfado HTML espec\xedfico para dispositivos m\xf3veis
          {namespace: "custom", key: "html_mobile"}
        ]) {
          key
          value
          namespace
        }
      }
    }
  `;try{return(await p.query({query:(0,n.J1)(t),variables:{handle:e}})).data.productByHandle}catch(r){console.error("Erro ao buscar produto:",r);let{mockProducts:t}=d();return t.find(t=>t.handle===e)||null}}async function f(){let e=`
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
  `;try{console.log("Tentando buscar cole\xe7\xf5es da Shopify..."),console.log("URL da API:",`https://${l}/api/2023-10/graphql.json`);let t=await p.query({query:(0,n.J1)(e)});return console.log("Resposta da API Shopify (cole\xe7\xf5es):",t),t.data.collections.edges.map(e=>e.node)}catch(t){console.error("Erro ao buscar cole\xe7\xf5es:",t),console.warn("Usando dados mockados para cole\xe7\xf5es devido a erro na API");let{mockCollections:e}=d();return e}}async function g(e){let t=`
    query GetProductsByCollection($handle: String!) {
      collectionByHandle(handle: $handle) {
        title
        products(first: 20) {
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
    }
  `;try{let r=await p.query({query:(0,n.J1)(t),variables:{handle:e}});if(r.data.collectionByHandle)return{title:r.data.collectionByHandle.title,products:r.data.collectionByHandle.products.edges.map(e=>e.node)};{console.error("Cole\xe7\xe3o n\xe3o encontrada");let{mockProducts:t,mockCollections:r}=d(),a=r.find(t=>t.handle===e);return{title:a?.title||"",products:t}}}catch(s){console.error("Erro ao buscar produtos da cole\xe7\xe3o:",s);let{mockProducts:t,mockCollections:r}=d(),a=r.find(t=>t.handle===e);return{title:a?.title||"",products:t}}}new s.R({link:u,cache:new o.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}}})},3873:e=>{"use strict";e.exports=require("path")},4777:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return l}});let a=r(687),s=r(1215),o=r(9294),n=r(1968);function l(e){let{moduleIds:t}=e,r=o.workAsyncStorage.getStore();if(void 0===r)return null;let l=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;l.push(...t)}}return 0===l.length?null:(0,a.jsx)(a.Fragment,{children:l.map(e=>{let t=r.assetPrefix+"/_next/"+(0,n.encodeURIPath)(e);return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,s.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},4963:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=r(687),s=r(3210),o=r(6780),n=r(4777);function l(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},c=function(e){let t={...i,...e},r=(0,s.lazy)(()=>t.loader().then(l)),c=t.loading;function d(e){let l=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,d=i?s.Suspense:s.Fragment,m=t.ssr?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.PreloadChunks,{moduleIds:t.modules}),(0,a.jsx)(r,{...e})]}):(0,a.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(r,{...e})});return(0,a.jsx)(d,{...i?{fallback:l}:{},children:m})}return d.displayName="LoadableComponent",d}},6371:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5814,23)),Promise.resolve().then(r.bind(r,2005))},6780:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let a=r(1208);function s(e){let{reason:t,children:r}=e;throw Object.defineProperty(new a.BailoutToCSRError(t),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},7051:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4536,23)),Promise.resolve().then(r.bind(r,288))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")},9587:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(4985)._(r(4963));function s(e,t){var r;let s={};"function"==typeof e&&(s.loader=e);let o={...s,...t};return(0,a.default)({...o,modules:null==(r=o.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(7413);r(1120);var s=r(4536),o=r.n(s);let n=require("fs");var l=r.n(n),i=r(3873),c=r.n(i),d=r(3453),m=r(288);async function u(e){try{let t=c().join(process.cwd(),e);return console.log(`Tentando ler CSS de: ${t}`),await l().promises.readFile(t,"utf8")}catch(t){return console.error(`Erro ao ler o arquivo CSS: ${e}`,t),""}}async function p({params:e}){let{handle:t}=e,r=await (0,d.vv)(t);if(!r)return(0,a.jsxs)("div",{className:"container mx-auto px-4 py-16 text-center",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Produto n\xe3o encontrado"}),(0,a.jsx)("p",{className:"mb-8",children:"O produto que voc\xea est\xe1 procurando n\xe3o existe ou foi removido."}),(0,a.jsx)(o(),{href:"/shop",className:"bg-[#FF6700] text-white py-2 px-6 rounded-md hover:bg-[#E05A00] transition-colors inline-block",children:"Voltar para a loja"})]});let s=r.images.edges.map(e=>({src:e.node.originalSrc,alt:e.node.altText||r.title})),n=r.variants.edges.map(e=>({id:e.node.id,title:e.node.title,price:e.node.price.amount,currencyCode:e.node.price.currencyCode,available:e.node.availableForSale,selectedOptions:e.node.selectedOptions,colorHex:e.node.metafield?.value||null,variantImages:e.node.mediavariant?.references?.nodes?.filter(e=>e&&e.image).map(e=>({src:e.image.originalSrc,alt:e.image.altText||r.title}))||[]})),l=new Map;n.forEach(e=>{let t=e.selectedOptions.find(e=>"cor"===e.name.toLowerCase());t&&t.value&&e.colorHex&&!l.has(t.value)&&l.set(t.value,e.colorHex)});let i=Array.from(l,([e,t])=>({name:e,hex:t})),c=s[0]||{src:"",alt:r.title},p=((e,t="BRL")=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:t}).format(parseFloat(e)))(r.priceRange.minVariantPrice.amount,r.priceRange.minVariantPrice.currencyCode),h=await u("../main-desk-14c.css"),x=await u("../main-mob-14.css");return(0,a.jsx)(m.default,{product:r,variants:n,images:s,uniqueColors:i,price:p,mainImage:c,desktopCss:h,mobileCss:x})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[447,911,658,670,449],()=>r(2507));module.exports=a})();