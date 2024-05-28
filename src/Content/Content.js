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
export const Members = [
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
    TimeLeft: daysLeft("2024-07-30") + " Days Remaining",
  },
};
