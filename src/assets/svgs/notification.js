import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M6.455 1.707a1.667 1.667 0 0 1 3.09 0 5.836 5.836 0 0 1 4.288 5.626v3.915l1.527 2.29a.833.833 0 0 1-.693 1.295h-3.78a2.917 2.917 0 0 1-5.774 0h-3.78a.833.833 0 0 1-.693-1.295l1.527-2.29V7.333a5.836 5.836 0 0 1 4.288-5.626Zm.366 13.126a1.25 1.25 0 0 0 2.358 0H6.82ZM8 3.167a4.167 4.167 0 0 0-4.167 4.166V11.5a.833.833 0 0 1-.14.462l-.803 1.205h10.22l-.803-1.205a.834.834 0 0 1-.14-.462V7.333A4.167 4.167 0 0 0 8 3.167Z"
    />
  </Svg>
)
export default SvgComponent
