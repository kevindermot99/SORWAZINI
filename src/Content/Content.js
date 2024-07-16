import { PiHandshake } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuSmile } from "react-icons/lu";
import { RiUserVoiceLine } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import ChrisPfp from "../assets/pfp/chris.jpg";
import honourGod from "../assets/pfp/honourGod.jpg";
import eke from "../assets/pfp/eke.jpg";
import kevin from "../assets/pfp/kevin.jpg";
import anita from "../assets/pfp/anita.png";
import sylvia from "../assets/pfp/sylvia.jpeg";
import gift from "../assets/pfp/gift.jpeg";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

// importing the images for downlaod the app
import image1 from "../assets/download-the-app/1.jpg";
import image2 from "../assets/download-the-app/2.jpg";
import image3 from "../assets/download-the-app/3.jpg";
import image4 from "../assets/download-the-app/4.jpg";
import image5 from "../assets/download-the-app/5.jpg";
import image6 from "../assets/download-the-app/6.jpg";

// importing gallery images
import gImage1 from "../assets/gallery/1.png";
import gImage2 from "../assets/gallery/2.jpg";
import gImage3 from "../assets/gallery/3.jpg";
import gImage4 from "../assets/gallery/4.png";
import gImage5 from "../assets/gallery/5.jpg";
import gImage6 from "../assets/gallery/6.jpg";
import gImage7 from "../assets/gallery/7.jpg";
import gImage8 from "../assets/gallery/8.jpg";
import gImage9 from "../assets/gallery/9.jpg";
import gImage10 from "../assets/gallery/10.jpg";
import gImage11 from "../assets/gallery/11.jpg";
import gImage12 from "../assets/gallery/12.jpg";
import gImage13 from "../assets/gallery/13.jpg";
import gImage14 from "../assets/gallery/14.png";
import gImage15 from "../assets/gallery/15.jpg";
import gImage16 from "../assets/gallery/16.jpg";
import gImage17 from "../assets/gallery/17.jpg";
import gImage18 from "../assets/gallery/18.jpg";
import gImage19 from "../assets/gallery/19.jpg";
import gImage20 from "../assets/gallery/20.jpg";
import gImage21 from "../assets/gallery/21.jpg";
import gImage22 from "../assets/gallery/22.jpg";

// Function that gets day remaining
function daysLeft(inputDate) {
  const today = new Date();
  const deadline = new Date(inputDate);
  const differenceInTime = deadline.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

// Hero Texts
export const HeroText = {
  Big: `Building Tomorrow's Solutions Today.`,
  Small: `We strive to create innovative solutions today, shaping a better and brighter future for all.`,
};

// Members
export const SORWAZINI = [
  {
    SO: [
      {
        name: "Sylvia",
        picture: sylvia,
      },
    ],
    RWA: [
      {
        name: "Kevin",
        picture: kevin,
      },
      {
        name: "Christian",
        picture: ChrisPfp,
      },
      {
        name: "Anitha",
        picture: anita,
      },
    ],
    ZI: [
      {
        name: "Gift",
        picture: gift,
      },
    ],
    NI: [
      {
        name: "Eke",
        picture: eke,
      },
      {
        name: "Honourgod",
        picture: honourGod,
      },
    ],
  },
];

export const Members = [
  {
    name: "Honourgod K. Levison",
    country: "NI",
    picture: honourGod,
    Role: "Team Lead",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "https://github.com/HonourGod",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "http://www.linkedin.com/in/honourgod-levison-2b3777174/",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "h.levison@alustudent.com",
    },
  },
  {
    name: "Lineo Sylvia Muso",
    country: "SO",
    picture: sylvia,
    Role: "Reporter/Presenter",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "https://www.linkedin.com/in/lineo-muso-30a9b2233//",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "",
    },
  },

  {
    name: "Rwema Christian",
    country: "RWA",
    picture: ChrisPfp,
    Role: "Communication Lead",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "https://github.com/Rwema707",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "http://www.linkedin.com/in/rwema-christian-335632279",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "r.gashumba@alustudent.com",
    },
  },
  {
    name: "Chiagoziem Eke",
    country: "NI",
    picture: eke,
    Role: "Research Lead",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "https://github.com/El-gibbor",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "https://www.linkedin.com/in/elgibbor/",
      },
      {
        siteName: "Blog",
        siteIcon: CgWebsite,
        siteLink: "https://elgibbor.hashnode.dev/",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "c.eke@alustudent.com",
    },
  },
  {
    name: "Tapiwanashe Gift",
    country: "ZI",
    picture: gift,
    Role: "Recorder",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "https://github.com/Tapiwanashe9",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "http://www.linkedin.com/in/rwema-christian-335632279",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "t.marufu@alustudent.com",
    },
  },
  {
    name: "Anitha Uwimpuhwe",
    country: "RWA",
    picture: anita,
    Role: "Social Media Manager",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "http://www.linkedin.com/in/rwema-christian-335632279",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "",
    },
  },
  {
    name: "Kaneza Kevin",
    country: "RWA",
    picture: kevin,
    Role: "Tech Lead",
    socials: [
      {
        siteName: "Github",
        siteIcon: FaGithub,
        siteLink: "https://github.com/kevindermot99",
      },
      {
        siteName: "Linkedin",
        siteIcon: FaLinkedin,
        siteLink: "https://www.linkedin.com/in/kevin-kaneza-aa1a902a6/",
      },
    ],
    Gmail: {
      siteName: "Gmail",
      siteIcon: BiLogoGmail,
      siteLink: "k.mbonimpay@alustudent.com",
    },
  },
];

