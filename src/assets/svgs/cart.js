import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#061010"
      d="m2.452 2.333 1.555 10.113a.835.835 0 0 0 .839.72H14a.833.833 0 0 0 .798-.593l2.5-8.334a.833.833 0 0 0-.798-1.072H4.266l-.274-1.782a.828.828 0 0 0-.289-.522.831.831 0 0 0-.55-.196H1.5a.833.833 0 1 0 0 1.666h.952ZM5.548 11.5 4.522 4.833H15.38l-2 6.667H5.548ZM7.333 15.667a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM14.833 15.667a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0Z"
    />
  </Svg>
)
export default SvgComponent