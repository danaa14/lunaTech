import styles from './Footer.module.css';
const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className="footer-lines">
            <div></div>
            <div></div>
</div>
            <article>
                <div>
                    <p>Contacts:</p>
                    <ul>
                        <li>+373 95532433 - manager</li>
                        <li>+373 44829204 - information center</li>
                        <li>lunatech@gmail.com</li>
                    </ul>
                </div>
                
                <div>
                    <p>Socials</p>
                    <ul>
                        <li><a href="https://www.instagram.com/accounts/login/?hl=en" target="blank"><img src="/insta.png" alt="Instagram" /></a></li>
                        <li><a href="https://www.facebook.com/" target="blank"><img src="/facebook.png" alt="Facebook" /></a></li>
                        <li><a href="https://www.tiktok.com/en/" target="blank"><img src="/tiktok.png" alt="TikTok" /></a></li>
                    </ul>
                </div>
            </article>
            <h2>Luna Tech</h2>
            <p className="footer-bottom">© 2025 Luna Tech. All rights reserved.</p>
        </footer>
    )
}   

export default Footer;