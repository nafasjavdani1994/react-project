import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import img1 from "../images/elegant-smartphone-composition.jpg";
import img2 from "../images/samuel-angor-3tqzbtSRRqA-unsplash.jpg";
import img3 from "../images/3105004.jpg";
import img4 from "../images/tibout-maes-XIRCmxvRgpI-unsplash.jpg";

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card img={img1} title="Iphone 13" price="1000 $" />
        <Card img={img2} title="Iphone 14" price="1200 $" />
        <Card img={img3} title="Iphone 11" price="900 $" />
        <Card img={img4} title="Iphone X" price="700 $" />
      </div>
    );
  }
}
