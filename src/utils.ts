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

export const rgbStringToHex = (rgb: string) => {
  let rgbArr = rgb.split(",")
  let r = parseInt(rgbArr[0].split("(")[1])
  let g = parseInt(rgbArr[1])
  let b = parseInt(rgbArr[2].split(")")[0])

  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

  return hex
}
