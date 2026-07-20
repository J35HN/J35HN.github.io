// Colors
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

export const TONES = [
    "tone-iron-oxide", "tone-asphalt", "tone-blood-red", "tone-industrial-green", "tone-cobalt", "tone-tezontle",
    "tone-barragan-magenta", "tone-cenote", "tone-obsidian", "tone-maize", "tone-maguey", "tone-tierra-oaxaquena",
    "tone-oxblood", "tone-terracotta", "tone-ink-blue", "tone-dusty-violet", "tone-saffron", "tone-shadow-crimson"
];

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
    { title: "Presales Consultant @ Oracle", md: "", url: "/" },
    { title: "Roblox Intern @ KaraOkulta, an Amber Studio", md: "/src/md/roblox_intern.md", url: "/route/industry/roblox-intern/" },
];

export const PROJECTS = [
    { title: "iGEM 2023", md: "/src/md/igem_2023.md", url: "/route/projects/igem-2023/" },
    { title: "Garabatos by Lily", md: "", url: "/" },
    { title: "University Projects", md: "/src/md/university_projects.md", url: "/route/projects/university-projects/" }
];

export const EXPERIENCES = [
    { title: "International Peer", md: "/src/md/international_peer.md", url: "/route/experiences/international-peer/" },
    { title: "Debate Judge @ AMCO", md: "", url: "/" },
    { title: "High School: Volleyball", md: "/src/md/hs_volleyball.md", url: "/route/experiences/high-school-volleyball/" },
    { title: "High School: Mexican Folk Dance", md: "/src/md/hs_folk_dance.md", url: "/route/experiences/high-school-folk-dance/" },
    { title: "High School: Captain", md: "/src/md/hs_captain.md", url: "/route/experiences/high-school-captain/" }
];

export const VOLUNTEERING = [
    { title: "SIGGRAPH 2023", md: "/src/md/siggraph_2023.md", url: "/route/volunteering/siggraph-2023/" },
    { title: "Bosque Primavera", md: "", url: "/" },
    { title: "Dog adoption event", md: "", url: "/" },
    { title: "Judge @ LEGO Unhearth", md: "", url: "/" },
    { title: "MAZ", md: "/src/md/maz.md", url: "/route/volunteering/maz/" },
    { title: "FMMP", md: "/src/md/fmmp.md", url: "/route/volunteering/fmmp/" },
    { title: "Campamento Tortuguero Sayulita", md: "/src/md/campamento_tortuguero.md", url: "/route/volunteering/campamento-tortuguero/" },
    { title: "Mundo Daki", md: "/src/md/mundo_daki.md", url: "/route/volunteering/mundo-daki/" }
];
