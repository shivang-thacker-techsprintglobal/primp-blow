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
      fill="#00AAAC"
      fillRule="evenodd"
      d="M10.75 11a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5V11Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00AAAC"
      fillRule="evenodd"
      d="M17.044 6.207a6.778 6.778 0 1 0-9.586 9.586l4.793 4.793 4.793-4.793a6.778 6.778 0 0 0 0-9.586Zm-11-1.414a8.778 8.778 0 1 1 12.414 12.414l-5.5 5.5a1 1 0 0 1-1.414 0l-5.5-5.5a8.778 8.778 0 0 1 0-12.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
