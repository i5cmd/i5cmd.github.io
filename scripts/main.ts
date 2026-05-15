import { SocialManager, socialData } from "./socials.js";

const socialButtonContainer: HTMLDivElement = document.getElementById("buttons")! as HTMLDivElement;

const data: socialData[] = [
    {name: "GitHub", icon: "assets/icons/gith.svg", link: "https://github.com/i5cmd"},
    {name: "GitLab", icon: "assets/icons/gitl.svg", link: "https://gitlab.com/i5cmd"}
]

const socialManager: SocialManager = new SocialManager(data, socialButtonContainer);
socialManager.addButtons();