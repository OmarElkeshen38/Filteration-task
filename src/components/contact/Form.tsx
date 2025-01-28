import { useState } from "react";
import axios from "axios";
import styles from './Contact.module.css';

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const getFormData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://upskilling-egypt.com:3001/contact", formData);
            console.log("Response:", response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <div className="col-md-6 py-5">
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={getFormData}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={getFormData}
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={getFormData}
                />
                <div className={styles.btn}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Form
