import React, { Component } from "react";
import dataGlasses from "../data/dataGlasses.json";

export default class TryingGlasses extends Component {
  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          src={glassesItem.url}
          key={index}
        />
      );
    });
  };

  render() {
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "68px",
      opacity: "0.7",
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,127,0,.5)",
      textAlign: "left",
      height: "105px",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "2000px",
          backgroundSize: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0, 0, 0,.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    className="position-absolute"
                    style={styleGlasses}
                    src="./glassesImage/v1.png"
                  />
                  <div className="position-relative" style={infoGlasses}>
                    <span
                      style={{ color: "#ABB2FF", fontSize: "17px" }}
                      className="font-weight-bold"
                    >
                      Glass Name
                    </span>
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "400" }}>
                      Description
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          {/* Div contains all selected glasses*/}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
