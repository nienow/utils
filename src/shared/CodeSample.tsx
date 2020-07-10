import React from 'react';

interface CodeSampleProps {
  label?: string;
  // value: string;
  children: any;
}

function CodeSample(props: CodeSampleProps) {
  return <div>
    <label>{props.label || 'Code'}</label>
    <code>{props.children}</code>
  </div>;
}

export default CodeSample;
