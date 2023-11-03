import React from "react";
import { ThemeProviderr } from "./src/styles/themeContext";
import { ServerStyleSheet } from "styled-components";

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProviderr>
            <>{element}</>
        </ThemeProviderr>
    );
};


const InsertScript = () => {
    const codeToRunOnClient = () => {
        (function () {
            var storageKey = "theme";
            var classNameDark = "dark-mode";
            var classNameLight = "light-mode";
            var element = window.document.documentElement;
            var localStorageTheme = null;
            try {
                localStorageTheme = localStorage.getItem(storageKey);
                console.log("localStorageTheme", localStorageTheme); // this works
            } catch (err) {}
            var localStorageExists = localStorageTheme !== null;
            if (localStorageExists) {
                element.classList.add(
                    localStorageTheme === "true" ? classNameDark : classNameLight
                );
                // add to styled components theme here too
                var styleSheet = new ServerStyleSheet();
                var theme = localStorageTheme === "true" ? "dark" : "light";
                var style = `:root { --theme: ${theme}; }`;
                styleSheet.collectStyles(<style>{style}</style>);
            } else {
                var isDarkMode = element.classList.contains(classNameDark);
                localStorage.setItem(storageKey, isDarkMode);
            }
        })();
    };
    const calledFunction = `(function(){${codeToRunOnClient.toString()}})();`;
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<InsertScript />);
};
