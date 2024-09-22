export type SeoType = {
  metaAuthor?: string;
  metaDescription?: string;
  metaImage?: string;
  metaImageFile?: ImageType | string;
  metaTitle?: string;
  ogImage?: string;
};

export type ImageType = {
  id: string;
};

export type MetaType = {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  status?: string;
};

export interface ICategory {
  _id: string;
  id: number;
  name: string;
  order: number;
  parentId: number;
  contentTop?: string;
  contentBottom?: string;
  seo?: SeoType;
  title?: string;
  text?: string;
  content?: string;
  slug: string;
}

export interface PostBase {
  _id: string;
  slug: string;
  title: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  category: ICategory;
  seo: SeoType;
}

export interface IParamsDirectus {
  meta?: string;
  sort?: string;
  offset?: number;
  limit?: number;
  fields?: string;
  filter?: {
    slug?: string;
    status?: string;
    category?: {
      slug: string;
    };
    industry?: {
      slug: string;
    };
  };
}
