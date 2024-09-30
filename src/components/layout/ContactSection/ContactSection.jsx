"use client";
import styles from "./ContactSection.module.css";
import INSTAGRAM from "@/assets/contactImages/instagram.svg";
import TWITTER from "@/assets/contactImages/twitter.svg";
import LINKEDIN from "@/assets/contactImages/linkedin.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UploadFiles from "./UploadFiles/UploadFiles";
// import { directus } from "../../../plugins/axios";
// import axios from "axios";

function ContactSection() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { register, handleSubmit, formState, setValue, trigger, reset } =
		useForm({
			mode: "onChange",
		});

	const nameError = formState.errors["name"]?.message;
	const emailError = formState.errors["email"]?.message;
	const messageError = formState.errors["message"]?.message;
	const API_KEY = process.env.NEXT_PUBLIC_PIPEDRIVE_API;

	async function createPerson(data) {
		const personUrl = `https://api.pipedrive.com/v1/persons?api_token=${API_KEY}`;

		const personData = {
			name: data.name,
			email: data.email,
		};

		try {
			const response = await fetch(personUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(personData),
			});

			const result = await response.json();
			if (result.success) {
				return result.data.id; // return person_id
			} else {
				console.error("Error creating person:", result.error);
				return null;
			}
		} catch (error) {
			console.error("Network error while creating person:", error);
			return null;
		}
	}

	async function createLead(name, person_id) {
		const leadUrl = `https://api.pipedrive.com/v1/leads?api_token=${API_KEY}`;

		const leadData = {
			title: name, // This is the title of the lead
			person_id: person_id, // Associate the lead with the created person
		};

		try {
			const response = await fetch(leadUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(leadData),
			});

			const result = await response.json();
			if (result.success) {
				console.log("Lead created successfully:", result.data);
			} else {
				console.error("Error creating lead:", result.error);
			}
		} catch (error) {
			console.error("Network error while creating lead:", error);
		}
	}

	const onSubmit = async (data) => {
		// Prepare the data for Pipedrive Leads

		// Correct URL structure for creating a lead in Pipedrive
		console.log(data);

		// const person_id = await createPerson(data);

		// // Step 2: Create Lead if person creation was successful
		// if (person_id) {
		// 	await createLead(data.name, person_id);
		// } else {
		// 	console.error("Failed to create lead because person creation failed.");
		// }
	};

	return (
		<section className={styles.container} id="contact">
			<div
				className={`${styles.contactCard} ${
					isSubmitted ? styles.contactCardSuccess : ""
				}`}
			>
				{isSubmitted ? (
					<div className={styles.successAnimation}>
						<svg
							className={styles.checkmark}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 52 52"
						>
							<circle
								className={styles.checkmarkCircle}
								cx="26"
								cy="26"
								r="25"
								fill="none"
							/>
							<path
								className={styles.checkmarkCheck}
								fill="none"
								d="M14.1 27.2l7.1 7.2 16.7-16.8"
							/>
						</svg>
					</div>
				) : (
					<>
						<div className={styles.content}>
							<div className={styles.text}>
								<h2>Get Your Product estimation in 48 hours</h2>
								<p>
									Share your project details, and we’ll deliver an accurate
									estimate for your project development
								</p>
							</div>
							<div className={styles.actions}>
								<Link
									href="https://instagram.com/logiform"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.action}
								>
									<Image
										src={INSTAGRAM}
										alt="instagram"
										width={20}
										height={20}
									/>
								</Link>
								<Link
									href="https://x.com/Logiform_io"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.action}
								>
									<Image src={TWITTER} alt="twitter" width={20} height={20} />
								</Link>
								<Link
									href="https://www.linkedin.com/company/logiformio"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.action}
								>
									<Image src={LINKEDIN} alt="linkedin" width={20} height={20} />
								</Link>
							</div>
						</div>
						<form
							className={styles.formContainer}
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className={styles.form}>
								<input
									className={`${styles.name} ${nameError ? styles.error : ""}`}
									type="text"
									placeholder="Your name *"
									{...register("name", {
										required: "This field is required",
									})}
								/>

								<input
									className={`${styles.email} ${
										emailError ? styles.error : ""
									}`}
									type="text"
									placeholder="Your email address *"
									{...register("email", {
										required: "This field is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Invalid email address",
										},
									})}
								/>

								<textarea
									className={`${styles.tellUs} ${
										messageError ? styles.error : ""
									}`}
									placeholder="Tell us about your project"
									{...register("message", {
										required: "This field is required",
									})}
								/>
							</div>

							<UploadFiles setValue={setValue} trigger={trigger} />
							<div className={styles.contactButton}>
								<button type="submit">Contact us</button>
								<p>
									*By clicking the button on the left, you agree to the Privacy
									Policy.
								</p>
							</div>
						</form>
					</>
				)}
			</div>
		</section>
	);
}

export default ContactSection;