// contacts
export const Contacts = {
  WhatsAppNumber: "+2348167568143",
  InstagramUsername: "sorwazini7",
  Gmail: "info@sorwazini.tech",
};

// Section Projects
export const Projects = {
  SectionName: "Introducing",
  SectionTitle: "gerayo.",
  SectionStatus: "All in one solution: buy tickets, track buses. ",
  CurrentProject: {
    ProjectNumber: "01",
    ProjectName: "Gerayo",
    ProjectDescription:
      "an online platform for booking bus tickets in Rwanda, enabling easy route searches, seat reservations, and secure payments for convenient travel.",
    // TimeLeft: daysLeft("2024-08-30") + " Days Remaining",
  },
};

// Section About US
export const AboutUs = {
  SectionName: "Get to know us",
};

// Section Challenges
export const Challenges = {
  SectionTitle: "E-lab Challenges",
  SectionDescription:
    "We tackled six challenges as a Think Tank group, exposing us to real-world contexts, complexity, and innovative thinking.",
};

// section gallery
export const gallery = {
  SectionTitle: "Gallery",
  SectionDescription:
    "Memorable experiences. From milestones to everyday interactions and fun moments.",
  Images: [
    {
      url: gImage1,
      activity: "Our very first discussion as a think tank",
    },
    {
      url: gImage2,
      activity: "Ready to crush the challenge ",
    },
    {
      url: gImage3,
      activity: "Anita Holding our well crafted mission",
    },
    {
      url: gImage4,
      activity: "Having a blast during Challenge one",
    },
    {
      url: gImage5,
      activity: "A pose for the camera after work",
    },
    {
      url: gImage6,
      activity: "Our most hardworking members 👑",
    },
    {
      url: gImage7,
      activity: "Taps just crafting the prototype ",
    },
    {
      url: gImage8,
      activity: "They are the tank, others are the think (think-tank😜)",
    },
    {
      url: gImage9,
      activity: "Taps being autographed",
    },
    {
      url: gImage10,
      activity: "Christian drafting the Prototype ",
    },
    {
      url: gImage11,
      activity: "debugging the front-end 😂 ",
    },
    {
      url: gImage12,
      activity: "Taps the team's mastermind 😂",
    },
    {
      url: gImage13,
      activity: "Work hours; no jokes 😤",
    },
    {
      url: gImage14,
      activity: "SORWAZINI",
    },
    {
      url: gImage15,
      activity: "Challenge 5 getting hot",
    },
    {
      url: gImage16,
      activity: "👀😂😂😂",
    },
    {
      url: gImage17,
      activity: "Challenge 4 completed",
    },
    {
      url: gImage18,
      activity: "Dancing session",
    },
    {
      url: gImage19,
      activity: "Challenge 5 about to begin",
    },
    {
      url: gImage20,
      activity: "Richest member in SORWAZINI",
    },
    {
      url: gImage21,
      activity: "Help lab day ",
    },
    {
      url: gImage22,
      activity: "Unfortunately, we are bad at drawing.😢",
    },
  ],
};

// Section values
export const Values = {
  SectionName: "5 Things we Value",
  values: [
    {
      name: "Teamwork",
      description: "Working together across borders to achieve our goals.",
      icon: PiHandshake,
    },
    {
      name: "Creativity",
      description:
        "Coming up with new ideas and using technology to solve real problems.",
      icon: FaRegLightbulb,
    },
    {
      name: "Honesty",
      description: "Being truthful and open in everything we do.",
      icon: LuSmile,
    },
    {
      name: "Inclusion",
      description: "Making sure everyone's voice is heard and respected.",
      icon: RiUserVoiceLine,
    },
    {
      name: "Sustainability",
      description: "Finding solutions that help people and the planet.",
      icon: TbPlant2,
    },
  ],
};

// Downlaod the app
export const downloadtheapp = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];
