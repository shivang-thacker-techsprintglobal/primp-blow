import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLOR } from "../../constants/Colors"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill={COLOR.Dark}
      d="M.41.744a.833.833 0 0 1 1.18 0L6 5.154l4.41-4.41a.833.833 0 1 1 1.18 1.179l-5 5a.833.833 0 0 1-1.18 0l-5-5a.833.833 0 0 1 0-1.179Z"
    />
  </Svg>
)
export default SvgComponent
