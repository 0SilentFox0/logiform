import { PostBase, ICategory, ImageType } from "@/api/baseTypes";

export namespace IBlog {
	export interface GetPostsParams {
		slug?: string;
		start?: number;
		limit?: number;
		categorySlug?: string;
	}

	export interface Author {
		imageFile: ImageType | string;
		description: string;
		id: number;
		image: string;
		linkedIn: string;
		name: string;
		order: number;
		parentId: number;
		position: string;
		website: string;
	}

	export interface PostPreview {
		slug: string;
		title: string;
		previewText: string;
		author: {
			name: string;
		};
		time: string;
		imageFile: ImageType;
		imagePreviewFile: string;
		imagePreview: string;
		category: ICategory;
		date: string;
	}

	export interface RecommendedPost extends Omit<PostPreview, "category"> {
		id: number;
		"related_blog-posts_id": {
			category: string;
		};
	}
	export interface Post extends PostBase {
		imageFile: ImageType;
		imagePreviewFile?: ImageType | string;
		recommendedPosts: RecommendedPost[];
		author: Author;
		date: string;
		image: string;
		imagePreview: string;
		previewText: string;
		time: string;
		date_created: string;
		date_updated: string;
		// eslint-disable-next-line camelcase
	}
}
