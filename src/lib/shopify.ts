import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

// Interfaces para tipagem
export interface Product {
  id: string;
  title: string;
  handle: string;
  description?: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        originalSrc: string;
        altText: string | null;
      };
    }[];
  };
  variants?: {
    edges: {
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        selectedOptions: { name: string; value: string }[];
        metafield?: { value: string } | null;
        mediavariant?: {
          references?: {
            nodes: {
              image: {
                originalSrc: string;
                altText: string | null;
              };
            }[];
          };
        } | null;
      };
    }[];
  };
  metafields?: {
    key: string;
    value: string;
    namespace: string;
  }[];
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  descriptionHtml?: string;
  image?: {
    originalSrc: string;
    altText: string | null;
  } | null;
}

// Log para debug das variáveis de ambiente
console.log('Variáveis de ambiente carregadas:');
console.log('SHOPIFY_STORE_DOMAIN:', process.env.SHOPIFY_STORE_DOMAIN);
console.log('SHOPIFY_STOREFRONT_TOKEN_CLIENT:', process.env.SHOPIFY_STOREFRONT_TOKEN_CLIENT);
console.log('SHOPIFY_ADMIN_API_TOKEN:', process.env.SHOPIFY_ADMIN_API_TOKEN);

// Tokens da API Shopify - usando variáveis de ambiente
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN_CLIENT = process.env.SHOPIFY_STOREFRONT_TOKEN_CLIENT;
const SHOPIFY_ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN;

if (!SHOPIFY_STOREFRONT_TOKEN_CLIENT) {
  throw new Error("A variável de ambiente SHOPIFY_STOREFRONT_TOKEN_CLIENT não está definida.");
}
if (!SHOPIFY_ADMIN_API_TOKEN) {
  throw new Error("A variável de ambiente SHOPIFY_ADMIN_API_TOKEN não está definida.");
}

// Log para debug dos valores usados
console.log('Valores usados para a integração:');
console.log('SHOPIFY_STORE_DOMAIN:', SHOPIFY_STORE_DOMAIN);
console.log('SHOPIFY_STOREFRONT_TOKEN_CLIENT:', SHOPIFY_STOREFRONT_TOKEN_CLIENT);

// URL da API GraphQL da Shopify
// Como estamos em modo de demonstração, usaremos dados mockados quando a API não estiver disponível

// Função para criar dados mockados
const createMockData = () => {
  // Produtos mockados
  const mockProducts = Array(10).fill(null).map((_, index) => ({
    id: `gid://shopify/Product/${index + 1}`,
    title: `Xiaomi Smartphone ${index + 1}`,
    handle: `xiaomi-smartphone-${index + 1}`,
    description: `Este é um smartphone Xiaomi de alta qualidade com excelentes recursos e desempenho.`,
    priceRange: {
      minVariantPrice: {
        amount: `${999 + index * 100}`,
        currencyCode: 'BRL',
      },
    },
    images: {
      edges: [
        {
          node: {
            originalSrc: 'https://placehold.co/600x400?text=Xiaomi+Smartphone',
            altText: `Xiaomi Smartphone ${index + 1}`,
          },
        },
      ],
    },
  }));

  // Coleções mockadas
  const mockCollections = [
    {
      id: 'gid://shopify/Collection/1',
      title: 'Smartphones',
      handle: 'smartphones',
      description: 'Nossa coleção de smartphones Xiaomi',
      image: {
        originalSrc: 'https://placehold.co/600x400?text=Smartphones',
        altText: 'Smartphones',
      },
    },
    {
      id: 'gid://shopify/Collection/2',
      title: 'Acessórios',
      handle: 'acessorios',
      description: 'Acessórios para seus dispositivos Xiaomi',
      image: {
        originalSrc: 'https://placehold.co/600x400?text=Acessorios',
        altText: 'Acessórios',
      },
    },
    {
      id: 'gid://shopify/Collection/3',
      title: 'Casa Inteligente',
      handle: 'casa-inteligente',
      description: 'Produtos Xiaomi para sua casa inteligente',
      image: {
        originalSrc: 'https://placehold.co/600x400?text=Casa+Inteligente',
        altText: 'Casa Inteligente',
      },
    },
  ];

  return { mockProducts, mockCollections };
};

