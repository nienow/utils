import React, { FormEvent } from 'react';

interface SelectBoxProps {
  label: string;
  value: string;
  options: any[];
  onChange: (value: string) => void;
  allowNone?: boolean;
}

function SelectBox(props: SelectBoxProps) {
  function handleValueChange(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    props.onChange(target.value);
  }

  function renderOption(option: any) {
    if (Array.isArray(option)) {
      return <option value={option[0]}>{option[1]}</option>;
    } else {
      return <option>{option}</option>;
    }
  }

  function getOptions() {
    if (!props.allowNone) {
      return props.options;
    } else {
      return [
        '',
        ...props.options
      ];
    }
  }

  return <div className="field">
    <label>{props.label}</label>
    <select value={props.value} onChange={handleValueChange}>
      {getOptions().map(renderOption)}
    </select>
  </div>;
}

export default SelectBox;
