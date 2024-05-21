import bavisitter_img from "@/data/project/bavisitter.png";
import bavisitter_mdx from "@/data/project/bavisitter.mdx";
import waltzboard_img from "@/data/project/waltzboard.jpg";
import waltzboard_mdx from "@/data/project/waltzboard.mdx";
import intentable_img from "@/data/project/intentable.png";
import intentable_mdx from "@/data/project/intentable.mdx";
import projectionensemble_img from "@/data/project/projectionensemble.png";
import projectionensemble_mdx from "@/data/project/projectionensemble.mdx";
import cloz_img from "@/data/project/cloz.png";
import cloz_mdx from "@/data/project/cloz.mdx";
import vanas from "@/data/project/vanas.png";
import vanas_mdx from "@/data/project/vanas.mdx";
import vacode_img from "@/data/project/vacode.png";
import vacode_mdx from "@/data/project/vacode.mdx";

const en: ProjectType[] = [
  {
    title: "Bavisitter",
    description:
      "Integrating Design Guidelines into Large Language Models for Visualization Authoring",
    image: bavisitter_img,
    content: bavisitter_mdx,
    selected: true,
  },
  {
    title: "Waltzboard",
    description: "Instant and Interpretable Dashboard with User Intent",
    image: waltzboard_img,
    content: waltzboard_mdx,
    selected: true,
  },
  {
    title: "Projection Ensemble",
    description:
      "Visualizing the Robust Structures of Multidimensional Projections",
    image: projectionensemble_img,
    content: projectionensemble_mdx,
    selected: true,
  },
  {
    title: "VACode",
    description:
      "A Visual Analytics Systems for Learner-Sourced Code in Large-Scale Computer Science Education",
    image: vacode_img,
    content: vacode_mdx,
    selected: false,
  },
  {
    title: "Intentable",
    description: "A Mixed-Initiative System for Intent-Based Chart Captioning",
    image: intentable_img,
    content: intentable_mdx,
    selected: true,
  },

  {
    title: "CloZ",
    description: "Natural Language Guided Clothing Design System",
    image: cloz_img,
    content: cloz_mdx,
    selected: false,
  },
  {
    title: "VANAS",
    description: "A Visual Analytics Systems for Neural Architecture Search",
    image: vanas,
    content: vanas_mdx,
    selected: false,
  },
];

export const projects = { en, ko: en };
