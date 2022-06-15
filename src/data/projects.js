import { uid } from "uid";
import blogr from "../assets/images/thumnail/blogr-landing.png";
import todo from "../assets/images/thumnail/todoapp.png";
import tipcalc from "../assets/images/thumnail/tipcalc.jpg";
import coumtries from "../assets/images/thumnail/countries.jpg";
import timetracking from "../assets/images/thumnail/time-tracking-dashboard.jpg";
import insure from "../assets/images/thumnail/insure.jpg";
import pricing from "../assets/images/thumnail/pricing.jpg";

export const projects = [
  {
    id: uid(),
    thumbnail: todo,
    title: "todo app with theme switch",
    desc: "This projects is a challenge from frontendmentor.io. creating this projects gives me an a basic knowledge how to use firebase, and its features like hosting, authentication and realtime database. by using these features of I am able to implement CRUD method to the application.",
    github: "https://github.com/hatwell-jonel/frontendmentor-todo-react.git",
    live_site: "https://todo-app-d8fd5.web.app/",
    tech_stack: [
      "reactjs",
      "scss",
      "firebase",
      "local storage",
      "authentication",
      "CRUD",
    ],
  },
  {
    id: uid(),
    thumbnail: tipcalc,
    title: "tip calculator",
    desc: "This projects is a challenge from frontendmentor.io. creating this mini project helps me to improved my knowledge on Javascript and logical thinking.",
    github: "https://github.com/hatwell-jonel/frontendmentor-tipcalculator.git",
    live_site: "https://hatwell-jonel.github.io/frontendmentor-tipcalculator/",
    tech_stack: ["bootstrap", "JavaScript", "Mobile-first workflow"],
  },

  {
    id: uid(),
    thumbnail: coumtries,
    title: "Rest Countries API",
    desc: "This projects is a challenge from frontendmentor.io. doing this project gave me some basic understanding how to work with API and how to implement it in the projects.",
    github: "https://github.com/hatwell-jonel/frontendmentor-countries-reactjs",
    live_site:
      "https://frontendmentor-countries-reactjs-5kb53opt3-hatwell-jonel.vercel.app/",
    tech_stack: ["Reactjs", "API", "scss", "theme switch", "Local Storage"],
  },
  {
    id: uid(),
    thumbnail: timetracking,
    title: "Time Tracking Dashboard",
    desc: "This projects is a challenge from frontendmentor.io. this project is not dymanic, however,  this teach me about how can use CSS Grid, JSON and Random user API better. ",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-time-tracking-dashboard.git",
    live_site:
      "https://hatwell-jonel.github.io/frontendmentor-time-tracking-dashboard/",
    tech_stack: ["bootstrap", "Javascript ", "JSON", "API"],
  },

  {
    id: uid(),
    thumbnail: blogr,
    title: "Blogr Landing Page",
    desc: "This projects is a challenge from frontendmentor.io. developing this landing page gave me so many challenges in like the background-image and images that have an absulote position because of this positioning the images gave me difficult time. in spite of that difficulties I finished the challenge well.",
    github: "https://github.com/hatwell-jonel/frontendmentor-blogr-landingpage",
    live_site:
      "https://hatwell-jonel.github.io/frontendmentor-blogr-landingpage/",
    tech_stack: ["bootstrap", "scss ", "flexbox", "landing page"],
  },

  {
    id: uid(),
    thumbnail: insure,
    title: "Insure landing page",
    desc: "This projects is a challenge from frontendmentor.io. developing this landing page gave me some improvements  on planning how can I implement the elements on webpage from mock-up design.",
    github: "https://github.com/hatwell-jonel/frontendmentor-blogr-landingpage",
    live_site:
      "https://hatwell-jonel.github.io/frontendmentor-blogr-landingpage/",
    tech_stack: ["scss", "css grid ", "flexbox", "mobile-first workflow"],
  },

  {
    id: uid(),
    thumbnail: pricing,
    title: "Pricing component",
    desc: "This is a challenge from frontendmentor.io, this helps me to understand more how to implement the input type range element and increase my knowledge on Javascript.",
    github: "https://github.com/hatwell-jonel/frontendmentor-blogr-landingpage",
    live_site:
      "https://hatwell-jonel.github.io/frontendmentor-blogr-landingpage/",
    tech_stack: ["scss", "javscript", "mobile-first workflow "],
  },
];

const moreProjects = [{}];
