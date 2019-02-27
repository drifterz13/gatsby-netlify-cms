import Typography from "typography"
import funstonTheme from "typography-theme-funston"

funstonTheme.headerFontFamily = ["Patua One", "sans-serif"]
funstonTheme.bodyFontFamily = ["Source Sans Pro", "sans-serif"]
funstonTheme.googleFonts = [
  {
    name: "Patua One",
    styles: ["400", "700"],
  },
  {
    name: "Source Sans Pro",
    styles: ["400", "700"],
  },
]
const typography = new Typography(funstonTheme)

export const { scale, rhythm } = typography
export default typography
