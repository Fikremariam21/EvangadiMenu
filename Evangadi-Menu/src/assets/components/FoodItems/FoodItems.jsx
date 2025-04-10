
import React, { Component } from "react";
import SingleFood from "../SingleFood/SingleFood";
import menu from "../../../commonResource/data";
import styles from '../FoodItems/FoodItems.module.css'

export default class FoodItems extends Component {
  render() {
    return (
      <div>
        <div className={styles["foods-container"]}>
          {menu.map(({ id, img, title, price, desc }) => {
            return (
              <SingleFood
                key={id}
                img={img}
                title={title}
                price={price}
                desc={desc} 
              />
            );
          })}
        </div>
      </div>
    );
  }
}
