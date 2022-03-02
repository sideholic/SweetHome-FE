import "styled-components";
import { DefaultTheme, greenTheme } from "styled-components";

const greenColor: greenTheme = {
  green1: "#e8eeb0",
  green2: "#e6ea95",
  green3: "#bcda60",
  green4: "#71a842",
  green5: "#467436",
};

export const lightTheme: DefaultTheme = {
  bgColor: "#F5F5F5",
  textColor: "#000000",
  greenColor: greenColor,
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  bgColor: "#2F3640",
  textColor: "F5F5F5",
  greenColor: greenColor,
  isDark: true,
};
