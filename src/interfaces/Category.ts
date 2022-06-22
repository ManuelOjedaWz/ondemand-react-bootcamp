interface Category {
  id: string;
  type: string;
  slugs: Array<string>;
  linked_documents: Array<any>;
  data: any;
  alternate_languages: Array<Category>;
  lang: string;
  href: string;
  first_publication_date: string;
}

export default Category
