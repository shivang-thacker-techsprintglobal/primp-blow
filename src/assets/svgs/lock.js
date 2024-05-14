import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#6CC"
      d="M7 2.333a2.51 2.51 0 0 1 2.5 2.5v2.5h-5v-2.5a2.51 2.51 0 0 1 2.5-2.5Zm4.167 5v-2.5A4.176 4.176 0 0 0 7 .666a4.176 4.176 0 0 0-4.167 4.167v2.5H2c-.92 0-1.667.746-1.667 1.666v6.667c0 .92.747 1.667 1.667 1.667h10c.92 0 1.667-.746 1.667-1.667V8.999c0-.92-.746-1.666-1.667-1.666h-.833ZM2 8.999h10v6.667H2V8.999Z"
    />
  </Svg>
)
export default SvgComponent

