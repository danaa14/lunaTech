import styles from './Footer.module.css';
const Footer = () => {

    return (
        <footer className={styles.footer}>
            <article>
                <div>
                    <p>Contacts:</p>
                    <ul>
                        <li>+373 95532433 - Manager</li>
                        <li>+373 44829204 - Information Center</li>
                        <li>lunatech@gmail.com</li>
                    </ul>
                </div>
                <h2>LunaTech</h2>
                <div>
                    <p>Socials</p>
                    <ul>
                        <li className='insta'><a href="https://www.instagram.com/accounts/login/?hl=en" target="blank"><img src="/insta.png" alt="Instagram" /></a></li>
                        <li className='facebook'><a href="https://www.facebook.com/" target="blank"><img src="/facebook.png" alt="Facebook" /></a></li>
                        <li className='tiktok'><a href="https://www.tiktok.com/en/" target="blank"><img src="/tiktok.png" alt="TikTok" /></a></li>
                    </ul>
                </div>
                
            </article>
           
            <p className="footer-bottom">© 2025 Luna Tech. All rights reserved.</p>
        </footer>
    )
}   

export default Footer;