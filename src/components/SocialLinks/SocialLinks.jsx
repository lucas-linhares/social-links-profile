export default function SocialLinks() {
    const listLinks = [
        "GitHub",
        "Frontend Mentor",
        "LinkedIn",
        "Twitter",
        "Instagram"
    ]

    return listLinks.map((links, listId) => <li key={listId}><a>{links}</a></li>)
}