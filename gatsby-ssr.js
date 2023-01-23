const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          function setTheme(theme) {
            window.__theme = theme;
            // console.log(theme);
            // console.log('Theme updated:', theme);

            if (theme === 'true') {
              console.log('Theme green');
              document.documentElement.className = 'green';
            } else {
              console.log('Theme red');
              document.documentElement.className = 'red';
            }
          };

        window.__setPreferredTheme = function(theme) {
          setTheme(theme);
          try {
            localStorage.setItem('theme', theme);
            console.log('Theme saved:', theme);
          } catch (e) {}
        };

        // Is there a Saved Theme Preference in localStorage?
        let preferredTheme;
        try {
          preferredTheme = localStorage.getItem('theme');
          console.log('preferredTheme:', preferredTheme);
          // window.__preferredTheme = preferredTheme;
        } catch (e) {}

        // Is there an Operating System Preference?
        // let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // PICK THE INITIAL THEME
        // 1. Use the theme from localStorage, if any
        // 2. Use the OS theme, if any
        // 3. Default to light
        setTheme(preferredTheme);
      })();
        `,
      }}
    />,
  ]);
};
