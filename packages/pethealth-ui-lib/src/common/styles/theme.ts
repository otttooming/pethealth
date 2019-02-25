import {
  ColorProps,
  BackgroundProps,
  BorderProps,
  SpacingProps,
  TypefaceProps,
  TransitionProps,
  ShadowProps,
  color,
  background,
  border,
  spacing,
  typeface,
  transition,
  shadow,
} from './constants';

export interface PethealthStyledThemeProps {
  color: ColorProps;
  background: BackgroundProps;
  border: BorderProps;
  spacing: SpacingProps;
  typeface: TypefaceProps;
  transition: TransitionProps;
  shadow: ShadowProps;
}

export const theme: PethealthStyledThemeProps = {
  color,
  background,
  border,
  spacing,
  typeface,
  transition,
  shadow,
};
