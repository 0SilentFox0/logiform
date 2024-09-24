"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./HowItWorksSection.module.css";

const steps = [
  {
    id: "c1",
    title: "Clarifying needs & requirements",
    description:
      "Created 100+ project our team understand best industry practices and trends. We don't blindly follow your requirements but help you find the most efficient and budget-friendly solution.",
  },
  {
    id: "c2",
    title: "Developing the concept",
    description:
      "Our team of experts will develop a comprehensive concept based on your requirements and industry best practices.",
  },
  {
    id: "c3",
    title: "Design and prototyping",
    description:
      "We create detailed designs and interactive prototypes to visualize the final product before development begins.",
  },
  {
    id: "c4",
    title: "Development and testing",
    description:
      "Our developers build your solution using cutting-edge technologies, with rigorous testing at every stage.",
  },
  {
    id: "c5",
    title: "Launch and support",
    description:
      "We ensure a smooth launch of your product and provide ongoing support and maintenance as needed.",
  },
];

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState("c1");

  return (
    <section className={styles.container} aria-labelledby="how-it-works-title">
      <div className={styles.titleContainer}>
        <h2 id="how-it-works-title" className={styles.title}>
          How it works
        </h2>
        <p className={styles.subtitle}>
          The best industry solutions, technical expertise, and deep
          understanding of marketing will help us create a winning product
          together.
        </p>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <input
                type="radio"
                name="slide"
                id={step.id}
                checked={activeStep === step.id}
                onChange={() => setActiveStep(step.id)}
                className={styles.radioInput}
              />
              <label htmlFor={step.id} className={styles.card}>
                <div className={styles.row}>
                  <div className={styles.icon}>{"0" + (index + 1)}</div>
                  <div className={styles.description}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Link href="#contact" className={styles.contactButton}>
				Contact us
			</Link>
    </section>
  );
}

export default HowItWorksSection;

