import styles from './ContactSection.module.css'

import INSTAGRAM from '../../../assets/contactImages/instagram.svg'
import TWITTER from '../../../assets/contactImages/twitter.svg'
import LINKEDIN from '../../../assets/contactImages/linkedin.svg'

import { useForm } from 'react-hook-form'
import UploadFiles from './UploadFiles/UploadFiles';

function ContactSection() {

    const { register, handleSubmit, formState, setValue, trigger } = useForm({
        mode: 'onChange'
    })

    const nameError = formState.errors['name']?.message
    const emailError = formState.errors['email']?.message
    const messageError = formState.errors['message']?.message

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className={styles.container} id='contact'>
            <div className={styles.contactCard}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Get Your Product estimation in 48 hours</h2>
                        <p>Share your project details, and we’ll deliver an accurate estimate for your project development</p>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <img src={INSTAGRAM} alt='instagram' />
                        </div>
                        <div className={styles.action}>
                            <img src={TWITTER} alt='twitter' />
                        </div>
                        <div className={styles.action}>
                            <img src={LINKEDIN} alt='linkedin' />
                        </div>
                    </div>
                </div>
                <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form}>
                        {nameError && (
                            <p className={styles.errorText}>
                                {nameError}
                            </p>
                        )}
                        <input className={styles.name} type='text' placeholder='Your name *' {...register('name', {
                            required: 'This field is required'
                        })} />
                        {emailError && (
                            <p className={styles.errorText}>
                                {emailError}
                            </p>
                        )}
                        <input className={styles.email} type='text' placeholder='Your email address *' {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address'
                            }
                        })} />
                        {messageError && (
                            <p className={styles.errorText}>
                                {messageError}
                            </p>
                        )}
                        <textarea className={styles.tellUs} type='textarea' placeholder='Tell us about your project' {...register('message', {
                            required: 'This field is required'
                        })} />
                    </div>
                    <UploadFiles setValue={setValue} trigger={trigger} />
                    <div className={styles.contactButton}>
                        <button type='submit'>Contact us</button>
                        <p>*By clicking the button on the left, you agree to the Privacy Policy.</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection