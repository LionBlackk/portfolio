import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import phonestore from "@/public/phonestore.png";
import todo from "@/public/todo.jpg";
import mogo from "@/public/mogo.jpg";
import chatapp from "@/public/chatapp.jpg";
import { FaReact } from "react-icons/fa";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Da Nang University of Science and Technology",
    location: "Lien Chieu, Da Nang",
    description:
      "I am currently a 3rd year information technology student. I am looking for a job related to the web in both frontend and backend.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Lien Chieu, Da Nang",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Node.js, Prisma and MongoDB. In addition to I am also making a mobile app using Flutter,...I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022-present",
  },
] as const;

export const projectsData = [
  {
    title: "Phone Store",
    description:
      "Phone Store is a comprehensive management system designed for efficient handling of customer information, employee data, product categories, and essential tasks such as login, registration, inventory management, and order processing. Built using C# and Window Form Application, it seamlessly integrates with Microsoft SQL Server to provide a robust and secure platform. With features like inventory tracking, order fulfillment, and a user-friendly interface, Phone Store ensures smooth operations for businesses in the dynamic realm of mobile phone retail.",
    tags: ["C#", "Window Form Application", "Microsoft SQL Server"],
    imageUrl: phonestore,
    srcUrl: "https://github.com/LionBlackk/PBL3.",
  },
  {
    title: "Mogo",
    description:
      "Mogo is a captivating project that showcases a meticulously designed landing page, seamlessly converted from Photoshop to a live website. Leveraging technologies such as HTML, CSS, SASS, and JavaScript, Mogo epitomizes a perfect blend of creativity and functionality. The use of Vercel ensures a smooth deployment and hosting experience, making the website readily accessible. This project not only demonstrates technical proficiency but also highlights the aesthetic transformation of design concepts into an engaging user interface. Dive into Mogo to witness the fusion of design and development excellence.",
    tags: ["HTML", "CSS", "Javascript", "Vercel", "Photoshop"],
    imageUrl: mogo,
    srcUrl: "https://github.com/LionBlackk/test-mogo-n",
  },
  {
    title: "Chat app",
    description:
      "Chat app is a feature-rich real-time messaging platform that ensures seamless communication. With Tailwind-designed sleek UI and animations, it offers a fully responsive experience across devices. Users benefit from credential authentication via NextAuth, Google, and Github integration. The app supports various media types, including files, images, and audio, with robust client-side validation using react-hook-form. Server error handling is enhanced with react-toast, while read receipts, online/offline status, and group chats provide a dynamic and interactive user experience. Customizable user profiles and settings make this app a versatile and user-friendly communication solution.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Socket.io",
      "Prisma",
      "MongoDB",
    ],
    imageUrl: chatapp,
    srcUrl: "https://github.com/LionBlackk/chat-app",
  },
  {
    title: "Todo app",
    description:
      "TodoApp, crafted with Flutter and powered by Riverpod, exemplifies a straightforward yet powerful Todo management system. The app showcases a seamless implementation of CRUD operations (Create, Read, Update, Delete) in a clean and maintainable code structure. Leveraging Riverpod as the state management solution, TodoApp embraces a declarative and efficient approach to handle application state. This minimalist Todo app is designed for ease of use while highlighting best practices in Flutter development, making task management a breeze.",
    tags: ["Flutter", "Riverpod"],
    imageUrl: todo,
    srcUrl: "https://github.com/LionBlackk/todo_app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "MySQL",
  "Framer Motion",
  "Python",
  "Django",
] as const;
