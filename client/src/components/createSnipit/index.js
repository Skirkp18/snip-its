import React from "react";
import { Link, NavLink, Route, useHistory } from "react-router-dom";


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

// forwarding ref (alternatively you can also prop drill it): https://reactjs.org/docs/forwarding-refs.html)
export const ForwardRefInput = React.forwardRef((props, ref) => (
	<div className='form-group'>
		<input className='form-control' ref={ref} {...props} />
	</div>
));

export function TextArea(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

export function FormBtn(props) {
	return (
		<button
			{...props}
			style={{ marginLeft: 10 }}
			className='btn btn-dark rounded-0'>
			{props.children}
		</button>
	);
}
