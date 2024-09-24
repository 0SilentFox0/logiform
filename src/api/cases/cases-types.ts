import type { ITeam } from '@/database/team/team.types';
import type { ICategory, ImageType, PostBase } from '@/database/baseTypes';

export namespace CaseStudiesInterface {
  export interface GetPostsParams {
    slug?: string;
    fields?: string;
    start?: number;
    limit?: number;
    categorySlug?: string;
    industrySlug?: string;
  }

  export interface Customer {
    avatar: string;
    imageFile: ImageType;
    company: string;
    name: string;
    position: string;
    logo: ImageType;
  }

  export interface Result {
    chartColor: string;
    chartValue: string;
    resultTitle: string;
    resultValue: string;
    uniqueKey: string;
  }

  export interface AboutField {
    title: string;
    value: string;
  }

  export interface Point {
    title: string;
    value: string;
  }

  export interface Industry extends ICategory {}

  export interface Post extends PostBase {
    customer: Customer;
    industry: Industry;
    previewText: string;
    results: Result[];
    aboutFields: AboutField[];
    team: ITeam.Team[];
    about: string;
    summary: string;
    takeaways: string;
    date: string;
  }

  export interface PostPreview {
    previewText: string;
    customer: Customer;
    category: ICategory;
    industry: Industry;
    results: Result[];
    summary: string;
    takeaways: string;
    slug: string;
    title: string;
  }
}
