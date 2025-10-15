import styles from './SocialLink.module.css'

function SocialLink() {

    const links = [
        { label: "GitHub", url: "https://github.com" },
        { label: "Frontend Mentor", url: "https://frontendmentor.io" },
        { label: "LinkedIn", url: "https://linkedin.com" },
        { label: "Twitter", url: "https://twitter.com" },
        { label: "Instagram", url: "https://instagram.com" },
    ]

    return (
        <nav>
            <ul className={styles.menu}>
                {
                    links.map((link) => 
                        <li key={link.label} className={styles.menu__item}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.menu__link}>
                                {link.label}
                            </a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default SocialLink