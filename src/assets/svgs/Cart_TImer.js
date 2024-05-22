import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M8 3.167a5.333 5.333 0 1 0 0 10.666A5.333 5.333 0 0 0 8 3.167ZM1.333 8.5a6.667 6.667 0 1 1 13.333 0 6.667 6.667 0 0 1-13.333 0ZM8 4.5c.368 0 .666.299.666.667v3.057l1.805 1.805a.667.667 0 0 1-.943.943l-2-2a.667.667 0 0 1-.195-.472V5.167c0-.368.298-.667.667-.667Z"
    />
  </Svg>
)
export default SvgComponent
