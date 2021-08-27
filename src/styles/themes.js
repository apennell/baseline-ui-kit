import { primary, secondary, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[500],
  primaryHoverColor: primary[400],
  primaryFocusColor: primary[300],
  primaryActiveColor: primary[700],
  textColorOnPrimary: neutral[0],
  secondaryColor: secondary[200],
  secondaryHoverColor: secondary[100],
  secondaryFocusColor: secondary[50],
  secondaryActiveColor: secondary[700],
  textColorOnSecondary: neutral[900],
  textColor: neutral[900],
  textColorInverted: neutral[0],
  primaryFont: primaryFont,
  borderColor: neutral[100],
};
