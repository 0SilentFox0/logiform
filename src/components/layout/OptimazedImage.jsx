import Image from "next/image";

const OptimizedImage = ({
	src,
	alt,
	width,
	height,
	className,
	sizes,
	quality = 85,
	fit = "cover",
	...props
}) => {
	// Construct the optimized image URL with Directus transformations
	const imageUrl = new URL(
		`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${src}`
	);
	imageUrl.searchParams.append("width", width);
	imageUrl.searchParams.append("height", height);
	imageUrl.searchParams.append("fit", fit);
	imageUrl.searchParams.append("quality", quality);

	// Construct a low-quality placeholder URL
	const placeholderUrl = new URL(imageUrl);
	placeholderUrl.searchParams.set("width", "10");
	placeholderUrl.searchParams.set("quality", "10");

	return (
		<Image
			src={imageUrl.toString()}
			alt={alt}
			width={width}
			height={height}
			className={className}
			sizes={
				sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			}
			quality={quality}
			placeholder="blur"
			blurDataURL={placeholderUrl.toString()}
			{...props}
		/>
	);
};

export default OptimizedImage;
