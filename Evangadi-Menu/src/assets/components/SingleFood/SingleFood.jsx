import React, { Component } from "react";
import propTypes from 'prop-types';
import styles from './SingleFood.module.css';

class SingleFood extends Component {
  render() {
    const { img, title, price, desc } = this.props; 
    return (
      <div>
        <div className={styles["single-food"]}>
          <div className="img">
            <img src={img} alt={title} />
          </div>
          <div className={styles["title-price"]}>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className={styles["food-desc"]}>{desc}</div>
        </div> 
      </div> 
    ); 
  }
} 
// Props Types Validation
//**********************//
SingleFood.propTypes = {
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    desc: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
}; 

export default SingleFood;
