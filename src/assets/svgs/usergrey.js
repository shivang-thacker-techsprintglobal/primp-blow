import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { COLOR } from "../../constants/Colors"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={COLOR.greyDisabled}
        d="M4.75 22a8 8 0 0 1 16 0h-2a6 6 0 1 0-12 0h-2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.75 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
