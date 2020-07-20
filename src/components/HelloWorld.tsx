import React from 'react';

const HelloWorld = (props: {text: string}) => {
  return (
    <div>{props.text}</div>
  );
};

export default HelloWorld;