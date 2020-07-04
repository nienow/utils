import React, { FormEvent } from 'react';

interface SelectBoxProps {
	label: string;
	value: string;
	options: string[];
	onChange: (value: string) => void;
}

function SelectBox(props: SelectBoxProps) {
	function handleValueChange(event: FormEvent) {
		const target: HTMLInputElement = event.target as HTMLInputElement;
		props.onChange(target.value);
	}

	const renderOption = (option: string) => (<option>{option}</option>);

	return <div>
		<label>{props.label}</label>
		<select value={props.value} onChange={handleValueChange}>
			{
				props.options.map(renderOption)
			}
		</select>
	</div>;
}

export default SelectBox;
