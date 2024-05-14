import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#5A5A5A"
      d="M.744 11.59a.833.833 0 0 1 0-1.179l4.41-4.41L.745 1.59A.833.833 0 0 1 1.923.41l5 5a.833.833 0 0 1 0 1.179l-5 5a.833.833 0 0 1-1.179 0Z"
    />
  </Svg>
)
export default SvgComponent
