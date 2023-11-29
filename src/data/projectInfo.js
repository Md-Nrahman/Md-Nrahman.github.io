import HtmlImg from "../assets/images/html5.png";
import CSSImg from "../assets/images/css3.png";
import ReactImg from "../assets/images/react.png";
import TailwindImg from "../assets/images/tailwindcss.png";
import NodeImg from "../assets/images/node.png";
import ExpressImg from "../assets/images/express.png";
import MongoDBImg from "../assets/images/mongodb.png";
import NextJS from "../assets/images/nextjs.png";
import HyundaiExchange from "../assets/images/projects/hyundai-car-exchange.png";
import RamadanTimes from "../assets/images/projects/ramadan-times.png";

export const projectInfo = [
  {
    title: "Hyundai Car Exchange Program",
    description:
      "A dynamic web application designed to revolutionize the buying and selling experience for four wheels",
    url: "https://exchangehyundai.ftl.net.bd/",
    image: HyundaiExchange,
    techStack: [HtmlImg, TailwindImg, NextJS],
  },
  {
    title: "Ramadan Times",
    description:
      "A web application to view the Sehri and Iftar time of a particular location",
    url: "https://ramadantimes.netlify.app/",
    image: RamadanTimes,
    techStack: [HtmlImg, CSSImg, ReactImg, NodeImg, ExpressImg, MongoDBImg],
  },
];
