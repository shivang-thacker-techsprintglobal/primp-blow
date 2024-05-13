import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={64}
    fill="none"
    {...props}
  >
    <Rect width={64} height={64} x={0.5} fill="#6CC" rx={32} />
    <Path
      fill="#fff"
      d="M48.385 19.63c.757.672.825 1.831.152 2.588l-19.556 22a1.833 1.833 0 0 1-2.74 0l-9.778-11a1.833 1.833 0 0 1 2.74-2.436l8.408 9.458 18.185-20.458a1.833 1.833 0 0 1 2.589-.152Z"
    />
  </Svg>
)
export default SvgComponent
