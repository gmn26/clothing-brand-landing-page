import { ReactNode } from "react";

export interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
