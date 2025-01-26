import styles from './Header.module.css';
import bgImage from '../../assets/images/headerBgImg.svg';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import MainBtn from '../common/mainBtn/MainBtn';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.bgImage}>
        <img src={bgImage} alt="header background image" />
      </div>
      <div className={styles.headerContent}>
        <HeaderTitle />
        <HeaderContent />
        <MainBtn />
      </div>
    </div>
  )
}

export default Header
