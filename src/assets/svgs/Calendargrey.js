import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { COLOR } from "../../constants/Colors"
const SvgComponent = (props) => {
  

  const { color, ...otherProps } = props;
  return(
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...otherProps}
  >
    <G fill={color} fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M3.75 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3V4Zm2 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5h-14Z" />
      <Path d="M3.75 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-16a1 1 0 0 1-1-1ZM16.75 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM8.75 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.75 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}
export default SvgComponent
