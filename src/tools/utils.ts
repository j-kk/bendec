import { negate, isEmpty, padStart } from 'lodash'

// convert to hex and pad to 8 chars
export const hexPad = (n: number): string => {
  return "0x" + ("0000" + n.toString(16)).substr(-4)
}

// convert to hex and pad to 8 chars
export const binPad = (padding: number = 9) => (n: number): string => {
  return "0b" + padStart(n.toString(2), padding, '0')
}

// Poor man's left pad
export const indent = (i: number) => (str: string) => {
  if (i == 0) {
    return str
  } else {
    return '                    '.substr(-i) + str
  }
}

// To remove gaps from annotations
export const smoosh = (strings: string[]): string  => {
  return strings.filter(negate(isEmpty)).join('\n')
}
