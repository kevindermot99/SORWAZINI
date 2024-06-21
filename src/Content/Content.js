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
import gift from '../assets/pfp/gift.jpeg'

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
        picture: gift,
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
    name: "Honourgod K. Levison",
    country: "NI",
    picture: honourGod,
    Role: "Team Lead",  
  },
  {
    name: "Lineo Sylvia Muso",
    country: "SO",
    picture: sylvia,
    Role: "Reporter/Presenter",  
  },
  
  {
    name: "Rwema Christian",
    country: "RWA",
    picture: ChrisPfp,
    Role: "Communication Lead",  
  },
  {
    name: "Chiagoziem Eke",
    country: "NI",
    picture: eke,
    Role: "Research Lead",  
  },
  {
    name: "Tapiwanashe Gift",
    country: "ZI",
    picture: gift,
    Role: "Recorder",  
  },
  {
    name: "Anitha Uwimpuhwe",
    country: "RWA",
    picture: anita,
    Role: "Social Media Manager",  
  },
  {
    name: "Kaneza Kevin",
    country: "RWA",
    picture: kevin,
    Role: "Tech Lead",  
  },
  
];

// contacts
export const Contacts = {
  WhatsAppNumber: "+250785614800",
  InstagramUsername: "sorwazini7",
  Gmail: "sorwazini@gmail.com",
};

// Section Projects
export const Projects = {
  SectionName: "Introducing",
  SectionTitle: "gerayo.",
  SectionStatus:
    "All in one solution: buy tickets, track buses. ",
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

// Section Challenges
export const Challenges = {
  SectionTitle: "E-lab Challenges",
  SectionDescription: "We were assigned 6 challenges, each transforming into an unforgettable journey that provided valuable learning experiences ",
};

// section gallery
export const gallery = {
  SectionTitle: "Gallery",
  SectionDescription: "We were assigned 6 challenges, each transforming into an unforgettable journey that provided valuable learning experiences ",
  Images: [
    "https://images.pexels.com/photos/19802887/pexels-photo-19802887/free-photo-of-power-cables-on-a-railway.jpeg",
    "https://images.pexels.com/photos/7495732/pexels-photo-7495732.jpeg",
    "https://images.pexels.com/photos/20529772/pexels-photo-20529772/free-photo-of-a-woman-posing-in-a-desert.jpeg",
    "https://images.pexels.com/photos/21937092/pexels-photo-21937092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/24259755/pexels-photo-24259755/free-photo-of-a-woman-holding-a-tray-with-homemade-dishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17645285/pexels-photo-17645285/free-photo-of-sea-coast-in-cuckmere-haven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16848795/pexels-photo-16848795/free-photo-of-relaxation-in-luxembourg-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7403115/pexels-photo-7403115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4231477/pexels-photo-4231477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/26018022/pexels-photo-26018022/free-photo-of-a-vase-of-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
}

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



