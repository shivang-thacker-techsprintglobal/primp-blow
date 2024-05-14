import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5.22.22A.75.75 0 0 1 5.75 0h4.5a.75.75 0 0 1 .53.22l1.28 1.28H14A1.5 1.5 0 0 1 15.5 3v7.5A1.5 1.5 0 0 1 14 12H2a1.5 1.5 0 0 1-1.5-1.5V3A1.5 1.5 0 0 1 2 1.5h1.94L5.22.22Zm.84 1.28L4.78 2.78a.75.75 0 0 1-.53.22H2v7.5h12V3h-2.25a.75.75 0 0 1-.53-.22L9.94 1.5H6.06ZM8 4.875a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-3 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
  </Svg>
)
export default SvgComponent
