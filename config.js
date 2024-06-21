export const config = {
  domainSource: "https://adcccaa3-ef16-48c0-975b-dad539ddf9d2.weweb-preview.io/", // Your WeWeb app link
  metaDataEndpoint: "https://x8e3-4uyz-scg3.n7c.xano.io/api:eabalGiE/get_single_article_wordpress_meta", // Link of the endpoint that returns the metadata. /{id} will be added to this path. With id being the last parameter of the dynamic page
  patterns: {
    dynamicPage: "/article/[^/]+"
  }
};
