import React from "react";
import "./homepage.scss";

import Directory from "../../components/directory/Directory";
import sections from "../../data/sections";

const HomePage = () => {
	return (
		<div className="homepage">
			<Directory sections={sections}/>
		</div>
	);
};

export default HomePage;
