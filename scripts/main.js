import { SocialManager } from "./socials.js";
const socialButtonContainer = document.getElementById("buttons");
const data = [
    { name: "GitHub", icon: "assets/icons/gith.svg", link: "https://github.com/i5cmd" },
    { name: "GitLab", icon: "assets/icons/gitl.svg", link: "https://gitlab.com/i5cmd" }
];
const socialManager = new SocialManager(data, socialButtonContainer);
socialManager.addButtons();
