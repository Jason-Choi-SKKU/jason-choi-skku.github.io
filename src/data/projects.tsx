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

const en: ProjectType[] = [
  {
    title: "Waltzboard",
    description: "Instant and Interpretable Dashboard with User Intent",
    image: waltzboard_img,
    content: waltzboard_mdx,
  },
  {
    title: "Intentable",
    description: "A Mixed-Initiative System for Intent-Based Chart Captioning",
    image: intentable_img,
    content: intentable_mdx,
  },
  {
    title: "Projection Ensemble",
    description:
      "Visualizing the Robust Structures of Multidimensional Projections",
    image: projectionensemble_img,
    content: projectionensemble_mdx,
  },
  {
    title: "CloZ",
    description: "Natural Language Guided Clothing Design System",
    image: cloz_img,
    content: cloz_mdx,
  },
  {
    title: "VANAS",
    description: "A Visual Analytics Systems for Neural Architecture Search",
    image: vanas,
    content: vanas_mdx,
  },
];

export const projects = { en, ko: en };
