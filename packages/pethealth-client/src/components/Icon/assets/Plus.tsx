import * as React from 'react';
import { default as Svg, SvgPath as Path } from 'reactxp-imagesvg';

interface PlusIconProps {}

const Plus: React.FC<PlusIconProps> = () => (
  <Svg viewBox="0 0 50 50" width={50} height={50} fillColor="transparent">
    <Path fillColor="red" d="M23 13h4v24h-4z" />
    <Path fillColor="red" d="M37 23v4H13v-4z" />
  </Svg>
);

export default Plus;
