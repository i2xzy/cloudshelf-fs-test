import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    smallSpacer: number;
    spacer: number;
    largeSpacer: number;
    xlargeSpacer: number;

    colors: {
      primary: string;
      black: string;
    };
  }
}
