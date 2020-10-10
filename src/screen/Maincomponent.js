import React from "react";
import Leftcomponent from "./Leftcomponent";
import Rightcomponent from "./Rightcomponent";
import HeaderComponent from "../component/header";

export const MainComponent = ({
  count,
  handleIncrementClick,
  handleDecrementClick,
}) => {
  return (
    <section >
      <HeaderComponent />
      <div className="container-fluid" style={{ backgroundColor: "#6f06ce" }}>
        <div className="row">
          <div className="col-sm-6">
            <Leftcomponent />
          </div>
          <div className="col-sm-6">
            <Rightcomponent />
          </div>
        </div>
      </div>
    </section>
  );
};

// export defa  ult MainComponent;
