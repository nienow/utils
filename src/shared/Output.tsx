import React from 'react';

interface OutputProps {
	label?: string;
	value: string;
}

function Output(props: OutputProps) {
	return <div>
		<label>{props.label || 'Result'}</label>
		<div className="result">{props.value}</div>
	</div>;
}

export default Output;
