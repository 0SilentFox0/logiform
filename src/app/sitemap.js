export default function sitemap() {
	// Add your site URLs here
	return [
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
	];
}
