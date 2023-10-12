export const darkColor = (color: string) => {
  let c = color.substring(1)
  let rgb = parseInt(c, 16)
  let r = (rgb >> 16) & 0xff
  let g = (rgb >> 8) & 0xff
  let b = (rgb >> 0) & 0xff
  r = Math.round(r * 0.8)
  g = Math.round(g * 0.8)
  b = Math.round(b * 0.8)
  let newColor = "rgb(" + r + "," + g + "," + b + ")"

  return newColor
}
