import styles from './ProfileCard.module.css'
import SocialLink from '../SocialLink/SocialLink.jsx'
import avatarMobile from '../../assets/images/avatar-jessica-mobile.jpg'
import avatarDesktop from '../../assets/images/avatar-jessica-desktop.jpeg'

function ProfileCard() {

    return (
        <div>
            <main>
                <div className={styles.wrapper}>
                    <section className={styles.sec}>
                        <header className={styles.header}>
                            <picture>
                                <source srcSet={avatarMobile} media="(max-width: 600px)"/>
                                <source srcSet={avatarDesktop} media="(min-width: 601px)"/>
                                <img src={avatarMobile} alt='Avatar profile' className={styles.header__avatar} />
                            </picture>
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