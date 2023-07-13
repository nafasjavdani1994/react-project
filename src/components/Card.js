import React, { Component } from "react";
import styles from "./Card.module.css";

export default class Card extends Component {
  render() {
    const {img, title, price} = this.props;
    return (
    <div className={styles.container}>
        <img className={styles.cardImg} src={img} alt="cardImg" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
    );
  }
}
