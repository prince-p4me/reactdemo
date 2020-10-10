import React, { useState } from "react";

const HeaderComponent = ({ }) => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-sm-4">
              <a class="navbar-brand" href="#" style={{ color: "#6f06ce", fontSize: 19, fontWeight: "bold" }}>LOGO</a>
            </div>
            <div className="col-sm-8">
              <form class="form-inline my-2 my-lg-0">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="#">My Portfolio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="#">Client <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                      <button class="btn btn-outline-secondary my-2 my-sm-0"
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
  // return (
  //   <div style={{ paddingLeft: "15%", paddingTop: "1%", paddingBottom: "2%" }}>
  //     <div className="container">
  //       <div className="row">
  //         <div
  //           className="col-sm-4 col-sm-offset-4"
  //           style={{ color: "#6f06ce", fontSize: 19, fontWeight: "bold" }}
  //         > LOGO
  //         </div>

  //         <div className="col-sm-8">
  //           <div className="row">
  //             <div className="col-sm-2">Home</div>
  //             <div className="col-sm-2">My Portfolio</div>
  //             <div className="col-sm-2">Clients</div>
  //             <div
  //               className="col-sm-2"
  //               style={{ border: "1px solid #dad6d6;" }}
  //             >
  //               Get in Touch
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default HeaderComponent;
