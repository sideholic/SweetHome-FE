import "styled-components";

declare module "styled-components" {
  export interface greenTheme {
    green1: string;
    green2: string;
    green3: string;
    green4: string;
    green5: string;
  }

  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    greenColor: greenTheme;
    isDark: boolean;
  }
}
