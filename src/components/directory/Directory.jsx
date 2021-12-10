import React from "react";
import "./directory.scss";

import MenuItem from "../menu-item/MenuItem";

const Directory = ({sections}) => {

	return (
		<div className="directory-menu">
			{sections.map((section) => {
				return (
					<MenuItem
						key={section.id}
						title={section.title.toUpperCase()}
						imageUrl={section.imageUrl}
						size={section.size}
					/>
				);
			})}
		</div>
	);
};

export default Directory;
