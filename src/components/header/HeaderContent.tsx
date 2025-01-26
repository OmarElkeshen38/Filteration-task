import styles from './Header.module.css';

function HeaderContent() {
  return (
    <div className={styles.headerContentDesc}>
    <h3>Experts</h3>
    <h2>Lorem <br /><span>Lorem lorem</span></h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
  </div>
  )
}

export default HeaderContent
