import { PiHandshake } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuSmile } from "react-icons/lu";
import { RiUserVoiceLine } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";

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
        name: "Lineo Sylvia Muso",
        picture: "",
      },
    ],
    RWA: [
      {
        name: "M. Kaneza Kevin",
        picture: "",
      },
      {
        name: "G. Rwema Christian",
        picture: "",
      },
      {
        name: "Anitha Uwimpuhwe",
        picture: "",
      },
    ],
    ZI: [
      {
        name: "T. Gift Marufu",
        picture: "",
      },
    ],
    NI: [
      {
        name: "C. Chinyeaka Eke",
        picture: "",
      },
      {
        name: "K. Honourgod Levison",
        picture: "",
      },
    ],
  },
];

export const Members = [
  {
    name: "K. Honourgod Levison",
    country: "NI",
    picture: "",
    aboutMe: "Dedicated to humanitarian causes and volunteering to make a difference.",
  },
  {
    name: "Lineo Sylvia Muso",
    country: "SO",
    picture: "",
    aboutMe: "Passionate about empowering communities through education and social entrepreneurship.",
  },
  
  {
    name: "G. Rwema Christian",
    country: "RWA",
    picture: "",
    aboutMe: "Committed to fostering cross-cultural understanding and promoting peace.",
  },
  {
    name: "T. Gift Marufu",
    country: "ZI",
    picture: "",
    aboutMe: "Passionate about community development and grassroots initiatives.",
  },
  {
    name: "Anitha Uwimpuhwe",
    country: "RWA",
    picture: "",
    aboutMe: "Driven by a desire to advocate for gender equality and women's empowerment.",
  },
  
  {
    name: "C. Chinyeaka Eke",
    country: "NI",
    picture: "",
    aboutMe: "Committed to creativity and artistic expression for social change.",
  },
  {
    name: "M. Kaneza Kevin",
    country: "RWA",
    picture: "",
    aboutMe: "Dedicated to sustainable development and environmental conservation.",
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
  SectionName: "Projects",
  SectionTitle: "Exploring Tomorrow's Solutions",
  SectionStatus:
    "Currently working on our First project to shape a brighter future. Stay tuned for updates!",
  CurrentProject: {
    ProjectNumber: "01",
    ProjectName: "Project Name",
    ProjectDescription: "About the project",
    TimeLeft: daysLeft("2024-08-30") + " Days Remaining",
  },
};

// Section Projects
export const Mission = {
  SectionName: "Our Mission",
  SectionTitle: "Creating Impactful Technological Solutions",
  SectionDescription: "At the heart of our team lies a collective commitment to crafting innovative technological solutions that address pressing challenges faced by communities worldwide. With a shared vision of creating positive change, we harness our diverse skills and perspectives to develop projects that not only solve problems but also empower individuals and transform societies. Our mission extends beyond mere innovation; it is about leveraging technology as a force for good, driving sustainable progress, and fostering inclusivity. Each project we undertake is driven by a passion for making a meaningful impact and leaving a lasting legacy of positive change. Through collaboration, creativity, and unwavering dedication, we strive to build a brighter future where technology serves as a catalyst for social transformation and human flourishing."
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


// Section values
export const AboutUs = {
  SectionName: "About us",
  SectionTitle: "Meat the team !",
  SectionDescription: "We are a diverse team driven by innovation, creating solutions for a better future."
};

