interface Product {
  id: string;
  type: string;
  slugs: Array<string>;
  linked_documents: Array<any>;
  data: any;
  alternate_languages: Array<Product>;
  lang: string;
  href: string;
  first_publication_date: string;
}

export default Product
