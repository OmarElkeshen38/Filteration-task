import styles from './Service.module.css';


function ServiceItem({ title, image, desc }: { title: string, image: string, desc: string }) {
    return (
        <div className="col-lg-4 col-md-6 mt-5">
            <div className={styles.serviceItem}>
                <div className={styles.serviceImg}>
                    <img src={image} alt="service" />
                </div>
                <div className={styles.serviceContent}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
