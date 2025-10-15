import styles from './ProfileCard.module.css'
import avatar from '../../assets/images/avatar-jessica.jpeg'
import SocialLink from '../SocialLink/SocialLink.jsx'

function ProfileCard() {

    const profileAvatar = avatar

    return (
        <div>
            <main>
                <div className={styles.wrapper}>
                    <section className={styles.sec}>
                        <header className={styles.header}>
                            <figure>
                                <img src={profileAvatar} alt='Avatar-profile' className={styles.header__avatar}/>
                            </figure>
                            <div className={styles.header__content}>
                                <h1 className={styles.header__mainTitle}>Jessica Randall</h1>
                                <p className={styles.header__paragraph}>London, United Kingdom</p>
                            </div>
                        </header>
                        
                        <p className={styles.sec__content}>"Front-end developer and avid reader."</p>
                        <SocialLink />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default ProfileCard