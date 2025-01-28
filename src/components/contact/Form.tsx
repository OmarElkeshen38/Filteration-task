import styles from './Contact.module.css';

function Form() {
    return (
        <div className="col-md-6 py-5">
            <div className={styles.form}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone" />
                <div className={styles.btn}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Form
