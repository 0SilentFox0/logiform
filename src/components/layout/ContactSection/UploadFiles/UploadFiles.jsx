import { useState, useRef, useEffect } from "react";
import styles from "./UploadFiles.module.css";
import { TfiUpload } from "react-icons/tfi";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function UploadFiles({ setValue, trigger }) {
	const [uploadText, setUploadText] = useState("Drag & Drop a File");
	const [selectedFile, setSelectedFile] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const inputRef = useRef();

	useEffect(() => {
		const updateText = () =>
			setUploadText(
				window.innerWidth <= 968
					? "Upload file"
					: "Drop your technical specs or design sketches"
			);
		updateText();
		window.addEventListener("resize", updateText);

		return () => window.removeEventListener("resize", updateText);
	}, []);

	const handleFileChange = (event) => {
		const validTypes = ["image/jpeg", "image/png", "application/pdf"];
		const file = event.target.files[0];

		if (file && validTypes.includes(file.type)) {
			setSelectedFile(file);
			setValue("file", { base64: "", file }); // Store the file object in form state
			trigger("file");

			// Convert file to Base64
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64Data = reader.result;
				// Update form state with Base64 data
				setValue("file", { base64: base64Data, file }); // Store Base64 along with file object
			};
			reader.readAsDataURL(file);
		} else {
			alert("Unsupported file type");
		}
	};

	const clearFileInput = () => {
		inputRef.current.value = "";
		setSelectedFile(null);
		setValue("file", null); // Clear the file in form state
		trigger("file"); // Optionally trigger validation
	};

	const handleDragOver = (event) => event.preventDefault();

	const handleDrop = (event) => {
		event.preventDefault();
		const validTypes = ["image/jpeg", "image/png", "application/pdf"];
		const file = event.dataTransfer.files[0];

		if (file && validTypes.includes(file.type)) {
			setSelectedFile(file);
			setValue("file", { base64: "", file }); // Store the file object in form state
			trigger("file");

			// Convert file to Base64
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64Data = reader.result;
				// Update form state with Base64 data
				setValue("file", { base64: base64Data, file }); // Store Base64 along with file object
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div
			className={`${styles.upload} ${isDragging ? styles.dragging : ""}`}
			onDragOver={handleDragOver}
			onDragLeave={() => setIsDragging(false)}
			onDrop={handleDrop}
			onDragEnter={() => setIsDragging(true)}
		>
			<input
				ref={inputRef}
				type="file"
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>

			{!selectedFile ? (
				<button
					type="button"
					onClick={() => inputRef.current.click()}
					className={styles.uploadFile}
				>
					<TfiUpload className={styles.uploadImg} />
					<p>{uploadText}</p>
				</button>
			) : (
				<div className={styles.fileCard}>
					<IoDocumentOutline className={styles.icon} />
					<div className={styles.fileInfo}>
						<h6>{selectedFile.name}</h6>
						<button onClick={clearFileInput}>
							<IoMdClose className={styles.closeIcon} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default UploadFiles;
