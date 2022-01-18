import * as React from "react"

const TitlePlaque = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 773 108" {...props}>
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#f7931e;stroke-miterlimit:10;stroke-width:4px;opacity:.7}"
        }
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_3" data-name="Layer 3">
      <path
          className="cls-1"
          d="M61 10.5 15.49 54 61 97.5 106.5 54 61 10.5zM708.51 10.5 663.09 54l45.42 43.5L753.94 54l-45.43-43.5z"
        />
        <path
          d="M27.05 105c39.33-11.2 63.52-30.11 63.52-51S66.38 14.2 27.05 3H746c-39.33 11.2-63.52 30.11-63.52 51s24.14 39.8 63.52 51Z"
          style={{
            fill: "#333",
          }}
        />
        <path
          d="M727.5 6a135.27 135.27 0 0 0-20.67 10c-17.93 10.84-27.4 24-27.4 38s9.47 27.13 27.4 38a135.27 135.27 0 0 0 20.67 10h-682a135.27 135.27 0 0 0 20.67-10c17.93-10.84 27.4-24 27.4-38s-9.47-27.13-27.4-38A135.27 135.27 0 0 0 45.5 6h682M773 0H0c51.4 8.78 87.57 29.65 87.57 54S51.4 99.22 0 108h773c-51.4-8.78-87.57-29.65-87.57-54S721.6 8.78 773 0Z"
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

export default TitlePlaque