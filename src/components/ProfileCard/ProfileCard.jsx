import avatar from '../../assets/images/avatar-jessica.jpeg'
import SocialLink from '../SocialLink/SocialLink.jsx'

function ProfileCard() {

    const profileAvatar = avatar

    return (
        <div>
            <main>
                <section>
                    <header>
                        <figure>
                            <img src={profileAvatar} alt='Avatar-profile'/>
                        </figure>
                        <div>
                            <h1>Jessica Randall</h1>
                            <p>London, United Kingdom</p>
                        </div>
                    </header>
                    
                    <p>"Front-end developer and avid reader."</p>
                    <SocialLink />
                </section>
            </main>
        </div>
    )
}

export default ProfileCard