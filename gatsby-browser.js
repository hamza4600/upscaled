import React from "react";
import { ThemeProviderr } from "./src/styles/themeContext";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProviderr>
      <>{element}</>
    </ThemeProviderr>
  );
};
