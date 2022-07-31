import { uid } from "uid";
import react from "./../assets/images/stack/reactjs.png";
import github from "./../assets/images/stack/github.png";
import adobexd from "./../assets/images/stack/adobexd.png";
import sass from "./../assets/images/stack/sass.svg";
import javascript from "./../assets/images/stack/javascript.svg";
import figma from "./../assets/images/stack/figma.svg";
import bootstrap from "./../assets/images/stack/bootstrap.svg";
import firebase from "./../assets/images/stack/firebase.png";
import redux from "./../assets/images/stack/redux-logo.png";

let uuid = uid();
export const stack = [
  {
    id: uuid,
    img: react,
    name: "reactjs",
  },
  {
    id: uuid,
    img: github,
    name: "github",
  },
  {
    id: uuid,
    img: adobexd,
    name: "adobe xd",
  },
  {
    id: uuid,
    img: bootstrap,
    name: "bootstrap",
  },
  {
    id: uuid,
    img: javascript,
    name: "javascript",
  },
  {
    id: uuid,
    img: figma,
    name: "figma",
  },
  {
    id: uuid,
    img: sass,
    name: "scss",
  },
  {
    id: uuid,
    img: firebase,
    name: "firebase",
  },
  {
    id: uuid,
    img: redux,
    name: "redux",
  },
];
