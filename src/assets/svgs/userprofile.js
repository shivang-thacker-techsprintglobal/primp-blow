import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#6CC"
      d="M.333 18.334a6.667 6.667 0 0 1 13.334 0H12a5 5 0 0 0-10 0H.333ZM7 10.834c-2.762 0-5-2.238-5-5 0-2.763 2.238-5 5-5 2.763 0 5 2.237 5 5 0 2.762-2.237 5-5 5Zm0-1.667a3.332 3.332 0 1 0 0-6.666 3.332 3.332 0 1 0 0 6.666Z"
    />
  </Svg>
)
export default SvgComponent
