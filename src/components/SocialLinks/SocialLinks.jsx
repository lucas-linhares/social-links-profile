function SocialLinks() {
    const links = [
        { label: "GitHub", url: "https://github.com" },
        { label: "Frontend Mentor", url: "https://frontendmentor.io" },
        { label: "LikedIn", url: "https://linkedin.com" },
        { label: "Twitter", url: "https://twitter.com" },
        { label: "Instagram", url: "https://instagram.com" }
    ]

    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.label}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SocialLinks