const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      // add key to avoid warning "Each child in a list should have a unique "key" prop."
      key="1"
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          function setTheme(theme) {
            window.__theme = theme;

            if (theme === 'true') {
              document.documentElement.className = 'green';
            } else {
              document.documentElement.className = 'red';
            }
          };

        window.__setPreferredTheme = function(theme) {
          setTheme(theme);
          try {
            localStorage.setItem('theme', theme);
          } catch (e) {}
        };

        // Is there a Saved Theme Preference in localStorage?
        let preferredTheme;
        try {
          preferredTheme = localStorage.getItem('theme');
          // window.__preferredTheme = preferredTheme;
        } catch (e) {}

        // PICK THE INITIAL THEME
        // 1. Use the theme from localStorage, if any
        // 2. Use the OS theme, if any
        // 3. Default to light
        setTheme(preferredTheme || 'false');
      })();
        `,
      }}
    />,
  ]);
};
