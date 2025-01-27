import styles from './MainBtn.module.css';

function MainBtn({ bgc = '#5180F6', color = '#fff' }) {
    const buttonStyles = {
        backgroundColor: bgc,
        color: color,
    };

    return (
        <button className={styles.mainBtn} style={buttonStyles}>
            Help Me
        </button>
    );
}

export default MainBtn
