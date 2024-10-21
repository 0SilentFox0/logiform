// export default function sitemap() {
// 	// Add your site URLs here
// 	return [
		// {
		// 	url: "https://logiform.io",
		// 	lastModified: new Date(),
		// 	changeFrequency: "yearly",
		// 	priority: 1,
		// },
		// {
		// 	url: "https://logiform.io/blog",
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.7,
		// },
		// {
		// 	url: "https://logiform.io/case-studies",
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.7,
		// },
		// {
		// 	url: "https://logiform.io/about-us",
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.7,
		// },
		// {
		// 	url: "https://logiform.io/terms-conditions",
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.7,
		// },
		// {
		// 	url: "https://logiform.io/privacy-policy",
		// 	lastModified: new Date(),
		// 	changeFrequency: "weekly",
		// 	priority: 0.7,
		// },
// 	];
// }

import { BlogGateway } from "@/api/blog/blog-gateway";
import { CasesGateway } from "@/api/cases/cases-gateway";

export default async function sitemap() {
  const baseUrl = 'https://logiform.io'

  try {
    // Fetch data concurrently
    const [blogPosts, caseStudies] = await Promise.all([
      BlogGateway. (),
      getCaseStudies(),
    ])

    // Static pages (always included even if dynamic data fetch fails)
    const staticPages = [
			{
				url: "https://logiform.io",
				lastModified: new Date(),
				changeFrequency: "yearly",
				priority: 1,
			},
			{
				url: "https://logiform.io/blog",
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.7,
			},
			{
				url: "https://logiform.io/case-studies",
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.7,
			},
			{
				url: "https://logiform.io/about-us",
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.7,
			},
			{
				url: "https://logiform.io/terms-conditions",
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.7,
			},
			{
				url: "https://logiform.io/privacy-policy",
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.7,
			},
      // ... other static pages
    ]

    // Generate dynamic URLs with error handling
    const blogUrls = (blogPosts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date_updated || post.date_created),
      changeFrequency: 'weekly' ,
      priority: 0.7,
    }))

    const caseStudyUrls = (caseStudies || []).map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.date_updated || study.date_created),
      changeFrequency: 'weekly' ,
      priority: 0.8,
    }))

    return [...staticPages, ...blogUrls, ...caseStudyUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return at least the static pages if there's an error
    return [
			...staticPages
    ]
  }
}
