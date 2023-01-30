const {
  faPatreon,
  faYoutubeSquare,
  faInstagram,
  faLinkedin,
} = require("@fortawesome/free-brands-svg-icons")
const { faEnvelope } = require("@fortawesome/free-regular-svg-icons")
const { faPhoneAlt } = require("@fortawesome/free-solid-svg-icons")

module.exports = {
  socials: [
    {
      href: "https://www.patreon.com/chaiselevystoryteller/posts",
      icon: faPatreon,
      className: "icon patreon",
    },
    {
      href: "https://www.youtube.com/channel/UCxVbjNT6mwUAjO0qiMBjcWA",
      icon: faYoutubeSquare,
      className: "icon youtube",
    },
    {
      href: "https://instagram.com/mouthisameadhall?utm_medium=copy_link",
      icon: faInstagram,
      className: "icon insta",
    },
    {
      href: "https://www.linkedin.com/in/chaise-levy-a55242175/",
      icon: faLinkedin,
      className: "icon linkedin",
    }
  ],
  contacts: [
    {
      href: "tel:310-710-5223",
      icon: faPhoneAlt,
      className: "icon phone"
    },
    {
      href: "mailto:chaiselevy@gmail.com",
      icon: faEnvelope,
      className: "icon email"
    }
  ]
}
