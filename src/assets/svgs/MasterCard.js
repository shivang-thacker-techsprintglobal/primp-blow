import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={25}
    fill="none"
    {...props}
  >
    <Rect width={32} height={23} x={0.5} y={1} fill="#fff" rx={3.5} />
    <Rect width={32} height={23} x={0.5} y={1} stroke="#EAEAEA" rx={3.5} />
    <Path
      fill="#ED0006"
      fillRule="evenodd"
      d="M16.5 16.313a5.189 5.189 0 0 1-3.376 1.242A5.2 5.2 0 0 1 7.92 12.36a5.2 5.2 0 0 1 5.204-5.194A5.19 5.19 0 0 1 16.5 8.407a5.19 5.19 0 0 1 3.376-1.241 5.2 5.2 0 0 1 5.205 5.194 5.2 5.2 0 0 1-5.205 5.195 5.19 5.19 0 0 1-3.376-1.242Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F9A000"
      fillRule="evenodd"
      d="M16.5 16.313a5.179 5.179 0 0 0 1.828-3.953c0-1.583-.71-3-1.828-3.953a5.19 5.19 0 0 1 3.376-1.241 5.2 5.2 0 0 1 5.204 5.194 5.2 5.2 0 0 1-5.204 5.195 5.19 5.19 0 0 1-3.376-1.242Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF5E00"
      fillRule="evenodd"
      d="M16.498 16.313a5.178 5.178 0 0 0 1.828-3.953c0-1.583-.709-3-1.828-3.953a5.179 5.179 0 0 0-1.828 3.953c0 1.583.71 3 1.828 3.953Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent

