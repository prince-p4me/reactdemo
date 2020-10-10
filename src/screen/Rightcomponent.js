import React from "react";

const Rightcomponent = ({
  count,
  handleIncrementClick,
  handleDecrementClick,
}) => (
  <div style={{ padding: "15%" }}>
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 7,
        padding: 12,
        height: "80%",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50%" }}
      >
        {" "}
        No Value Selected{" "}
      </div>
    </div>
  </div>
);

export default Rightcomponent;
