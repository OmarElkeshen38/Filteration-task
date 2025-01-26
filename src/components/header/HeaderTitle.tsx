import styles from './Header.module.css';
import truckIcon from '../../assets/icons/truck.svg';

function HeaderTitle() {
  return (
    <div className={`d-flex justify-content-center gap-3 ${styles.headerTitle}`}>
          <div className={styles.truckIcon}>
            <img className='w-100' src={truckIcon} alt="truck icon" />
          </div>
          <div className={styles.textTitle}>
            <h1>Round Rock<br /><span>Trush Hauling</span></h1>
          </div>
        </div>
  )
}

export default HeaderTitle
