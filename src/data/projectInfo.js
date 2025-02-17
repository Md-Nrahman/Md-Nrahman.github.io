import CSSImg from "../assets/images/css3.png";
import ExpressImg from "../assets/images/express.png";
import GraphQl from "../assets/images/graphql.png";
import HtmlImg from "../assets/images/html5.png";
import MongoDBImg from "../assets/images/mongodb.png";
import NextJS from "../assets/images/nextjs.png";
import NodeImg from "../assets/images/node.png";
import CustomsVatTax from "../assets/images/projects/customs-vat-tax.png";
import GoChat from "../assets/images/projects/go-chat.png";
import HyundaiExchange from "../assets/images/projects/hyundai-car-exchange.png";
import RamadanTimes from "../assets/images/projects/ramadan-times.png";
import ReactConference from "../assets/images/projects/react-conference.png";
import SMSGateway from "../assets/images/projects/sms-gateway.png";
import TRWBD from "../assets/images/projects/trwbd.png";
import Wasa from "../assets/images/projects/wasa.png";
import ReactImg from "../assets/images/react.png";
import TailwindImg from "../assets/images/tailwindcss.png";
import Typescript from "../assets/images/typescript.webp";

export const projectInfo = [
  {
    title: "Go Chat",
    description:
      "A realtime chatting application",
    url: "https://live-chat-via-socket-react.netlify.app/",
    image: GoChat,
    techStack: [HtmlImg, TailwindImg, ReactImg],
  },
  {
    title: "TRW : An International Law Firm.",
    description:
      "A personal portfolio website for an international law firm with dynamic Articles Section",
    url: "https://trwbd.com/",
    image: TRWBD,
    techStack: [HtmlImg, TailwindImg, NextJS, NodeImg, ExpressImg, MongoDBImg],
  },
  {
    title: "React Conference",
    description:
      "A basic web application, used Graphql for fetching data, To view please click on the items from the conference list. ",
    url: "https://react-conference-three.vercel.app/",
    image: ReactConference,
    techStack: [HtmlImg, TailwindImg, NextJS, Typescript, GraphQl],
  },
  {
    title: "Suffix IT SMS Gateway",
    description:
      "A dynamic web application for sending bulk SMS to the customers",
    url: "https://bulkmsg.suffixit.com/",
    image: SMSGateway,
    techStack: [HtmlImg, ReactImg],
  },
  {
    title: "Wasa Meter Reading",
    description:
      "A web application to monitor the meter reading of the water supply system of Dhaka WASA",
    url: "https://wasa.suffixit.com",
    image: Wasa,
    techStack: [HtmlImg, CSSImg, ReactImg],
  },
  {
    title: "Custom Vat Tax",
    description:
      "A web application to upload and download custom vat tax related documents",
    url: "http://customsvattaxbd.com",
    image: CustomsVatTax,
    techStack: [HtmlImg, CSSImg, NextJS, NodeImg, ExpressImg, MongoDBImg],
  },
  {
    title: "Ramadan Times",
    description:
      "A web application to view the Sehri and Iftar time of a particular location",
    url: "https://ramadantimes.netlify.app/",
    image: RamadanTimes,
    techStack: [HtmlImg, CSSImg, ReactImg, NodeImg, ExpressImg, MongoDBImg],
  },
  {
    title: "Hyundai Car Exchange Program",
    description:
      "A dynamic web application designed to revolutionize the buying and selling experience for four wheels",
    url: "https://exchangehyundai.ftl.net.bd/",
    image: HyundaiExchange,
    techStack: [HtmlImg, TailwindImg, NextJS],
  },
];
