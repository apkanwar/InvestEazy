import styles from '../styles/footer.module.css'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FloatingModal from './miniComponents/floatingModal';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerBar}>
        <div className={styles.copy}>
          <div className={styles.bottomTitle}>
            &#169; 2022 InvestEazy
          </div>
          <div className={styles.bottomLinks}>
            <div className={styles.link}>
              Privacy Policy
            </div>
            <div className={styles.link}>
              Terms of Use
            </div>
          </div>
        </div>
        <div className={styles.toc}>
          <FloatingModal />
        </div>
        <div className={styles.contact}>
          <div className={styles.contactRow}>
            <div className={styles.contactText}>
              77 York Rd. Toronto, ON, Canada
            </div>
            <PlaceIcon />
          </div>
          <div className={styles.contactRow}>
            <div className={styles.contactText}>
              416-100-1001
            </div>
            <PhoneIcon />
          </div>
          <div className={styles.contactRow}>
            <div className={styles.socialMediaButton}>
              <FacebookIcon fontSize='large' />
            </div>
            <div className={styles.socialMediaButton}>
              <InstagramIcon fontSize='large' />
            </div>
            <div className={styles.socialMediaButton}>
              <LinkedInIcon fontSize='large' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}