import styles from './Contact.module.css';
import emailIcon from '../../assets/icons/email.svg';
import phoneIcon from '../../assets/icons/phone.svg';

function Info() {
  return (
    <div className="col-md-6 py-5">
      <div className={styles.info}>
        <div className="d-flex gap-4 align-items-center">
            <img src={emailIcon} alt="email icon" />
            <p>upskilling.eg1@gmail.com</p>
        </div>
        <div className="d-flex gap-4 align-items-center">
            <img src={phoneIcon} alt="phone icon" />
            <p>+20 115 493 2137</p>
        </div>
      </div>
    </div>
  )
}

export default Info
