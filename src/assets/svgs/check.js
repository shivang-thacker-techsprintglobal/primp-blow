import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M3.017 3.983 1.053 2.018.07 3l2.946 2.947 4.91-4.91-.982-.983-3.928 3.929Z"
    />
  </Svg>
)
export default SvgComponent