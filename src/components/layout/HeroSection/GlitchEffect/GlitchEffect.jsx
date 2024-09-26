"use client";
import { useEffect, useState } from "react";
import styles from "./GlitchEffect.module.css";

const GlitchEffect = () => {
	const [text, setText] = useState("web 3");
	const [color, setColor] = useState("#b14efd");

	useEffect(() => {
		const interval = setInterval(() => {
			setText((prevText) => (prevText === "web 3" ? "web 2" : "web 3"));
			setColor((prevColor) =>
				prevColor === "#1B9DE2" ? "#b14efd" : "#1B9DE2"
			);
		}, 3000);

		return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
	}, []);

	return (
		<h2
			className={`${styles.hero} ${styles.glitch} ${styles.layers}`}
			data-text={text}
			style={{ color: color }}
		>
			<span>{text}</span>
		</h2>
	);
};

export default GlitchEffect;
