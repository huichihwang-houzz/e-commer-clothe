import React from "react";
import './homepage.scss';

const MenuItem = ({title}) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">
        <div className="directory-menu">
            <MenuItem title="HATS"/>
            <MenuItem title="JACKETS"/>
            <MenuItem title="SNEAKERS"/>
            <MenuItem title="WOMEN"/>
            <MenuItem title="MEN"/>
        </div>
    </div>
  );
};

export default HomePage;
