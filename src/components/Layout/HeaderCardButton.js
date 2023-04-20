import CardIcon from "..//Card/CardIcon";
import styles from "./HeaderCardButton.module.css";


const HeaderCardButton = (props) => {
	return (
		<button className={styles.button}>
			<span className={styles.icon}>
        <CardIcon></CardIcon>
      </span>
			<span>Корзина</span>
			<span className={styles.badge}>
        2
      </span>
		</button>
	);
};

export default HeaderCardButton;
