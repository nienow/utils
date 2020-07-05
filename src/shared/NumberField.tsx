import React, { FormEvent } from 'react';

interface NumberFieldProps {
	label: string;
	value: number;
	onChange: (value: number) => void;
}

function NumberField(props: NumberFieldProps) {
	function handleValueChange(event: FormEvent) {
		const target: HTMLInputElement = event.target as HTMLInputElement;
		props.onChange(Number(target.value));
	}

	return <div className="field">
		<label>{props.label}</label>
		<input type="number" value={props.value} onChange={handleValueChange}/>
	</div>;
}

export default NumberField;
