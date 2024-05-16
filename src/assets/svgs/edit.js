import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="M13.577 2.744a.833.833 0 0 1 1.179 0l2.5 2.5a.833.833 0 0 1 0 1.179l-7.5 7.5a.833.833 0 0 1-.59.244h-2.5a.833.833 0 0 1-.833-.834v-2.5c0-.22.088-.433.244-.589l7.5-7.5ZM7.5 11.178V12.5h1.321l6.667-6.667-1.321-1.321L7.5 11.179Zm-5-5.345c0-.92.746-1.666 1.667-1.666h4.166a.833.833 0 1 1 0 1.666H4.167v10h10v-4.166a.833.833 0 1 1 1.666 0v4.166c0 .92-.746 1.667-1.666 1.667h-10c-.92 0-1.667-.746-1.667-1.667v-10Z"
    />
  </Svg>
)
export default SvgComponent
