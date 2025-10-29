import { createContext, useContext } from "react";
import { defaultTheme } from "../theme/defaultTheme";

export const ThemeContext = createContext(defaultTheme);

export const useTheme = () => useContext(ThemeContext);
