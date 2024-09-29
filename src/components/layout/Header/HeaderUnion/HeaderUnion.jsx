import styles from "./HeaderUnion.module.css";

function HeaderUnion() {
	return (
		<svg
			className={styles.union}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1220 73"
			width="1200"
			height="73"
			fill="none"
			aria-hidden="true"
		>
			<title>Decorative header shape</title>
			<g filter="url(#filter0_dd_478_1046)">
	<path
		fillRule="evenodd"
		clipRule="evenodd"
		d="M199.709 28.1057C206.476 28.1057 212.151 23.2049 216.516 17.9389C221.548 11.8602 229.086 8 237.504 8H966.4C974.537 8 981.871 11.5904 986.912 17.2985C991.87 22.8025 997.942 28.1057 1005.125 28.1057C1012.279 28.1057 1018.345 22.8361 1023.294 17.3606C1028.398 11.6778 1035.732 8.10574 1043.856 8.10574H1180C1195.2 8.10574 1207.73 20.6418 1207.73 36.1057C1207.73 51.5697 1195.2 64.1057 1180 64.1057H1043.856C1035.731 64.1057 1028.397 60.5595 1023.293 54.9126C1018.345 49.4151 1012.278 44.1057 1005.127 44.1057C998.031 44.1057 991.748 49.3813 986.748 54.8501C981.707 60.4719 974.37 64 966.4 64H237.504C228.831 64 221.118 60.2054 215.92 54.2164C211.41 48.9817 205.637 44.1057 198.882 44.1057C192.097 44.1057 186.358 49.0129 181.86 54.2749C176.816 60.2912 169.377 64.1057 160.86 64.1057H36C20.8 64.1057 8 51.5697 8 36.1057C8 20.6418 20.8 8.10574 36 8.10574H160.86C169.374 8.10574 176.824 11.9459 181.926 17.9972C186.504 23.2359 192.257 28.1057 199.709 28.1057Z"
		fill="white"
	/>
</g>
			<defs>
				<filter
					id="filter0_dd_478_1046"
					x="0"
					y="0"
					width="1250"
					height="72.1057"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="4" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.105882 0 0 0 0 0.615686 0 0 0 0 0.886275 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_478_1046"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.105882 0 0 0 0 0.615686 0 0 0 0 0.886275 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_478_1046"
						result="effect2_dropShadow_478_1046"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_478_1046"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}

export default HeaderUnion;
