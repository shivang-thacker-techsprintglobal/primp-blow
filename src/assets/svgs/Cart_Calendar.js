import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <G fill="#061010" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M2 3.167c0-.369.298-.667.667-.667h10.666c.368 0 .667.298.667.667V12.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.167Zm1.333.666V12.5c0 .368.299.667.667.667h8a.667.667 0 0 0 .667-.667V3.833H3.333Z" />
      <Path d="M2 5.833c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 5.833ZM10.667 1.833c.368 0 .666.299.666.667v1.333a.667.667 0 1 1-1.333 0V2.5c0-.368.299-.667.667-.667ZM5.334 1.833c.368 0 .666.299.666.667v1.333a.667.667 0 0 1-1.333 0V2.5c0-.368.298-.667.667-.667Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
