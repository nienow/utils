import React, { FormEvent } from 'react';

interface TextFieldProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
	onEnter?: () => void;
}

function TextField(props: TextFieldProps) {
	function handleValueChange(event: FormEvent) {
		const target: HTMLInputElement = event.target as HTMLInputElement;
		props.onChange(target.value);
	}

	function handleKeyDown(event: any) {
		if (props.onEnter && event.key === 'Enter') {
			props.onEnter();
		}
	}

	return <div className="field">
		<label>{props.label}</label>
		<input type="text" value={props.value} onChange={handleValueChange} onKeyDown={handleKeyDown}/>
	</div>;
}

export default TextField;