// Criando o link HTTP para a API Storefront GraphQL
const storefrontLink = createHttpLink({
  uri: `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN_CLIENT,
    'Content-Type': 'application/json',
  },
});

// Criando o link HTTP para a API Admin GraphQL
const adminLink = createHttpLink({
  uri: `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/graphql.json`,
  headers: {
    'X-Shopify-Access-Token': SHOPIFY_ADMIN_API_TOKEN,
    'Content-Type': 'application/json',
  },
});

// Criando o cliente Apollo para a Storefront API
export const storefrontClient = new ApolloClient({
  link: storefrontLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

// Criando o cliente Apollo para a Admin API
export const adminClient = new ApolloClient({
  link: adminLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

// Função para obter produtos
export async function getProducts() {
  const query = `
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
  `;

  try {
    console.log('Tentando buscar produtos da Shopify...');
    console.log('URL da API:', `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`);
    console.log('Token usado:', SHOPIFY_STOREFRONT_TOKEN_CLIENT);
    
    const response = await storefrontClient.query({
      query: gql(query),
    });
    
    console.log('Resposta da API Shopify (produtos):', response);
    return response.data.products.edges.map((edge: { node: Product }) => edge.node);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    // Retornar dados mockados em caso de erro
    console.warn('Usando dados mockados para produtos devido a erro na API');
    const { mockProducts } = createMockData();
    return mockProducts;
  }
}

// Função para obter um produto por handle (slug)
export async function getProductByHandle(handle: string) {
  const query = `
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
                # Assumindo que o valor é uma lista de referências de mídia
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
        # Adicionando busca por metacampos específicos
        metafields(identifiers: [
          # Especificações técnicas
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
          # Conteúdo HTML específico para dispositivos móveis
          {namespace: "custom", key: "html_mobile"}
        ]) {
          key
          value
          namespace
        }
      }
    }
  `;

  try {
    const response = await storefrontClient.query({
      query: gql(query),
      variables: { handle },
    });
    return response.data.productByHandle;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    // Retornar um produto mockado em caso de erro
    const { mockProducts } = createMockData();
    return mockProducts.find((p) => p.handle === handle) || null;
  }
}

// Função para obter categorias (collections)
export async function getCollections() {
  const query = `
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
  `;

  try {
    console.log('Tentando buscar coleções da Shopify...');
    console.log('URL da API:', `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`);
    
    const response = await storefrontClient.query({
      query: gql(query),
    });
    
    console.log('Resposta da API Shopify (coleções):', response);
    return response.data.collections.edges.map((edge: { node: Collection }) => edge.node);
  } catch (error) {
    console.error('Erro ao buscar coleções:', error);
    // Retornar coleções mockadas em caso de erro
    console.warn('Usando dados mockados para coleções devido a erro na API');
    const { mockCollections } = createMockData();
    return mockCollections;
  }
}

// Função para obter produtos por categoria (collection)
export async function getProductsByCollection(collectionHandle: string) {
  const query = `
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
  `;

  try {
    const response = await storefrontClient.query({
      query: gql(query),
      variables: { handle: collectionHandle },
    });
    
    // Verificar se collectionByHandle existe antes de acessar suas propriedades
    if (response.data.collectionByHandle) {
      return {
        title: response.data.collectionByHandle.title,
        products: response.data.collectionByHandle.products.edges.map((edge: { node: Product }) => edge.node),
      };
    } else {
      console.error('Coleção não encontrada');
      // Retornar dados mockados em caso de coleção não encontrada
      const { mockProducts, mockCollections } = createMockData();
      const collection = mockCollections.find((c) => c.handle === collectionHandle);
      return {
        title: collection?.title || '',
        products: mockProducts
      };
    }
  } catch (error) {
    console.error('Erro ao buscar produtos da coleção:', error);
    // Retornar dados mockados em caso de erro
    const { mockProducts, mockCollections } = createMockData();
    const collection = mockCollections.find((c) => c.handle === collectionHandle);
    return {
      title: collection?.title || '',
      products: mockProducts
    };
  }
}

// Função para buscar produtos
export async function searchProducts(query: string) {
  const gqlQuery = `
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
  `;

  try {
    const response = await storefrontClient.query({
      query: gql(gqlQuery),
      variables: { query },
    });
    return response.data.products.edges.map((edge: { node: Product }) => edge.node);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    // Retornar produtos mockados filtrados pelo termo de busca
    const { mockProducts } = createMockData();
    return mockProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
  }
}

// Interface para os dados do produto a ser criado
export interface ProductCreateInput {
  title: string;
  descriptionHtml?: string;
  productType?: string;
  vendor?: string;
  tags?: string[];
  images?: {
    src: string;
    altText?: string;
  }[];
  variants?: {
    price: string;
    compareAtPrice?: string;
    sku?: string;
    inventoryQuantity?: number;
    requiresShipping?: boolean;
    taxable?: boolean;
  }[];
}

// Função para criar um produto usando a Admin API
export async function createProduct(productData: ProductCreateInput) {
  const productCreateMutation = gql`
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
  `;

  // Preparar as imagens no formato esperado pela API
  const images = productData.images?.map(image => ({
    src: image.src,
    altText: image.altText || productData.title
  })) || [];

  // Preparar as variantes no formato esperado pela API
  const variants = productData.variants?.map(variant => ({
    price: variant.price,
    compareAtPrice: variant.compareAtPrice,
    sku: variant.sku,
    inventoryQuantity: variant.inventoryQuantity || 0,
    requiresShipping: variant.requiresShipping !== undefined ? variant.requiresShipping : true,
    taxable: variant.taxable !== undefined ? variant.taxable : true
  })) || [{ price: "0.00" }]; // Pelo menos uma variante é necessária

  // Preparar o input para a mutação
  const input = {
    title: productData.title,
    descriptionHtml: productData.descriptionHtml || "",
    productType: productData.productType || "",
    vendor: productData.vendor || "Xiaomi",
    tags: productData.tags || [],
    images: images,
    variants: variants
  };

  try {
    const response = await adminClient.mutate({
      mutation: productCreateMutation,
      variables: { input }
    });

    if (response.data.productCreate.userErrors.length > 0) {
      console.error('Erros ao criar produto:', response.data.productCreate.userErrors);
      throw new Error(response.data.productCreate.userErrors[0].message);
    }

    return response.data.productCreate.product;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
}

// Função para criar uma coleção (categoria) usando a Admin API
export async function createCollection(title: string, description: string, image?: string) {
  const collectionCreateMutation = gql`
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
  `;

  // Preparar o input para a mutação
  const input: { title: string; descriptionHtml: string; image?: { src: string; altText?: string } } = {
    title,
    descriptionHtml: description
  };

  // Adicionar imagem se fornecida
  if (image) {
    input.image = {
      src: image,
      altText: title
    };
  }

  try {
    const response = await adminClient.mutate({
      mutation: collectionCreateMutation,
      variables: { input }
    });

    if (response.data.collectionCreate.userErrors.length > 0) {
      console.error('Erros ao criar coleção:', response.data.collectionCreate.userErrors);
      throw new Error(response.data.collectionCreate.userErrors[0].message);
    }

    return response.data.collectionCreate.collection;
  } catch (error) {
    console.error('Erro ao criar coleção:', error);
    throw error;
  }
}
