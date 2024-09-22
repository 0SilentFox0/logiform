import type { IBlog } from "@/database/blog/blog.types";
import type { ICategory, IParamsDirectus } from "@/database/baseTypes";

import { POST_STATUS } from "@/utils/constants";

import { directus } from "@/plugins/axios";

const postPreviewFields =
	"post_title,post_image_small,post_description,date_created,author_name,author_image,category_name,id,slug";

async function getPostsPreview({
	categorySlug,
}: IBlog.GetPostsParams): Promise<IBlog.PostPreview[]> {
	const params: IParamsDirectus = {
		sort: "-date_updated",
		fields: postPreviewFields,
		filter: {
			status: POST_STATUS.published,
		},
	};

	if (categorySlug)
		params.filter = {
			...params.filter,
			...{
				// category: {
				// 	slug: categorySlug,
				// },
			},
		};

	const { data: posts } = await directus.get<IBlog.PostPreview[]>("blog_post", {
		params,
	});

	return posts.data;
}

async function getPost({
	slug,
	categorySlug,
}: IBlog.GetPostsParams): Promise<IBlog.Post> {
	const params: IParamsDirectus = {
		fields: "*.*.*.*",
		filter: {
			status: POST_STATUS.published,
		},
	};
	if (slug)
		params.filter = {
			...params.filter,
			slug,
		};
	if (categorySlug)
		params.filter = {
			...params.filter,
			...{
				// category: {
				// 	slug: categorySlug,
				// },
			},
		};

	const { data: posts } = await directus.get<IBlog.Post[]>("blog_post", {
		params,
	});

	const [post] = posts.data;

	return post;
}

async function getCategories(): Promise<ICategory[]> {
	const params: IParamsDirectus = {
		sort: "name",
		fields: "*.*",
	};

	const { data: categories } = await directus.get<ICategory[]>(
		"blog_categories",
		{ params }
	);

	return categories.data;
}

async function getAllSlugs(): Promise<string[]> {
	const params: IParamsDirectus = {
		fields: "slug",
		filter: {
			status: POST_STATUS.published,
		},
	};

	const { data: slugs } = await directus.get<string[]>("blog_post", { params });

	return slugs.data;
}

export const BlogGateway = {
	getPost,
	getPostsPreview,
	getCategories,
	getAllSlugs,
};
