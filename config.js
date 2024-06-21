export const config = {
  domainSource: "https://www.agriculturewiki.com", // Your WeWeb app link
  metaDataEndpoint: "https://x8e3-4uyz-scg3.n7c.xano.io/api:eabalGiE/get_single_article_wordpress_meta", // Link of the endpoint that returns the metadata. /{id} will be added to this path. With id being the last parameter of the dynamic page
  patterns: {
    dynamicPage: "/[^/]+"
  }
};
