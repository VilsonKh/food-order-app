import React from "react";
import sushiPhoto from "../../assets/sushi.jpg"
import styles from "./Header.module.css"
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return <React.Fragment>
    <header className={styles.header}>
      <h1>Япона Кухня</h1>
      <HeaderCardButton></HeaderCardButton>
    </header>
    <div className={styles["main-image"]}>
      <img src={sushiPhoto} alt="Блюда японской кухни" />
    </div>
  </React.Fragment>
}

export default Header;