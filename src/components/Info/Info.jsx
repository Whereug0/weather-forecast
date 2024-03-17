import React from "react";
import Select from "react-select";
import "./Info.scss";
import svg from "../../assets/icons/Frame 3.svg";

const Info = () => {
  return (
    <div className="infoWrapp">
      <div className="input-wrapp">
        <img className="svg" src={svg} alt="svg" />
        <Select classNamePrefix="custom-select" placeholder="Город" />
      </div>

      <div className="info">
        <h1 className="cloudy">Clody</h1>
        <h1 className="temp">26 C</h1>
        <p className="date">Sunday | 12 dec 2023</p>
      </div>
    </div>
  );
};

export default Info;
