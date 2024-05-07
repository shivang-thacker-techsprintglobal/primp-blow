import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#6CC"
      d="M11.836 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494l-.336-.298V19a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494l9-8ZM6.5 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333-6 5.333Zm7 9.329v-4h-2v4h2Z"
    />
  </Svg>
)
export default SvgComponent