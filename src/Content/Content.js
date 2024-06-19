import { PiHandshake } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuSmile } from "react-icons/lu";
import { RiUserVoiceLine } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import ChrisPfp from '../assets/pfp/chris.jpg'
import honourGod from '../assets/pfp/honourGod.jpg'
import eke from '../assets/pfp/eke.jpg'
import kevin from '../assets/pfp/kevin.jpg'
import anita from '../assets/pfp/anita.png'
import sylvia from '../assets/pfp/sylvia.jpeg'

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
        name: "L. Sylvia",
        picture: sylvia,
      },
    ],
    RWA: [
      {
        name: "M. Kevin",
        picture: kevin,
      },
      {
        name: "R. Christian",
        picture: ChrisPfp,
      },
      {
        name: "U. Anitha",
        picture: anita,
      },
    ],
    ZI: [
      {
        name: "T. Gift",
        picture: "",
      },
    ],
    NI: [
      {
        name: "C. Eke",
        picture: eke,
      },
      {
        name: "K. Honourgod",
        picture: honourGod,
      },
    ],
  },
];

export const Members = [
  {
    name: "K. Honourgod Levison",
    country: "NI",
    picture: "",
    Role: "",  
  },
  {
    name: "Lineo Sylvia Muso",
    country: "SO",
    picture: "",
    Role: "",  
  },
  
  {
    name: "G. Rwema Christian",
    country: "RWA",
    picture: "",
    Role: "",  
  },
  {
    name: "C. Chinyeaka Eke",
    country: "NI",
    picture: "",
    Role: "Tech Lead",  
  },
  {
    name: "T. Gift Marufu",
    country: "ZI",
    picture: "",
    Role: "",  
  },
  {
    name: "Anitha Uwimpuhwe",
    country: "RWA",
    picture: "",
    Role: "Social Media Manager",  
  },
  {
    name: "M. Kaneza Kevin",
    country: "RWA",
    picture: "",
    Role: "Tech Lead",  
  },
  
];


// contacts
export const Contacts = {
  WhatsAppNumber: "+250785614800",
  InstagramUsername: "sorwazini7",
  Gmail: "mbonimpayekevin@gmail.com",
};

// Section Projects
export const Projects = {
  SectionName: "Introducing",
  SectionTitle: "gerayo.",
  SectionStatus:
    "Buy, Book or Rent with ease.",
  CurrentProject: {
    ProjectNumber: "01",
    ProjectName: "Gerayo",
    ProjectDescription: "an online platform for booking bus tickets in Rwanda, enabling easy route searches, seat reservations, and secure payments for convenient travel.",
    // TimeLeft: daysLeft("2024-08-30") + " Days Remaining",
  },
};

// Section About US
export const AboutUs = {
  SectionName: "Get to know us",
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
      description: "Coming up with new ideas and using technology to solve real problems.",
      icon: FaRegLightbulb ,
    },
    {
      name: "Honesty",
      description: "Being truthful and open in everything we do.",
      icon: LuSmile ,
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
  ]  
};



