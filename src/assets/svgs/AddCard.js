import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      stroke="#061010"
      strokeWidth={0.3}
      d="M16.045 3.333H4.955a2.74 2.74 0 0 0-1.97.85 2.96 2.96 0 0 0-.818 2.048v4.74c0 .32.25.58.558.58a.57.57 0 0 0 .558-.58V8.145h14.435v5.62c0 .46-.177.902-.49 1.228-.314.326-.74.51-1.183.51h-8.39a.569.569 0 0 0-.557.58c0 .32.25.58.558.58h8.389a2.74 2.74 0 0 0 1.97-.85 2.96 2.96 0 0 0 .819-2.049V6.231a2.96 2.96 0 0 0-.818-2.048 2.74 2.74 0 0 0-1.971-.85ZM3.283 6.986v-.755c0-.461.177-.903.49-1.23.314-.325.74-.508 1.183-.509h11.089c.443 0 .869.184 1.182.51.314.326.49.768.491 1.229v.755H3.283Zm3.158 7.462a.591.591 0 0 1-.164.41.547.547 0 0 1-.394.169h-1.02v1.06c0 .32-.25.58-.558.58a.569.569 0 0 1-.558-.58v-1.06h-1.02a.569.569 0 0 1-.558-.58c0-.32.25-.579.558-.579h1.02v-1.06c0-.32.25-.58.558-.58a.57.57 0 0 1 .558.58v1.06h1.02a.57.57 0 0 1 .558.58Zm7.856-1.071a.569.569 0 0 1-.558-.58c0-.32.25-.58.558-.58h1.337c.308 0 .558.26.558.58 0 .32-.25.58-.558.58h-1.337Z"
    />
  </Svg>
)
export default SvgComponent