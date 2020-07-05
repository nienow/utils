import React from 'react';

interface CodeSampleProps {
	label?: string;
	value: string;
}

function CodeSample(props: CodeSampleProps) {
	return <div>
		<label>{props.label || 'Code'}</label>
		<code>{props.value}</code>
	</div>;
}

export default CodeSample;
