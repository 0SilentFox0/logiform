import { useState, useRef, useEffect } from 'react';
import styles from './UploadFiles.module.css';
import { TfiUpload } from 'react-icons/tfi';
import { IoDocumentOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineDone } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function UploadFiles({ setValue, trigger }) {
    const [uploadText, setUploadText] = useState('Drag & Drop a File');
    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('select');
    const [isDragging, setIsDragging] = useState(false); // Track drag state

    const inputRef = useRef();

    useEffect(() => {
        const updateTextBasedOnScreenSize = () => {
            if (window.innerWidth <= 968) {
                setUploadText('Upload file');
            } else {
                setUploadText('Drag & Drop a File');
            }
        };

        updateTextBasedOnScreenSize();
        window.addEventListener('resize', updateTextBasedOnScreenSize);

        return () => {
            window.removeEventListener('resize', updateTextBasedOnScreenSize);
        };
    }, []);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setValue('file', file); // Set the file in react-hook-form
            trigger('file'); // Trigger validation
            setIsDragging(false); // Reset drag state after file selection
        }
    };

    const onChooseFile = (e) => {
        e.preventDefault();
        inputRef.current.click();
    };

    const clearFileInput = (e) => {
        e.preventDefault();
        inputRef.current.value = '';
        setSelectedFile(null);
        setProgress(0);
        setUploadStatus('select');
        setValue('file', null); // Clear the file in react-hook-form
        trigger('file'); // Trigger validation
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true); // Set drag state to true when dragging over the area
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false); // Reset drag state when leaving the area
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false); // Reset drag state on drop
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            setSelectedFile(file);
            setValue('file', file); // Set the file in react-hook-form
            trigger('file'); // Trigger validation
        }
    };

    return (
        <div
            className={`${styles.upload} ${isDragging ? styles.dragging : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input ref={inputRef} type='file' onChange={handleFileChange} style={{ display: 'none' }} />

            {!selectedFile && (
                <button onClick={onChooseFile} className={styles.uploadFile}>
                    {isDragging ? (
                        <AiOutlineCloudUpload className={styles.draggingImg} />
                    ) : (
                        <>
                            <TfiUpload className={styles.uploadImg} />
                            <p>{uploadText}</p>
                        </>
                    )}
                </button>
            )}

            {selectedFile && (
                <div>
                    <div className={styles.fileCard}>
                        <span><IoDocumentOutline className={styles.icon} /></span>

                        <div className={styles.fileInfo}>
                            <div style={{ flex: 1 }}>
                                <h6>{selectedFile.name}</h6>
                            </div>
                            {uploadStatus === 'select' ? (
                                <button onClick={clearFileInput}>
                                    <IoMdClose className={styles.closeIcon} />
                                </button>
                            ) : (
                                <div className={styles.checkCircle}>
                                    {uploadStatus === 'uploading' ? (
                                        `${progress}%`
                                    ) : uploadStatus === 'done' ? (
                                        <MdOutlineDone />
                                    ) : null}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UploadFiles;