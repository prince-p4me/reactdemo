import React, { useState } from "react";

const HeaderComponent = ({ }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-sm-4">
              <a className="navbar-brand" href="#" style={{ color: "#6f06ce", fontSize: 19, fontWeight: "bold" }}>LOGO</a>
            </div>
            <div className="col-sm-8">
              <form className="form-inline my-2 my-lg-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#">My Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#">Client <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                      <button className="btn btn-outline-secondary my-2 my-sm-0"
                        style={{ borderColor: "#e7ebef" }}
                      >Get in Touch</button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div >
  )
};
export default HeaderComponent;
