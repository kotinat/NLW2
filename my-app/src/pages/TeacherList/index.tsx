import * as React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <header id="page-header">
        <div id="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <Link to="/">
            <img src={logoImg} alt="Proffy" />
          </Link>
        </div>
        <div id="header-content">
          <strong>Estes são os proffys disponíveis</strong>
        </div>
      </header>
    </div>
  );
};

export default TeacherList;
