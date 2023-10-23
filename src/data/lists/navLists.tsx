import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ArticleIcon from "@mui/icons-material/Article";

const usefulLinks = [
  { name: "Home", path: "/", icon: HomeIcon, id: 1 },
  { name: "Projects", path: "/projects", icon: ArticleIcon, id: 2 },
  { name: "About", path: "/about", icon: AssignmentIndIcon, id: 3 },
];

const socialLinks = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/rasmus-palm-076a83219",
    icon: LinkedInIcon,
    id: 1,
  },
  {
    name: "Github",
    path: "https://github.com/rasweb",
    icon: GitHubIcon,
    id: 2,
  },
];

export { usefulLinks, socialLinks };
