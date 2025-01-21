import React, { Component } from "react";
import SingleFood from "../SingleFood/SingleFood";
import menu from "../../../commonResource/data";

export default class AllFoods extends Component {
  render() {
    return (
      <div>
        <div className="foods-container">
          {menu.map((food) => {
            return (
              <SingleFood
              key={food.id}
                img={food.img}
                title={food.title}
                price={food.price}
                desc={food.desc} 
              /> 
            );
          })}
        </div>
      </div>
    );
  }
}
