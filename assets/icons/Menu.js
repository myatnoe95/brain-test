import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const MenuIcon = (props) => (
  <Svg
    width={props.width} 
    height={props.height}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <Path 
        d="M0 11h11V0H0Zm2-9h7v7H2ZM13 0v11h11V0Zm9 9h-7V2h7ZM0 24h11V13H0Zm2-9h7v7H2ZM13 24h11V13H13Zm2-9h7v7h-7Z"
        fill="#000" 
    />
  </Svg>
)

export default MenuIcon;