import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.long ? "0 0 773 108" : "0 0 464.66 146"} {...props}>
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#f7931e;stroke-miterlimit:10;stroke-width:4px;opacity:.7}"
        }
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          transform="rotate(-45 398.836 72.997)"
          d="M354.28 28.45h89.1v89.1h-89.1z"
        />
        <path
          className="cls-1"
          transform="rotate(-45 65.829 73.003)"
          d="M21.28 28.45h89.1v89.1h-89.1z"
        />
        <path
          d="M31.5 143a81.76 81.76 0 0 0 39.26-70A81.76 81.76 0 0 0 31.5 3H437a82 82 0 0 0 0 140Z"
          style={{
            fill: "#333",
          }}
        />
        <path
          d="M427.4 6a85.09 85.09 0 0 0 0 134H41.12a84.76 84.76 0 0 0 32.64-67A84.76 84.76 0 0 0 41.12 6H427.4m22.14-6H19a79 79 0 0 1 48.76 73A79 79 0 0 1 19 146h430.54a79 79 0 0 1 0-146Z"
          style={{
            fill: "#f7931e",
          }}
        />
        <text
          x="50%" y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle"
          style={{
            fontSize: 36,
            fill: "#fff",
            fontFamily: "odile-upright-italic",
          }}
        >
          {props.text}
        </text>
      </g>
    </g>
  </svg>
)

export default SvgComponent