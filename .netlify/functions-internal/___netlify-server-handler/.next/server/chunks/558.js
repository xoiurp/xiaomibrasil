exports.id=558,exports.ids=[558],exports.modules={440:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>r});var t=o(1658);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2664:(e,a,o)=>{Promise.resolve().then(o.t.bind(o,5814,23)),Promise.resolve().then(o.bind(o,7897))},2936:(e,a,o)=>{Promise.resolve().then(o.t.bind(o,4536,23)),Promise.resolve().then(o.bind(o,9127))},3453:(e,a,o)=>{"use strict";o.d(a,{IQ:()=>f,d$:()=>h,qw:()=>g,vv:()=>y});var t=o(3034),r=o(5328),s=o(6877),i=o(7499);console.log("Vari\xe1veis de ambiente carregadas:"),console.log("SHOPIFY_STORE_DOMAIN:","uxh1te-1d.myshopify.com"),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:","c468b35799acbc73e0a1ee98713bad6c"),console.log("SHOPIFY_ADMIN_API_TOKEN:",process.env.SHOPIFY_ADMIN_API_TOKEN);let n="uxh1te-1d.myshopify.com",c="c468b35799acbc73e0a1ee98713bad6c",l=process.env.SHOPIFY_ADMIN_API_TOKEN;if(!c)throw Error("A vari\xe1vel de ambiente SHOPIFY_STOREFRONT_TOKEN_CLIENT n\xe3o est\xe1 definida.");if(!l)throw Error("A vari\xe1vel de ambiente SHOPIFY_ADMIN_API_TOKEN n\xe3o est\xe1 definida.");console.log("Valores usados para a integra\xe7\xe3o:"),console.log("SHOPIFY_STORE_DOMAIN:",n),console.log("SHOPIFY_STOREFRONT_TOKEN_CLIENT:",c);let d=()=>({mockProducts:Array(10).fill(null).map((e,a)=>({id:`gid://shopify/Product/${a+1}`,title:`Xiaomi Smartphone ${a+1}`,handle:`xiaomi-smartphone-${a+1}`,description:`Este \xe9 um smartphone Xiaomi de alta qualidade com excelentes recursos e desempenho.`,priceRange:{minVariantPrice:{amount:`${999+100*a}`,currencyCode:"BRL"}},images:{edges:[{node:{originalSrc:"https://placehold.co/600x400?text=Xiaomi+Smartphone",altText:`Xiaomi Smartphone ${a+1}`}}]}})),mockCollections:[{id:"gid://shopify/Collection/1",title:"Smartphones",handle:"smartphones",description:"Nossa cole\xe7\xe3o de smartphones Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Smartphones",altText:"Smartphones"}},{id:"gid://shopify/Collection/2",title:"Acess\xf3rios",handle:"acessorios",description:"Acess\xf3rios para seus dispositivos Xiaomi",image:{originalSrc:"https://placehold.co/600x400?text=Acessorios",altText:"Acess\xf3rios"}},{id:"gid://shopify/Collection/3",title:"Casa Inteligente",handle:"casa-inteligente",description:"Produtos Xiaomi para sua casa inteligente",image:{originalSrc:"https://placehold.co/600x400?text=Casa+Inteligente",altText:"Casa Inteligente"}}]}),p=(0,t.$)({uri:`https://${n}/api/2023-10/graphql.json`,headers:{"X-Shopify-Storefront-Access-Token":c,"Content-Type":"application/json"}}),m=(0,t.$)({uri:`https://${n}/admin/api/2023-10/graphql.json`,headers:{"X-Shopify-Access-Token":l,"Content-Type":"application/json"}}),u=new r.R({link:p,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}});async function h(){let e=`
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
  `;try{console.log("Tentando buscar produtos da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`),console.log("Token usado:",c);let a=await u.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (produtos):",a),a.data.products.edges.map(e=>e.node)}catch(a){console.error("Erro ao buscar produtos:",a),console.warn("Usando dados mockados para produtos devido a erro na API");let{mockProducts:e}=d();return e}}async function y(e){let a=`
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
  `;try{return(await u.query({query:(0,i.J1)(a),variables:{handle:e}})).data.productByHandle}catch(o){console.error("Erro ao buscar produto:",o);let{mockProducts:a}=d();return a.find(a=>a.handle===e)||null}}async function g(){let e=`
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
  `;try{console.log("Tentando buscar cole\xe7\xf5es da Shopify..."),console.log("URL da API:",`https://${n}/api/2023-10/graphql.json`);let a=await u.query({query:(0,i.J1)(e)});return console.log("Resposta da API Shopify (cole\xe7\xf5es):",a),a.data.collections.edges.map(e=>e.node)}catch(a){console.error("Erro ao buscar cole\xe7\xf5es:",a),console.warn("Usando dados mockados para cole\xe7\xf5es devido a erro na API");let{mockCollections:e}=d();return e}}async function f(e){let a=`
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
  `;try{let o=await u.query({query:(0,i.J1)(a),variables:{handle:e}});if(o.data.collectionByHandle)return{title:o.data.collectionByHandle.title,products:o.data.collectionByHandle.products.edges.map(e=>e.node)};{console.error("Cole\xe7\xe3o n\xe3o encontrada");let{mockProducts:a,mockCollections:o}=d(),t=o.find(a=>a.handle===e);return{title:t?.title||"",products:a}}}catch(r){console.error("Erro ao buscar produtos da cole\xe7\xe3o:",r);let{mockProducts:a,mockCollections:o}=d(),t=o.find(a=>a.handle===e);return{title:t?.title||"",products:a}}}new r.R({link:m,cache:new s.D,defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}}})},7897:(e,a,o)=>{"use strict";o.d(a,{default:()=>c});var t=o(687);o(3210);var r=o(474),s=o(5814),i=o.n(s),n=o(3844);let c=({id:e,title:a,handle:o,description:s,price:c,image:l})=>{let{addToCart:d}=(0,n._)();return(0,t.jsxs)("div",{className:"group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:[(0,t.jsx)(i(),{href:`/product/${o}`,className:"block relative h-64 overflow-hidden",children:l.src?(0,t.jsx)(r.default,{src:l.src,alt:l.alt||a,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",className:"object-cover group-hover:scale-105 transition-transform duration-300"}):(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center bg-gray-100 text-gray-400",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)(i(),{href:`/product/${o}`,className:"block",children:(0,t.jsx)("h3",{className:"text-lg font-medium text-gray-800 mb-1 hover:text-[#FF6700] transition-colors",children:a})}),(0,t.jsx)("p",{className:"text-gray-600 text-sm line-clamp-2 mb-3",children:s}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("span",{className:"text-[#FF6700] font-semibold",children:((e,a="BRL")=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:a}).format(parseFloat(e)))(c.amount,c.currencyCode)}),(0,t.jsx)("button",{onClick:()=>{d({id:e,title:a,price:parseFloat(c.amount),currencyCode:c.currencyCode,image:l.src,variantId:e,productId:e,quantity:1})},className:"bg-[#FF6700] text-white py-2 px-4 rounded-md hover:bg-[#E05A00] transition-colors text-sm font-medium",children:"Adicionar"})]})]})]})}},9127:(e,a,o)=>{"use strict";o.d(a,{default:()=>t});let t=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\Backup\\\\\xc1rea de Trabalho\\\\XIAOMI\\\\project\\\\project\\\\loja-shopify\\\\src\\\\components\\\\product\\\\ProductCard.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\Backup\\\xc1rea de Trabalho\\XIAOMI\\project\\project\\loja-shopify\\src\\components\\product\\ProductCard.tsx","default")}};