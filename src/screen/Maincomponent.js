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
    <div>
      <HeaderComponent />
      <div style={{ backgroundColor: "#6f06ce", height: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Leftcomponent />
            </div>
            <div className="col-sm-6">
              <Rightcomponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export defa  ult MainComponent;
