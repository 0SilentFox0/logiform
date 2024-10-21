import { directus } from "@/plugins/axios";
import { CaseStudiesInterface } from "./cases-types";
import { IParamsDirectus } from "../baseTypes";
import { POST_STATUS } from "@/utils/constants";

const casePreviewFields = "id,title,description,categories,image,slug";

async function getCasesPreview(): Promise<CaseStudiesInterface.PostPreview[]> {
	const params: IParamsDirectus = {
		sort: "-date_updated",
		fields: casePreviewFields,
		filter: {
			status: POST_STATUS.published,
		},
	};

	const { data: cases } = await directus.get<CaseStudiesInterface.Post[]>(
		"cases",
		{
			params,
		}
	);

	return cases.data;
}

async function getCase(slug: string): Promise<CaseStudiesInterface.Post> {
	const params: IParamsDirectus = {
		fields: "*.*.*.*",
		filter: {
			slug,
		},
	};

	const { data: cases } = await directus.get<CaseStudiesInterface.Post[]>(
		"cases",
		{
			params,
		}
	);

	const [case_] = cases.data;

	return case_;
}

async function getAllSlugs(): Promise<string[]> {
	const params: IParamsDirectus = {
		fields: "slug, date_updated, date_created",
		filter: {
			status: POST_STATUS.published,
		},
	};

	const { data: slugs } = await directus.get<string[]>("cases", { params });

	return slugs.data;
}

export const CasesGateway = {
	getCasesPreview,
	getCase,
	getAllSlugs,
};
