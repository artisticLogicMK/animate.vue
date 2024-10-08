import animate from '../utils/animate'
import { Options } from '../utils/types'

// entrance animations
const fadeIn = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('in', target, done, options)
}

// leaving animations
const fadeOut = (target: HTMLElement | any, done: (() => void), options: Options): Promise<void> => {
  return animate('out', target, done, options)
}

export { fadeIn, fadeOut }