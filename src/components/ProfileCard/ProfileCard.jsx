import SocialLinks from "../SocialLinks/SocialLinks"

function ProfileCard() {
    return (
        <div>
            <section>
                <header>
                    <figure>
                        <img alt="Avatar profile"/>
                        <figcaption>Avatar - Profile</figcaption>
                    </figure>
                    <h1>Jessica Randall</h1>
                    <p>London, United Kingdom</p>
                </header>

                <p>"Front-end developer and avid reader."</p>
                <SocialLinks />
            </section>
        </div>
    )
}

export default ProfileCard