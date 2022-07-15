import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const EyeOpenIcon = (props) => (
  <Svg 
    width={props.width} 
    height={props.height}
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Path
      d="M16 9C7 9 3 16 3 16s4 7 13 7 13-7 13-7-4-7-13-7Zm0 1c-8 0-11.8 6-11.8 6S8 22 16 22s11.8-6 11.8-6S24 10 16 10Zm0 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#000"
      fillRule="evenodd"
    />
  </Svg>
)

export default EyeOpenIcon

