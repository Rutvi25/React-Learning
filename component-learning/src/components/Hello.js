import React from 'react';

// React component withoutusing JSX
const Hello = () => {
  return React.createElement(
    'div',
    {id: 'hello', className: 'DummyClass'},
    React.createElement('h1', null, 'Hello John!')
  );
};
export default Hello;
