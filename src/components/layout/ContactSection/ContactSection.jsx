"use client";
import styles from "./ContactSection.module.css";
import INSTAGRAM from "@/assets/contactImages/instagram.svg";
import TWITTER from "@/assets/contactImages/twitter.svg";
import LINKEDIN from "@/assets/contactImages/linkedin.svg";
import { useForm } from "react-hook-form";
// import UploadFiles from "./UploadFiles/UploadFiles";
import { useState } from "react";
import Image from "next/image";
import { ContactGateway } from "@/api/contact/contact-gateway";

function ContactSection() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { register, handleSubmit, formState, setValue, trigger, reset } =
		useForm({
			mode: "onChange",
		});

	const nameError = formState.errors["name"]?.message;
	const emailError = formState.errors["email"]?.message;
	const messageError = formState.errors["message"]?.message;

	const onSubmit = async (data) => {
		try {
			const response = await ContactGateway.sendContact({
				name: data.name,
				email: data.email,
				message: data.message,
				// file: data.file,
			});

			console.log("Form successfully submitted:", response);
			setIsSubmitted(true);
			reset();

			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error("Error submitting form:", error);
			// Here you might want to set some error state and display it to the user
		}
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
									Share your project details, and we'll deliver an accurate
									estimate for your project development
								</p>
							</div>
							<div className={styles.actions}>
								<div className={styles.action}>
									<Image src={INSTAGRAM} alt="instagram" />
								</div>
								<div className={styles.action}>
									<Image src={TWITTER} alt="twitter" />
								</div>
								<div className={styles.action}>
									<Image src={LINKEDIN} alt="linkedin" />
								</div>
							</div>
						</div>
						<form
							className={styles.formContainer}
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className={styles.form}>
								{nameError && <p className={styles.errorText}>{nameError}</p>}
								<input
									className={styles.name}
									type="text"
									placeholder="Your name *"
									{...register("name", {
										required: "This field is required",
									})}
								/>
								{emailError && <p className={styles.errorText}>{emailError}</p>}
								<input
									className={styles.email}
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
								{messageError && (
									<p className={styles.errorText}>{messageError}</p>
								)}
								<textarea
									className={styles.tellUs}
									type="textarea"
									placeholder="Tell us about your project"
									{...register("message", {
										required: "This field is required",
									})}
								/>
							</div>
							{/* <UploadFiles setValue={setValue} trigger={trigger} /> */}
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
