import React from "react";
import Select from "react-select";
import "./Info.scss";
import svg from "../../assets/icons/Frame 3.svg";
import avatar from '../../assets/images/Ellipse 33.png'
import cloudImg from '../../assets/icons/icon.svg'

const Info = (props) => {
  const currentDate = new Date(); // Получаем текущую дату и время

  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); // День недели
  const dayOfMonth = currentDate.getDate(); // Число месяца
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' }); // Месяц
  const year = currentDate.getFullYear(); // Год


  const {
    weather,
    temp,
    date = `${dayOfWeek} | ${dayOfMonth} ${month} ${year}`,
  } = props





  return (
    <div className="infoWrapp">
      <div className="input-wrapp">
        <div className="input">
          <img className="svg" src={svg} alt="svg" />
          <Select classNamePrefix="custom-select" placeholder="Город" />
        </div>
        <img className="avatarInfo" src={avatar} alt="avatar" />
      </div>

      <div className="info">
        <h1 className="cloudy">{weather}</h1>
        <img className="cloudImg" src={cloudImg} alt="cloudImg" />
        <h1 className="temp">{temp}</h1>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default Info;
