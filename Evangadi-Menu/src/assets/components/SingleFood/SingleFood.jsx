// import React, { Component } from "react"
// import propTypes from 'prop-types'

// import styles from './SingleFood.module.css'
// // import styles from "../SingleFood/";
//  class SingleFood extends Component {
//   render() {
//     return (
//       <div>
//         <div className={styles["single-food"]}>
//           <div className="img">
//             <img src={this.props.img} />
//           </div>
//           <div className={styles["title-price"]}>
//             <h3> {this.props.title}</h3>
//             <p>${this.props.price}</p>
//           </div>
//           <div className={styles["food-desc"]}>{this.props.desc}</div>
//         </div>
//       </div>
//     );
//   }
// }
// SingleFood.propTypes = {
//     title: propTypes.string.isRequired,
//     price: propTypes.number.isRequired,
//     desc: propTypes.string.isRequired
// }

// export default SingleFood

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

SingleFood.propTypes = {
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    desc: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
};

export default SingleFood;
