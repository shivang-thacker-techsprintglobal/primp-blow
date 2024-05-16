import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M7.244.411a.833.833 0 0 1 1.179 0l5 5a.834.834 0 0 1 0 1.179l-5 5a.833.833 0 0 1-1.179-1.179l3.578-3.577H1.167a.833.833 0 0 1 0-1.667h9.655L7.244 1.59a.833.833 0 0 1 0-1.179Z"
    />
  </Svg>
)
export default SvgComponent

