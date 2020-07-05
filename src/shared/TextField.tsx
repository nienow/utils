import React, { FormEvent } from 'react';

interface TextFieldProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
}

function TextField(props: TextFieldProps) {
	function handleValueChange(event: FormEvent) {
		const target: HTMLInputElement = event.target as HTMLInputElement;
		props.onChange(target.value);
	}

	return <div className="field">
		<label>{props.label}</label>
		<input type="text" value={props.value} onChange={handleValueChange}/>
	</div>;
}

export default TextField;
