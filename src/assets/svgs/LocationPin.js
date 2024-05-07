import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="#061010" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M8.75 9.167c0-.69.56-1.25 1.25-1.25h.008c.69 0 1.25.56 1.25 1.25v.008c0 .69-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25v-.008Z" />
      <Path d="M13.995 5.172a5.649 5.649 0 0 0-7.988 7.989L10 17.155l3.994-3.995a5.649 5.649 0 0 0 0-7.988ZM4.828 3.994a7.315 7.315 0 0 1 10.345 10.345l-4.583 4.583a.833.833 0 0 1-1.179 0L4.828 14.34a7.315 7.315 0 0 1 0-10.345Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent