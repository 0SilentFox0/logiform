import type { IBlog } from "@/database/blog/blog.types";
import type { ICategory, IParamsDirectus } from "@/database/baseTypes";

import { POST_STATUS } from "@/utils/constants";

import { directus } from "@/plugins/axios";

const postPreviewFields =
	"title,image,description,date_created,date_created,author.*,slug,categories";

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

	const { data: posts } = await directus.get<IBlog.PostPreview[]>("blogs", {
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

	const { data: posts } = await directus.get<IBlog.Post[]>("blogs", {
		params,
	});

	const [post] = posts.data;

	return post;
}

async function getAllSlugs(): Promise<string[]> {
	const params: IParamsDirectus = {
		fields: "slug",
		filter: {
			status: POST_STATUS.published,
		},
	};

	const { data: slugs } = await directus.get<string[]>("blogs", { params });

	return slugs.data;
}

export const BlogGateway = {
	getPost,
	getPostsPreview,
	getAllSlugs,
};
