import { default as projectionensemble } from "./projectionensemble";
import { default as cloz } from "./cloz";
import { default as waltzboard } from "./waltzboard";
import { default as bavisitter } from "./bavisitter";
import { default as vanas } from "./vanas";
import { default as vacode } from "./vacode";
import { default as intentable } from "./intentable";
import { default as milk } from "./milk";

const en: ProjectType[] = [
  bavisitter,
  waltzboard,
  projectionensemble,
  intentable,
  vacode,
  cloz,
  vanas,
  milk,
];

const projects = { en, ko: en };

export default projects;
