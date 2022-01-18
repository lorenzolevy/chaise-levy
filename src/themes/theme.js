const supportsTouch = () =>
  ["iPad Simulator", "iPad", "iPhone", "iPod Simulator", "I"].includes(
    navigator.platform
  ) ||
  (navigator.userAgent.includes("Mac") && "ontouchend" in document) ||
  /Android|webOS|iPhone|iPad|Opera Mini/i.test(navigator.userAgent)

const Theme = {
  fonts: {
    body: `Souce Sans Pro`,
  },
  colors: {
    main1: "hsl(207,70%,59%)",
    main2: "hsl(207,70%,94%)",
    dark1: "hsl(227,2%,12%)",
    dark2: "hsl(227,2%,26%)",
    dark3: "hsl(227,2%,64%)",
    light1: "hsl(0,0%,97%)",
    light2: "hsl(0,0%,99%)",
  },
  breakpoints: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
    nav: 950,
    supportsTouch: typeof navigator !== "undefined" ? supportsTouch() : false,
  },
}

export default Theme
