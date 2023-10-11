const React = require('react');
const ReactDOM = require('react-dom');

exports.replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
