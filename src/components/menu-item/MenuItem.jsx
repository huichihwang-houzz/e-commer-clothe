import React from "react";
import "./menu-item.scss";

const MenuItem = ({title, imageUrl, size}) => {
	const style = {
		backgroundImage: `url(${imageUrl})`
	};

	return (
		<div className={`menu-item ${size}`}>
			<div className="background-image" style={style}/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};


export default MenuItem;