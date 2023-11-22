import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="tel">
                  <a href="">
                    <i className="fa-solid fa-phone"></i>
                    123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}
