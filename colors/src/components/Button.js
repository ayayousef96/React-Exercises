import React from "react";

const Button = (props) => {
	return (
		<button
			style={{ background: props.color }}
			className={props.btn}
			value={props.color}
			onClick={props.click}>
			{props.color}
		</button>
	);
};
export default Button;