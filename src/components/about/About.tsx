import styles from './About.module.css';
import aboutUsLayer from '../../assets/images/aboutBgSvg.svg';
import rubbishImg from '../../assets/images/rubbishImg.png';
import MainBtn from '../common/mainBtn/MainBtn';

function About() {
  return (
    <div className={`my-5 ${styles.aboutUs}`}>
      <img className={styles.aboutUsLayer} src={aboutUsLayer} alt="svg layer" />
      <div className="container py-5">
        <div className={`${styles.aboutUsContent}`}>
          <div className="row">
            <div className={`col-lg-6 col-md-12 ${styles.leftContentWrapper}`}>
              <div className={`${styles.leftContent}`}>
                <h2 className="my-4">About Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                <div className={styles.rubbishImg}>
                  <img className="w-100 object-fit" src={rubbishImg} alt="" />
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-12 ${styles.rightContentWrapper}`}>
              <div className={`text-end ${styles.rightContent}`}>
                <h2 className="my-4">Where</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <MainBtn bgc="#EEC04B" color="#515151" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
