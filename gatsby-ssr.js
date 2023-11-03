import React from "react";
import { ThemeProviderr } from "./src/styles/themeContext";

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
            var storageKey = "darkMode";
            var classNameDark = "dark-mode";
            var classNameLight = "light-mode";
            var element = window.document.documentElement;
            var localStorageTheme = null;
            try {
                localStorageTheme = localStorage.getItem(storageKey);
            } catch (err) {}
            var localStorageExists = localStorageTheme !== null;
            if (localStorageExists) {
                element.classList.add(
                    localStorageTheme === "true"
                        ? classNameDark
                        : classNameLight
                );
            } else {
                var isDarkMode = element.classList.contains(classNameDark);
                localStorage.setItem(storageKey, isDarkMode);
            }
        })();
    };
    const calledFunction = `(function(){${codeToRunOnClient.toString()}})();`;
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<InsertScript />);
}
