import { default as bavisitter } from "./bavisitter"
import { default as cloz } from "./cloz"
import { default as intentable } from "./intentable"
import { default as milk } from "./milk"
import { default as projectionensemble } from "./projectionensemble"
import { default as swipytics } from "./swipytics"
import { default as vacode } from "./vacode"
import { default as vanas } from "./vanas"
import { default as waltzboard } from "./waltzboard"

const en: ProjectType[] = [
  swipytics,
  bavisitter,
  waltzboard,
  projectionensemble,
  intentable,
  vacode,
  cloz,
  vanas,
  milk,
]

const projects = { en, ko: en }

export default projects
