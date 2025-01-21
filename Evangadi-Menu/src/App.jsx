import React, { Component } from "react";
import Header from "./assets/components/Header/Header";
import FoodItems from "./assets/components/FoodItems/FoodItems";
 


class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
           <FoodItems/>
           
        </div>
      </>
    );
  }
}
export default App;
