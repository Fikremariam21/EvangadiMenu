import React, { Component } from "react";
import Header from "./assets/components/Header/Header";
import AllFoods from "./assets/components/AllFoods/AllFoods";


class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
          <AllFoods/>
           
        </div>
      </>
    );
  }
}
export default App;
