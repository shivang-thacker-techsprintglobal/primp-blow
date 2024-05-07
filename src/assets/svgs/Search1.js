import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#8B9191"
      fillRule="evenodd"
      d="M8.166 2.333a5.833 5.833 0 1 0 0 11.667 5.833 5.833 0 0 0 0-11.667Zm-7.5 5.834a7.5 7.5 0 1 1 13.36 4.681l3.063 3.063a.833.833 0 0 1-1.178 1.178l-3.063-3.062A7.5 7.5 0 0 1 .667 8.167Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
