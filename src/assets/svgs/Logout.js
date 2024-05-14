import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#6CC"
      fillRule="evenodd"
      d="M7.167 14.667a.833.833 0 0 0-.834-.834H2.167V2.167h4.166a.833.833 0 0 0 0-1.667H2.167C1.247.5.5 1.246.5 2.167v11.666c0 .92.746 1.667 1.667 1.667h4.166c.46 0 .834-.373.834-.833Z"
      clipRule="evenodd"
    />
    <Path
      fill="#6CC"
      d="M16.095 8.584a.83.83 0 0 0 .238-.582v-.005a.83.83 0 0 0-.244-.586l-3.333-3.334a.833.833 0 1 0-1.179 1.179l1.911 1.91H5.5a.833.833 0 1 0 0 1.667h7.988l-1.91 1.911a.833.833 0 0 0 1.178 1.179l3.333-3.333.006-.006Z"
    />
  </Svg>
)
export default SvgComponent
