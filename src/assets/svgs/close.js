import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5.793 5.293a1 1 0 0 1 1.414 0l5.293 5.293 5.293-5.293a1 1 0 1 1 1.414 1.414L13.914 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12.5 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L11.086 12 5.793 6.707a1 1 0 0 1 0-1.414Z"
    />
  </Svg>
)
export default SvgComponent