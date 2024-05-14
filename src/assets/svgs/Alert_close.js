import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M.293.793a1 1 0 0 1 1.414 0L7 6.086 12.293.793a1 1 0 1 1 1.414 1.414L8.414 7.5l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.914l-5.293 5.293a1 1 0 0 1-1.414-1.414L5.586 7.5.293 2.207a1 1 0 0 1 0-1.414Z"
    />
  </Svg>
)
export default SvgComponent
