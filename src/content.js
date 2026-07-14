// Imports
import ghImage from './assets/GitHub-svg.svg';
import liImage from './assets/LinkedIn-svg.svg';

// Colors
// export const COLORS_TEST = {
//   raw_concrete: "#9e9e8e",
//   iron_oxide: "#7a3b2e",
//   acid_yellow: "#d4c422",
//   bone: "#f5f0e8",
//   asphalt: "#1a1a1a",
//   blood_red: "#b01c1c",
//   industrial_green: "#3b5e3a",
//   cobalt: "#1b3a6b",
//   tezontle: "#8c2e1a",
//   barragan_magenta: "#c0316b",
//   cenote: "#1b6bb6",
//   obsidian: "#1a1520",
//   maize: "#d4a017",
//   maguey: "#5a7a4a",
//   concreto: "#a8a090",
//   tierra_oaxaquena: "#7a4e2a",
//   oxblood: "#4a1020",
//   warm_silver: "#d8ceb8",
//   terracotta: "#b05a3a",
//   ink_blue: "#1a2440",
//   graphite: "#484848",
//   dusty_violet: "#604870",
//   saffron: "#c08820",
//   shadow_crimson: "#2a1018"
// };

export const COLORS = {
  raw_concrete: "rgba(158, 158, 142, 1)",
  iron_oxide: "rgba(122, 59, 46, 1)",
  acid_yellow: "rgba(212, 196, 34, 1)",
  bone: "rgba(245, 240, 232, 1)",
  asphalt: "rgba(26, 26, 26, 1)",
  blood_red: "rgba(176, 28, 28, 1)",
  industrial_green: "rgba(59, 94, 58, 1)",
  cobalt: "rgba(27, 58, 107, 1)",
  tezontle: "rgba(140, 46, 26, 1)",
  barragan_magenta: "rgba(192, 49, 107, 1)",
  cenote: "rgba(27, 107, 182, 1)",
  obsidian: "rgba(26, 21, 32, 1)",
  maize: "rgba(212, 160, 23, 1)",
  maguey: "rgba(90, 122, 74, 1)",
  concreto: "rgba(168, 160, 144, 1)",
  tierra_oaxaquena: "rgba(122, 78, 42, 1)",
  oxblood: "rgba(74, 16, 32, 1)",
  warm_silver: "rgba(216, 206, 184, 1)",
  terracotta: "rgba(176, 90, 58, 1)",
  ink_blue: "rgba(26, 36, 64, 1)",
  graphite: "rgba(72, 72, 72, 1)",
  dusty_violet: "rgba(96, 72, 112, 1)",
  saffron: "rgba(192, 136, 32, 1)",
  shadow_crimson: "rgba(42, 16, 24, 1)"
};
// Bio
export const BIO = {
    name: "Jeshua Nava Avila",
    email: "jeshua.navaavila@gmail.com",
    phone: "322 102 0423",
    linkedIn: { url: "https://www.linkedin.com/in/jeshuanavaavila/", image: liImage },
    gitHub: { url: "https://github.com/J35HN", image: ghImage }
};

// Navigation
export const NAVIGATION = [
    { name: "Industry", source: "/route/industry/"},
    { name: "Projects", source: "/route/projects/" },
    { name: "Volunteering", source: "/route/volunteering/" },
    { name: "Experiences", source: "/route/experiences/" },
    { name: "Photography", source: "/route/photography/" },
];

// Per page content
export const INDUSTRY = [
    { title: "Presales Consultant @ Oracle", md: ""},
    { title: "Roblox Intern @ KaraOkulta, an Amber Studio", md: ""},
];