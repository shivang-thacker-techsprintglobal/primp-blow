import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M9.756 4.41a.833.833 0 0 1 0 1.18L6.18 9.166h9.655a.833.833 0 0 1 0 1.666H6.179l3.577 3.578a.833.833 0 0 1-1.178 1.178l-5-5a.833.833 0 0 1 0-1.178l5-5a.833.833 0 0 1 1.178 0Z"
    />
  </Svg>
)
export default SvgComponent