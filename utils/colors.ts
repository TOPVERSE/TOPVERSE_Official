import { getRgbValue } from '@jiaminghi/color'

function rgb2hsl([r, g, b]: number[]): [h:number, s:string, l:string] {
  r = r / 255 // [0, 1]
  g = g / 255 // [0, 1]
  b = b / 255 // [0, 1]

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  const l = (max + min) / 2
  const s = d === 0 ? 0 : l > 0.5 ? d / (2 - 2 * l) : d / (2 * l)

  let h = 0
  if (d !== 0) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        break
    }
    h = h / 6
  }

  return [h * 360, `${s * 100}%`, `${l * 100}%`]
}

function hex2hsl(hex: string): [h:number, s:string, l:string] {
  const [r, g, b] = getRgbValue(hex)
  return rgb2hsl([r, g, b])
}

export {
  rgb2hsl, hex2hsl,
}
