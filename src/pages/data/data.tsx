import TwitterIcon from "public/icons/icon-twitter.svg";
import FacebookIcon from "public/icons/icon-facebook.svg";
import YoutubeIcon from "public/icons/icon-youtube.svg";
import HtmlacademyIcon from "public/icons/logo-htmlacademy.svg";
import AppleIcon from "public/icons/logo-apple.svg";
import AndroidIcon from "public/icons/logo-android.svg";
import WindowsIcon from "public/icons/logo-microsoft.svg";

export const LINKS = [
  {
    name: "Главная",
    url: "/",
  },
  {
    name: "Фотографии",
    url: "/photos",
  },
  {
    name: "Конкурс",
    url: "/contest",
  },
  {
    name: "HTML Academy",
    url: "https://htmlacademy.ru/",
  },
];

export type SOCIALS_TYPE = {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const SOCIALS = [
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: TwitterIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: YoutubeIcon,
  },
  {
    name: "HTMLAcademy",
    url: "https://htmlacademy.ru/",
    icon: HtmlacademyIcon,
  },
];

export type MARKETS_TYPE = {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const MARKETS = [
  {
    name: "Apple",
    url: "https://www.apple.com/ru/app-store/",
    icon: AppleIcon,
  },
  {
    name: "Android",
    url: "https://play.google.com/store",
    icon: AndroidIcon,
  },
  {
    name: "Windows",
    url: "https://www.microsoft.com/ru-ru/store/apps/windows-phone",
    icon: WindowsIcon,
  },
];
