const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        console.log('hello from gatsby-ssr.js');
        const theme = localStorage.getItem('theme') || 'false';
        console.log(theme);
        `,
      }}
    />,
  ]);
};
