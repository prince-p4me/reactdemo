import React, { useState } from "react";

const HeaderComponent = ({}) => {
  return (
    <div style={{ paddingLeft: "15%", paddingTop: "1%", paddingBottom: "2%" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-4 col-sm-offset-4"
            style={{ color: "#6f06ce", fontSize: 19, fontWeight: "bold" }}
          >
            LOGO
          </div>

          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-2">Home</div>
              <div className="col-sm-2">My Portfolio</div>
              <div className="col-sm-2">Clients</div>
              <div
                className="col-sm-2"
                style={{ border: "1px solid #dad6d6;" }}
              >
                Get in Touch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
