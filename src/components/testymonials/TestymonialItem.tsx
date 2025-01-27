import styles from './Testymonial.module.css';
import starIcon from '../../assets/icons/star.svg';

function TestymonialItem({ name, image, testymonial }: { name: string, image: string, testymonial: string }) {
    return (
        <div className="col-md-6">
            <div className={styles.testymonialItem}>
                <div className={styles.testymonialImg}>
                    <img src={image} alt="user" />
                </div>
                <div className={styles.testymonialContent}>
                    <div className="testymonialUserInfo">
                        <h3>{name}</h3>
                        <p>{testymonial}</p>
                        <div className="d-flex gap-2">
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestymonialItem
