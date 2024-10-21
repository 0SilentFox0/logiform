import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
	async headers() {
		const headers = [
			{
				key: "Permissions-Policy",
				value:
					"camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
			},
		];

		// Add development-specific headers
		if (process.env.NODE_ENV === "development") {
			headers.push({
				key: "Permissions-Policy",
				value:
					"private-state-token-redemption=(), private-state-token-issuance=()",
			});
		}

		return [
			{
				source: "/:path*",
				headers,
			},
		];
	},
	output: "export", // Generates a static site.
	distDir: "./build", // Custom build directory.
	images: {
		unoptimized: true, // Disables Next.js image optimization for static export.
	},
	// experimental: {
	// 	serverActions: true,
	//   },
	webpack: (config) => {
		// Add support for .mov video files
		config.module.rules.push({
			test: /\.(mov|mp4|avi)$/i,
			use: {
				loader: "file-loader",
				options: {
					publicPath: "/_next/static/videos/",
					outputPath: "static/videos/",
					name: "[name].[hash].[ext]",
					esModule: false,
				},
			},
		});
		return config;
	},
};

if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

export default nextConfig;
