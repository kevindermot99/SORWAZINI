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
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

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
  Gmail: "sorwazini@gmail.com",
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
    "We were assigned 6 challenges, each transforming into an unforgettable journey that provided valuable learning experiences ",
};

// section gallery
export const gallery = {
  SectionTitle: "Gallery",
  SectionDescription:
    "We were assigned 6 challenges, each transforming into an unforgettable journey that provided valuable learning experiences ",
  Images: [
    {
      url: "https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihZVEKrPNim41GZUO2tXRBSGC6DmAq_wyCkmVrhnF4eulUxbo4zvTsnGnAUOhoF5hWewYS77HXLII9Kmx__Nd-FNyPMsOZlIJyU=w1366-h649-rw-v1",
      activity: "Our very first conversation on our mission",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_EgRcoFp_skkMNKhFe6Ds11CZTCbGS4-iUHz4SlP1-4eQIMD8dHB4ZdAcR9GzyTN8jmNnv86SMPNY1r4v7NL-j0oJPlTgpL5Cfp4rZaFptcMuWLzWA8DvGEQB8BKeAZH2p_zlXSdZ58hN2fi97cFQJCLHiuO8OjUTNZAr1mwg_Df1li1GQwaRp9GqP0zk1zs0Ee5m3kQXdFQQ9-_lkdbd5TZ6tf1K1rdjzcj75j_uW3-fSM4XtjOViQQOv-QlxQxroBDhkY-I9kVwyC6qfoh10hA0a-ogNgwJFdKf135Behu9THG7nJVd6-bD3fmX7B0-d-3n_GH1NFWqNWJIQ2-we94EsNYpYo0-rLbDQj24PgoMUNEmqrDlvY1VPZyE2ky5n0xag7UOdQrOsl56OhcS_Vj4XdT6q2LTRDJ04GhfmJSylq573lDwKabuNXf_97AmYMX8MynaO4vLr5hQn-WMHPNNZqAERxE5K7MhFpobgmHPvGSIIyyX8Niou_hO37JcTX1CgO5X-6Jh6dwaV_ElZEGIuSoLFwkd5v9LZ8JYmZR-0SrBUf_r1BX-HhKHaHz0tigAv8OJvlzGpSVZjosb0x29JksFhdr4m0mZXgWGfNtE_OTbJ7WleorlPEEHY4BSgYOwUi7eWjch2y1msmbQbqQFDLWNQmxvSpNCJGrQysjjhuTlfCkycFzr0WyP5mIajPa40xmvgfPaAsvjpteyI2oLGd_e_yCUxLzZX0cbuKpJ3_OHF7a3FJGusTzGIaFeledIYpk5FOwGdoLRhohlijCbelia_277Xue7CLUebePpp4BGPb04pEjEdNaYA95VoMtuosVapQH8uR8jUD-bW2Pz-3PkQ0idgMiErch6mnvC-QcUCIMTtaqOhJO_DYqhD5XCDwqMhECwKFqR2itx-SqC0jNk0quMo1Aaii4TU7RWCPEjexIGx3qPF5Y1Ew-O6yXx3MsNnx1dhcnr-5EF2xRC9eAiPLwB-z204cOSAWdpDWn9g9PfdWUFKWgQCXuMQFeiFSg04I6e7G0K8huTiVLkfKFsHmSw2wGKc_X61kYN9IBeETmZDW4FyfSQQ9InqsCoiDuVaf3_RHltl50U0xqmoBIIogCKgOvc8wtkJ2isyegAlmsStFzRoSz_uGuD4I2-r6sidgLTSbHuFNfLnR125y7NpMX6XjlLfXRcsjMujvLfu-8H9ISZ_fDWtLUcR5SWorBp-aEuPWF0N3HQ8PuC4u75Di5OABPpjTEmMHReOS37vO9x-4uAV1gGroI-g144877hLoMlMRvDmeTWz-6WZxsLfczraFzjJDSyQrlgOW9kENMXd2ljvzOKWmXLKbSrf5VQCzJKi8dhpt7phHs8Cb34GCqLY8QMPTVS_Cs7GyvtXieIlLH21Log4xMiGe7uCD40NrJ6VRvq9sWV51pQYbnNjuoaPgNLf9y1lunT65vS6IqY_hlNohRBpOwWLvnWBnIuwiMrs79lB1NetZ4aIB9N9ZP9KBQ3uQvNy5PJMimNu-SYlKIxwH0pUkFdfJh2Py_uTPGkwbHtlBNTaxs4Z1o6TaO4YBeruPoR1dS2kuXiINeVVAy_izYTVIbtfA2mApyooSzPerifdlkEemmsnkc-jrayeb5mdFAWeWdvYPlQY8BwlTHbrIh3sJe9222x4ZQ4eF28m1MmW5vHrFiLLmgfdsbChivBN1FfrLjRf9oEnD29mVYYOVIMqvkHagS4YBJvhCpDZrx5NxANCxDbw_DvopNFE=w1366-h649",
      activity: "Ready to crush the challenge "
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_HmIHxbvxmT4J5hJ5T1wrvS43lADxzTrOF6gnwPj3jhzNy5clGqh9XgmYtgtah0-6IGyNr5v30NeCoYwaxdcdUzvxKu3340juzQEuug0lWBf51gNMycunUeaE2h916PWjQqcLMhBWhJU1AQS2T6MOTSjEG1p7hdtGkSY0CN1be7pjPxeG9ya7j29w0MegQASVuuQ1ga4MpgVaULdxxpJKH_UxrM7py3KXujn2Tv7jN3BmdzYzFnQNGmKzLN0EX8LzzjmsnLaX1e_c5d2hfOyLQNHC61fqzru9PHBqWl9d7zeMIll8rerxoysErSc7plc_3FQGmH7SxHgYs0wzrvPrUajLrxhdZeWIhbrU8gN7AV5UD5y_nfza7vU2n77v9d5svPpdrMxfuO1lOIIM85F97mhIGYlhhgXz5IVWd5d-IkeAn5-XMPX-IqnSVYXQ8leoate6n1dIr3PFmze1ZTMvuWbWo3eK13rhCU3xjMD3Idvez5gojqXw0CjikD1JFzfanFspu3FLK8endsP4Rk7uqfUCyqxdeU6_266f5uMnzhDf6vH7mLKIDv9P9ih4cgETYQ03ie8gxtyBRUrFb6JfV-aPIojiJt0gpqYHNXrfy19urJ0C4WWOqaW8XzkWjPAG7DT0k_NplrZd_mlUBw1pmi8ytFffANL_pMkz6l4sKBLhGURIa0EGtqHcT4FfBXPx4PiHiXuhh9iLcaWOQ0ia7R3k0gr3D4DRne62t6MSRhVzk6IUanksvxpid0nlYCR6pZu0L43JfrKOIDGpjy-Xs8doDtsmTXm6i_hV_CdcBtsK3ptzp3YFem9d6b-l6e-XwR276JnFxGtmWXUbmVvP8SnXFd9fD0U-FkQ_yYMqv8GTBslhiSbL6dedMV1BQaPtt97_1krHTBM0TAX5tnUnXqEmGbQReA31p7ok41n_29RsJG9Y1gw5H_ya-HH5waCZVSigNE7q1SmTjRghFSPy1yibVjVrqM10m_WEw5N-3Io1XkIci451-60R3J1BZbQCq8sw3Xb23erXWoTLSDUTlKNwpaHAGZ_B8SAQvWlZ2eNhutklasqsj-0fy7EqfiuStUe5L0tCqC6W1eeWXqUxa9DJ9Zy3kN_hFgQtNs4ceMmuRbgEm-Z0o4qBMWNiZLueMh7CIJ0K44d8X6RXMaPBJvD9ymHnwCTCNmaQwgQOpeLWQ2rCtEmVTJZs_SIjDHJ5DTWS8yRwGlenfW-zfIxf5bReDWWN9fmDWFNKlnUrGtg8fafpzkt69jV2GGJN6mZixVDz-SFJ08MQZ7_VzFFojYLP65Bci5dW2ymwWpnX6rnIKAmQ0ZRE-joXYVNzgE3ZVTiB8CUA-Jd4iNkUKYlQ6_sTrcIxs1d3FkesSlU3tErJky2J4Sa7l1irYjh6Xd_V12VHrIEtGBtfBJhctQZmy04kudQoftglys5GmeK9frs53CpfSro2ONvmCJOCrSYw2dk9OpVRbvt60_wcR_0UOiUPZx42XV_6VoaqVd8n9zJwfr53nLsgel56jMtRiApWkuYBr4D4M0WLZrdU_DfbXWXTOWKg3vEsAOq5bsI2riUmoaLOs17jwc5lSzzl5Ae62QKROeqScTIlPNuSZXS9V3_0wiE-yUIQLvn64bKeDwLYMqXnrpvWno60MkYDb39BOmJiWmHf1eu_Yij8e-26ieeaHdc19KC_mbUpkW5xE-YGP2UjbeB-mgyzfrTOwjvM8L7cDGOwgSkcAm5o_WqPgxjwffMGM2vmWg=w959-h649",
      activity: "Anita Holding our well crafted mission",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_GOw6N2jwkVccve7KFVY4v0qL1hz_QJ1cMDuKtXEhGUp7R3tNyTi6WS6mUNft9WqhNfjOPr0v-syF2c_w64A9uq8cVM1Y2Z45bJ_IKq7GSydCbc37wxBO4ioSOtDr0z_4wvv7fxGfMxvp7ZoNuJQSe3Hq2jXR6j5IdDpjYEEbUG0rwBOZ00x1PxOuSYpo7ojmXYWHSuStQHC4vTxteHPjX4KhRgpqNawtEXq2xN0tY9qRZoouPBYI80lmtCT0gKRDVxp1G9tHq2jbbCe_f0eJ2SpDMXXhFAijCqBVQIgDlP24x3LAwkxs_3rnqkZtertLgCCOxk_sQdT7rqkPyQLy22IsoXpZiRjiYM-WvIegzEVhN0gIWTUqL57j4SZh4vomQYwV-FcWQtHvurwupbiwOh4I3tPZPLl3Ryc9tJt-V1N9QjkeJyxJPs8nIkfLQkdAiRYtSlI2HInxFfPdOr42-mTdDtnu-bD62wW5T-QPgWwlomQQALRiQEv1dKqdi84ffHSv7VB8vNu6FW2fJleuQX1w0T-C3bwzRlO0EqxFuD8jV3OVp5t-pAGutAZ4DQ37mGFFWiUokijStoEye4qo4wUL42cQDTV5E9zKuEdjxL_WnCvvGpYKtED1aSlCSxZAvWIQPtaHZNIOdyUnE2hPeb8gg5WCIvbPXAlZLnHCr8zZli8oSRNMUVAU_3RiaGlNjEz-FLQ54ItvKK1-yeLoUjNRw-p5v_7ROvVS2zxIyP4d4De3s6oyfsdJcbxwP3G_UTXbwtgAoe3M6cNRPsmoNiB9OCbDP67O8KWOrEaTntfXb3KUSO55UILD7EZUNb5aSYm82_1INaBBzS6JS1tC8QV89Gu7oYFvDf0xpZPgiYC9_CEe7aCXiKcT_bwregxPykXZdXLRDTW6A0hJDFrdLR0kEHS-efinoX3jzQBEYHJjarfDoNxSFgHZ44zGdPszGgWOzXXc9DswmexdCvL34YKn5_QVgkrQI5sztdxTnCaVI2NE9vib7P_xlCgsc4ZN6i6RiA-6GhPEWGpCG1U_7VwVB-qB-gOjsdynGsbQG4gtjvHUIg9QRj2vBxyvhkfbGUGJ53fWEO75S2RAALHONtFq8naG4C1VYsQ2YGgwQ5oocDBudWh6KxnXBf6mS-DN7zVK2YlBqvUa5QI_MERfuI1RXLAW_cz9tjt7tYxApKNch5r_zjJHAb1oyxptNBqWi3s6HuYiMAbi-gZx9jyFcAdFC58T2SjbMkpZrrIIMcP3lykQJXkeq_bvwpifzdsFhVHQgFBWx8GBfKOb8kApj7LpSaNq8d3to0gvRfVEyLg6OwB8S1BFavQOcretvzbJC2UqgZ0bLfMJCz06zuZz5sTN9Kueu-XVWu2M7Q-GrFM4AxUZQvUjWvS9aUBWWt6XDyFfFJe-mGpDCPDy1Li2TNmGlVR2YL2WXOwCW6o4gGKju_AZauho3PSNg_m4T6WbBCS7qA5LtDiLqak6yTbs7K__JqM7wUM9P835noiDEaVab9MEQWljcRmnSnrX7BijDz6-6N3qtZy4PoT59Qh0OKcNemrd77D8-xcU3NStzBol2R6E157m95v1NFwTOyItNavJ90ouKwGSZ6lRRpLDsJ-t4Nk0gpdX5NUBmG3lGSA4wdpjwIhHIldC4roVhug9CFbSfGO_cHckhBbafliRgdw9MaKmKS0geNMxwDOTBdLBKyd1dtU_9TQLwueA0h-ap0SihHJwwOPKPbY0SxZgrpEujRX_l83E-q=w1366-h649",
      activity: "Having a blast during Challenge one",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_GsM5UOeGILSYUxgj-nB9v3Y74X9REGkBWRENWpfamQoB8JAfgTZ19P9sbPOM8oJOg49pU-rawjIUroZKsFN9Qgx_yH3mZQ_Xgn5gS3buD4i4h3YUejQNmgy3u5y1dC6-dZ_CYYAL6_4VbROVz0rODUz_T6tyYAAg9wm-Gq-NPjUL780RHhX3p4k-Tt-8LnAKoAwK_AKgs7rlMPIBg-MmZODKUNhvkdrTveSANfzVC2DzgFJb7b1zY1LiPhx49KYRhEsCCNE-Kre-HNp6QsU4ZcWc2Pa_wH1lMgp5tFQRBx-8CkGjfssNyquXHVpPOnSr_83FfNc3mx4i4q0Y-FjkEzGB7h045STSeTFUnmNeWu2aIDKETnmK-epQc3I7y2DmCAMHiwoXK2RepCO1w5nZgThGtioqKbRkMEpF9pXDKX2dOkPVEPu1plWoSEnCTHdwfUuUIaDgZ22hlvYXANbVqV5d-BMPFD1upkjoBV052OMa8Rg7LMB5rNmvlzuQB88HJBS44Zjt-CtnWTJxLmFwRFwsv-nDluOGw-tfXB8Mu2sxphfTh4up8DTMNe7nwCT0u3MaVfK_2qDy4Rx0WZpAWWB4_Np1mCErbGEUpjFM2S0zvUEHKpx5FS2UMUxQkSvPHbXsbmzQfz0fKxYTvh-tu4eTydNxnYbK4iPiPZssvwopewyJPK_btcVsCsSDNuv2-7g6_vhn_EMPlTZf9QgihSh4t0YYbjxngux-AjK8o1e6sGZ1rbOdNNrImNEwbbzmxyezF6l0SWCnk0fHnkMr1Idzi-4jp7pYNCCm4od4qHUMI6HjTQ4u3ludnvL7sDZRC-S3fhYAReaJlvFmr9tW3K244wXGQn-MGzj5b6thWAi0PCPcKyJr9CPgb4q-L22GUYLGeMnqIzvetNkMp07C6eHlsHZQPoORPpyhenr71XysgR9MfCqspwFcUWqzz7jaDTAZZs0ZhAlFoSVkLfoGS2BvjO4CshqVMyZt2wavLoP7jf75w3kUDFg6hLO_oMZf6-JpiYgqyCNRlOz_2vK3dFzlvRBgqR8bBjpEEp5xOjXTsJyOXCXBSbWW1HoaXlzeTljGGw_gzY432kqi_QzN6cmwr4SujbcOqXCKEzcN6xrP9Bv5-fvvXkywLk4-p_nNDVpCIA_zs4uKXrKwcf1fANozxgYixCkbxOdDFfflvtE41l5EbjgN4WXEMvUxAMInuLjz2B9aMTE87QcnRqmuUlGX-z2Hvh6UrqudlJPBCRYCDFAObpH1HhuDWE_GcP9kKYkLwqJRa0yVaQl7phQ8zo8Qc56kn3aH53_GFykyTt7CALWvyTddG5LnO1BwSxjdqze7y6YsBmr3F1ivpL8BArnAAvC93pP5VYYqZJAWhAxLRg1oaLU_DhAwCJEVFKyhu30Reu5WA1wofdEUeTHfOONGbC--DtINgXPJ0hzISxaJOX08I8ssF1FUgtWhlvcoXwWlOkTTzj3kwxQsjT9SKv69QyF2JvO-O2sSqcJ7cICF8LZIQYRyonYpfHsSyjySX4O6K02Mr_DQkxafVdCt2QBNiIGWCLFzooysWnCTv89k_2h1ztXb5lyuhZ_uzHnQgrbFhhJtb_ztp_pGgxjhsBswoUdhbbxfV2o-0wJcI2s58dQSGCKgXzBKRozBOuVaFM-zZxA2wSf3OU3RKlkfuP312klZHKeMmH-fOt1e6KlDomq27us-IWmDG87K1GdEMsmXJtMFlyItOQFUkO6S3AGCu6wApyXYtl=w959-h633",
      activity: "Our Romantic couple just chilling",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_HCjwDQQ06SIHleBEtlHRdbkietwJZ4JvWNVTuVepmWPQNvwdFSzeCDgeJVn2ntalGFBO-DZAB8hgimr3OqW8tgQQ9OYR6_LkRFqFKID_tt591U-pc2Ohiui3zOpfeHnJqNThZhIdYa5rF7IjGtW4j3ALtxzhTLuwZQc2Tp0I7CtlFKj6xGaDSkRt2yDjCY2jq3_WIB0_XZtDjKYQWN0DrQ1-hSyialbuZjQJ9uml4nu4zinsXUzl1cF7YeO9fj7CRNNDAq8YaR1pr6Z6UMB5J2gc5_6JJa0T5auemcVEgc1cQ0jKm501Egh6SxYhN5QByvCRT8loPpda0quebckUEHfKKAChSEMZjYLJBpVNPDK4x1yOdxl0GRI4iJVm71WbqNoc9PdUV0LRMnJJlRdwpQwZ_wvVjBKjQ7bd2OzoKRYy8S1B7fPu1mg1wiHUidcnehslOn3ez0X6PUN9b-Kyokb9eky2QqCsfAe7ttQpin_evPdy2Pj2WKxUHk09v5FE3PsBOZ9dnALD9Xw91-NbJHTWMfE8j_eC7KNa-S71_iuldNTqWhnpmGyD6ITWjqj60JVNAZQarh7mWG9WACiL9h6ryTP1EsXxZXV1VS2_UOo-7td6schHzU3LTq8xXOTRW__VM8SB3BHOORNbaoNzbYglamauVgWh7ku_9EowiX7ffgDrGRCkWrOXFgAtqStqSgsNfKUROu1p4FqFAqVZWJ8UsPKVIaWV3uScXD37o1wokyNGu8xFuwUzcQ8xUYEYZvnoUr0btFqw_Qyv7evl3EBGND8C9NrM5vJirNOWuel4fFS_-LAZeRVVrf-3I8SCusgDLjVxCEM95R4g4fNK_EGP9teMu0BikzEAxwEUGuRvAsUrOADgPDzdcFs9nvUtW1-c5vQ0gc8RyuzmYB4pY30etDgP_eQEqISOBSmcDG7UJ5W9NfkWPELfcB0-hUM4pbR5wVe8lqEu1ae1uvCE4PgAZVLu-l-AAMaMfF5VoaINgDuzYI17Hr2BkpLVi6QpmB7fIojZpBMhUGcnuxGasxhkIkInReP_0C9q_t72Qr4WUI30kwTcYU0lg6XiqTvZcYKL5_Y1U-xWw5uhVzo9e-VGBOTiMnrH4c417g87utL0VSYv7CDlhVxQMWJEdlusAtkLeaMLGW9dUupP0lWVDnvVVQseJmPCwrszQilZ4kpAmiLnaV7SNu9ZHfodBhhp2H8-fV5cx7SP6Sz6bgvGX3IT1Sv2kyJRdleXuFEIi6c_j0y4GW9juBIViYmnv3PG23gzzGdG1W6Pwc6sXhuanZatr8SKf4xpJ3buJweT9hyYyaYSGd8U67-2brF5_FeB0vksTRoD60Hg3JsZNUaUwVhBXhMgqGQoIbmdt1_BicQPEs1zLjkFElp5SlgmyBe4tg9eVdP_ct5_2GQSma2UlYNo_lkivJib0yaP-aCjertdO82O2VOVPJelGDZLuP-Tyxi5xAodp4vTH8lf4uIDxz1G22_xLJcUHWUYdMRY98m62mRPnRhZaV9KY4m0Cnevi3eIXBYmL5hen22xXkrsUy2gt0ciDRkHVt8HiPjytE1AoEt8fMyn_vkDotv_tga7GNdlB3iklpLjZdXVmQ4fKAMilA3uXGIMLQXK8fh4BtYbAO5eTX7ktEhyxNlWtcbkJGcKcVj7kq08BspDedMNTpUntjspzXtwkgOLb7BNRrRSwZhfXtIizFXki_eAbKU5j3JjNFU1rzNTwY14ciLu3YjhCUXL_fuMHL=w959-h633",
      activity: "Our most hardworking members 👑",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FLEQ4b2WkVHzelV6qK1GUFPWoYj3S2HchfkqtgRX87ne2k3Fn4QbXAQSAUvQ2kCpWsFOde62dX_3rokkJkoHqBVEvwsFVbPHq4Fd4Vv5yfdTQvyX4gRTzgCFVx24Op8Hg0Wdw7oGPGEfw48qUbm3nu_z-hGLsDByLHt9hS89cdk76DbexrbfDGK3F6CgCcSLFWbMj8Yijsl4HpTiKbQj5erJdrJk483KpGBhgYO6CVo9ZH2dRYbEiSux6MsSlxjXgmgHRedqSuiusmJ5UKH_MsTKqZ2pxh4nPsrW36foZR9rc_L_bMBPX7aYHbQ1C_rTCM003xjCyJ-fGwv1tHtS3GV5I4UXMtNci_4O-HebGDnYUSv1DZKBkZyDQuVGj2CschlK6CsrtQPEKuteugq7A7ckxpTjFrBtrHWNdoZRi4ndlGzkcpe8Ms5W5AGEc3AiETcOcSDkB8yQ9HTzxPuZAXqcTKLUGMgE-VB7KNeMVX1hPY89uEe2wTnti3CqG4DSMYGBbbmB6V_impS_t24TqrYIRtsjrGrwb06LbcIBKCmXuZnLYv6Gqf50-v9JWa7fcUJwOvweBnPc2EkHdeknW5FrQylerpmS52VQNVR4EwrKa-0lVKx0Vk9gCEHikvmTbwU-8P2N5UGbNiXSu6Mn8jOCML-1SXF3RpZt6IxcMv_fwhmSTR5zl0-F7Z73I4yCNHpWcj9H81VYJVTQ-5Et8PK-fjQTO7BlENrglDYpGJ8I3sSLwDCx1ruYwikGHzxD5ERsra2Rv3pBlSCNZtta90bDILeBSf2M4pJI_AK9SQP28AiE7kuM3SiWUYKfel0_ire6c8x1wk-SnvJh5tttN4M__LMP45gHBkpuBM_lI3TKmJ-RBTjhre5oRZXS9ysGpVMfhu6NwqFvV8BcKK_8slhAGjI3NKys4hhiJfkinpKfN9squusP_Gvim0xSFUkwf4s-6lH21BK7WA3lMVtU6eq8vnLAG-yBG5zuvDgi3X7H2ZYinSZUhkII-7jXg58V7ug5QAXmiQ2Xz1nhbfTccV0Q591_yS2qLdWEOcS-KVZznZZfZlhHfp5Ui1rYSgUGoOdP5x5ivaX8uenUR9hhn93uQAovoUF-YnF_IZnD0CymRcUpxx5k87tRrhB1eDlpWA0q3LtHRN0lTXOOJgZtno_Rn1ALJoKn5INKxpF1S1YZ0fpKswmVpNJXW0g4DySF1FJp0vISOPqsu3Va7aA9TSwOYbUkosylPSiv7O6u8FeCJD1MuiRYfYivO3CVMm7KC5Aq2fH3N8BToHaabv7mf0f-OHaS42_0CcsHHgNmaxti0PB1zjuLajGN_3pFb5I0aWpiOwBjO0X5WZs-NnxLvtzS7HlAn3q2AXR4i_S5AiUhhIKsRNi8MN-TLXm-CFbJDgVTo_2NAd1HZOvE6f8NFk9wWYnzy65I4EIe7fiIhM23w8Dqyt_S1F6_VjYtBSkXopxp1EettjaMWKj4Xn6_TPKB1-Az0xVVeQkTidxKf17UYLSSY8VUoP7oMKb4KfCXDEbOimwvBWP_jML4Bq862urxfQHh-9Qo2sUfOzqlCpBl6JkwC2AD3WVb5yvjU6jxSbFjc9zXsGIFOrU6KGmQAHsL5SmIujblDDShfDZP-3aFVZxNJoILisLr0aOUftdj5DdEp_fT0P6iJr0iAPUp1yyap_uzLBuHEJmnqaiPfUFqDJg9aNQIlvwsvKS_h7D0jIIzL-bLrPfa1Jc3VxgnqSc_bUpEOjkYh9=w959-h633",
      activity: "Taps just crafting the prototype ",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_EycLHwBt6rtz0qf0sJbR3xabVq_9wFWM_NpcvFKYojuKmlX22WkCZ43CwgJO9DlkS2AzjKvODs06IOHEpC1ZOS52Uy4ssApAf3RpzBnNknIOarKbdpd9FANJrSnOIMPoCdAhKWZd_FhlUumPhARz6tRoS8sLg6fUHGVqlmsIfQ1Hn8CXtVn4fU4JuYXLV8Nt7iwj_vERrLj_OOHbWrgdm35G0kc9bRZVvyKQZJAz5kJPEwXEBn3evDz9wLn0L9RoGclaFI7q77avlkja5EuyObm-B4hSsIQiExT8l17ST4xEueFEzXhFQwSPi5zYYe4e3oS1cs_ZWkupPeo9vywlWO-6nHMtG-JjW0KFpPGky_4RaG5nOu1nbOjiIccmnPeteDcqzmTKje55Ovo4Xlax7S-lKarYopfQ9OiSkRAFAazYpHDWX3eC2hr1eqVQb_R1jJt17TFC3K4i1uw8L8AxfXTgSS9x3tsGBc3C9mhWSBLnDBd_iFX3LxJzQ5q8uAp22hQAoEX8Crd-lalkW2LoP2rDOSTxo7SZLWEZcQooykrUH2q5Xs0_q58kxRGivYN59Xks3mveD02IGGQg3PKEgJpFxGvkCcs3gk7yeeKfbAn8oqmW9Bmd_zGiJFNBlggCtIVFbyfy09eN2vOv_SovUDPi8FmWUgjH66URZrEB9ZqMnFuVpHZdKeI0PQOqUobVb0bTbQiy5wfV2hIWCyuRGY-SbmdH1KVouFLigGYuN8wlgECdHUS4Ifucgy8v6MUoRr1I5VFJWo3xYCT7SgL9cSzMZQHQP_Nd-hWD-BpBrP21t9SHy4FO5R7GZEYPa-LTS6GV195MAJ8lvLzhmx-nJWZjaBMSgISVYWQKVYt30bV5sbAxzfusxbtVxuNTLJkLqFaT0VlW-5GEM0HjJnUkraxzUfpKYVCxBtlSL8_NnNl7XIVFsZF0jm_rjbJ2RRuzhrzgGRcy_rP5hssgfC-Pr8Ww-p54ZB7Qdh8bU5B49-ZGOcXKFTy9FSefgkRVFmdpN_YBSskJ472O1dA5BubfBGQtB3qro5iHrpviVZ9rqxT0dx-LC4GJkAfvbNNm0Q2hrnhhazvtX1qcEWw3-aaxFTgVVhg7GsWpYWe4KrSL56dHRyy8x1xk6iHKudnilNN3dN3tzfxiwNuMwoHwYmWkO3Yn1HjbJi6whaa_N5HbTRk4JYTyU6aoUNBQzftOKD6dMSJLy1toKRFuYMxelCOmfFHUoWJyRtRl0NaVLVVuK-EfxFAJudrESO60odEkS4M3j99Ylzmvzca70JTPWUi7UMpe1Zw7KlpvlO33IN3r2DQoUXNZPDL-OuFLOGYV6hVybd29LWKE-Dsbf2H-62GzGgvcqA9BVHcCKiVsUjwJydDZYIolo_gwsrp4VjMOHn2u_w9JfX1fP8lTNu98INqPZ_K3GjflzoGlPqBb7QJDmRm9tWMOg0TnLgac6vCWX2GQPFKq2ij61fH603E3Irj_uukexXh_r9er0fD82Meg__YTyWe-M957U0kZw-h5B9qgiABTqEEzUYu-v_Du6o3eV67MlKnEhVffBvpGi0hyKZJAdZcTp8gGDSDQV7GMaGvG2G6yMTP3Co4_ZPpIpuEtywvRDWz6oq2ouL4tENznxgydyMk0rkaMNOWAk35LSz5W2k6vMk2zWdqwHx2luw3sh2Jud9thpZc1Csshi-kCrB0q4mbyefsS1uRzCnLc_bwxK_ccgJo_c0n_tM7e3KIDw2xQV_L7goGGM=w959-h633",
      activity: "They are the tank, others we are just the think",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FuNa89Nf7VSszL7-tEJAuduXkaMVKrfC01c875vfTtFyIGVPRft3aphMPtWAMgWaAqPSIJ62aQ_TlwM-KkgcfyPVOFkRbbG8NjYmnjeqNO3NgCa2dkj1SKg4bs2vSBJHiUBFmgL32K50QxrL4J3iMYp3qkIl7RWb9Fm1b8Td7hef2V4L7rzd7KOGosDcwytQO_8pwVQbxjoajRIORnyPgXz-PZywnks1lgNm4okJNzDbDQbDSLeFZee_z8TBcLiMgb8BFtySnVv3fejCLCDc2N6ikdePuDOvwgjmzeTAZKUMY25yX5BoayYnVbeMJ53Ivf0-DRC-kZQUvJDnFVUxbg3T5BMSixUALAIBATmEhSqcRqB2FWqXYn2lCMn-54Gae2rgvLCqf3qUrrdfaWR6_eeCniE2c4IZ8dLiMyYOASRB1ATDaSJAS0B5LN9Ox1wPbK501k0T7RQjvcun6eGE24B_vWEbx3k44OtsvqKIjaKhc2aUJpYVUR4Yj-XekGKPlapcfKghVG39FfcPM_ogHZihNsNuImqAeuJwB6GMndDjmYGanRwtHkUfG2OET4uyRhRPWMi82k4cnD04nEQMJXZIRxd3uIjgQJKaW82f2Tzi6nX2K_MG-gbEKv2YwrkdzFw-ZHZ6RIx11dXSJWlJDy-s6I0EoeDQkO0hgz8z6vFXGE8rjQaaTeKiDfe13HSmz6b4WWbEAz1fOrA6g3iKnomh_dxYCjklocoVAf4IUWTpBx0KbW0J4AEqdEsJQUjRG4QBElmWIjoOMA8e_8AVhG0b6M_OlpOZ4u3UM9p2XXLI1e1WEAzQWfK2mWsC0bRbjoFcYFL-JTBCR7N8jbn51oevTvf7OHWtic-4R2udgf6CocijR6ZbReS0Q9ln2Ki7IFdhkFiAMAOqi_eBfyGqdRd_pu8_jjICjvkOAM3p7fgPfDl4nO7-z17fcX8P6ADo5onkGEodwUR7RnVsGbS48sl44cB1_p5lCIVm_kS57L1EXK6Pz8-to8FwaWrS9_UvrJ5KfIuOeyTdRz60FdJ-55dpqZIH57iZMV7Hngx1hnxRIGsGmLRsQUDEJpDdDz22jyvJPQqEXbghl2XLV1iyEtHRKy3dd8YniRJhsaIrooodzcff5SqK5mBYOvTNiPBUfrFoGmzRfHxt-lWXlHBXLdt4SlZl8_a93AapbSL0jcYCNneXpfkrouni1Pbw9OIn4TPnVYORrTW8oxfzsK71baalLombFkGvzE6VRBNwkE4kRONSedonnw6mbOsJpTj3qN3fzhgkMpjiiPMx1p8XDXtXx-ELSZDcpPx1l-v-B__Xlog28EIYdRDR6NdysqSrW6pa5SUxGwmtGoPSBjGg4Az3dewi0KEV75cQuOhNV2Doy_ZkRaFCxu4AQu1evcF8aTmxXABxtMMBNLs5YGV5-SsNV4S8GzO5Cwsfsw0e1je6C15frd-A1z4MWipqTGhRGGV1Yd2UZAi_mNNUETzDpDyNhoF8eWW1afF0qwMZ4KdS509KBBQBUA84SSMKaCYfjXGk05dW0FMOhkEIbAh3-QEtPzzcf20NbbVC9yNhKTPiCiEA6r-1Npy-AD51mFEsdBxMJWtqcp4DDgkprqFa7ZsNnPPSswEGBCvTg_mAhIX4tB8mHwzVx4X9JOuQP5RZ_ReHxIofk1j1jGP5AgpD3R3eSymkY1YC_UWDHDioj2aCSW2IBeXqBjEE-ZFodyfjrCy26t43ttFT3YLV4MSsIf2zuvd5QhNk1o=w959-h633",
      activity: "Taps being autographed",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FhHxdu7TorHaFOA4LmAAVi0S2K2lW-1jHghxrfM4WZXVKiFNud6L95pVcqFAA5RDj-wGOi96tEcEDzdH0ANs4o2PVZbWoNtxUt0Hr-VKhypFP0CNcvYbt9QjtxOYFlNRSA1vIQLZaFRkhGbTcLTlS0WE8t6-vEP_qaDvB-1-fsliKtPvCZZZI6bVjRE9GZN7FgrlaG4zf11XjYL_94Xm70JFGxurJ-_X2Nof9JiTJuRcCWl1BLr4gimzQkF6fobu0okxA3QGxAB5iVKTnUeiVA6WgSxpN6oPuAwSxMrMtolUoVmE7_mzLU6Mgc2ABc-Xp1VcHmIu3-bnwyiW0JO2haExhBjvGoMcpz88CAjS9a_D51qEoJsOasBYMnQRgcpxJ76ivAOcv3qvdKniIJypVvfmdQQMDOUF8zKFNvZT_h_HBEbgKvWYB1PGsQouaMTVsAriSeFW4pnDVV-WmMr6zsZrgv7KWtn664pPuEW-QapJliGA25uVPmBbkqnTw9a5DdgH4UVfUdmlYqW33G-7r6BNlphvXXbxGW9NyRy-SfvszeqXyYV52TL6rnR-qH-FI3glcTTCGD1EKGoqVyysj_EXqGnSs1a5JkgdA4VL6hgVF8P7tpQCRdJ1anrk6oylMR5bhrSw9eNUNhVWMRc_xIRf_65b2dLoUMqbnJNmOmiEDfyTTWc0cfL2ws5qQFu1-J1wCaBRW8ExDqZuF_w0LgwImFccF5nPuZInmsrUZeZ4eiojdrrkAEvQoN9hxiHIoX0TOk2Vtk8e6aaWx4XT3DIujJYU-n97wgxyK_XjryaSUPfMU_3RPWrKzZgmiTifyvoLwwZHfD5OYnSfIZvtbHVmE0f3bvwsO5LSPs-wSDiYykm3blcVV_U5_meErQWat2HN9vjkxz7mR7jfVyGVkAHPpTWNm2sPvVhRbS7SOjY3K0uI0BnyB8_Lo2YVQptDGMvTkxbkfJVjJgcHDGkmt_SXrFytEXpkAfD9tvurdM-oBrphcb9dKd_DghDbNCn0ZIqCJMiIhAZMKQZa6X23C0NihjH036Abo2gNAhsF-zm_di746r7Oa6ec651emvdC6fSuY6ucDdEe29qYvGKMjZBdl9Y7pTG1z5qgBDHpjTq96qdulAU1w0lmMJ4lpOw2MOv2cKh9bUw4WuqozojOubYo3DH-q2ERbpywVw5SIMCjxHy6MBmb8Hgn7PlOUvaUuePa7O8B_9VVpVWtjHkuU2a9e2OPK0OtF7u0OcjkiEMDnfD1l9C7kESPNANNHRJ7XLESkJCrjXvO_NbAdhmcD8FkAgpqKtaivweotkRFUg-djdqbXI5jRCJs9TobYb8AM4Nk7kewqasCw1TB9N0ey1xsFa62nVhUFnPSgiBr90ZWOPT0yfYGqHpTgE4yzECKwiZY8YOu9mCYvMcFVDXyWEyG-FR33gQNOG1cUFv0nmpVENeR2GhwYd7MlUM9M1eZG64MUopXKAlWtHYQGnXwEM62uu4hNzyaKZU0R-TQmrRztdWPai8MfM2wpITVkTrc5v_I6M3n768A2joy--eiVU41C34tJAq-4S8YnOmkKUNvJeUOdH6DcSMqI2RNgQLkjVvj0BJfi9aSyFKRGTwD1OFikMwo-DXNNd6zjGIcgGiJ5128NKFVr8mK6K1dBKQ8zXx7YBzEjsEmq0UX24iV4oIbWqvzAuzQq8UGkkspMWCBQgFWvKtQF0d1txcs1jp2NVWbSY2HDspYq_b_hiEZ40ZtPEeKO77cI=w959-h633",
      activity: "Christian dafting the Prototype ",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_Fre28WQlIIlxHXsLcZYHZiHPA5D6K9JqwDqz5MjIEz_IKTWwX8T6JxOEMvmQ9QE8Qpv-NH25J8vrjGeWbJLvrTFTQ_AR1bSWEUpRWz_8PGyWlKcw0yYxpr1qwhM28sKWrpXTsu1OzXc7c1AZfaymked-7cF3whh_G3b2uvwMTfbDqps7ScD00CNBv6KxAKHti8L9S3vvU8ygsLqR0B1IuM3qQRtiLU9ow7jIn4Vj0JAv9lKWEDqJYW2rnPfRIEKzTgLoj__cPd18OOzddP6gSnBQAvMumyz_QxPjMcOT22q-k7tL6AwCRdRAFsgLaPNRnqnsoGhfM89XTNcHxN94FdESVhtIbN5umlyJGy5g87Pj_s7gBfpwnlKBtzo_eRyijarT6Rm8vOaGNuZLn1Y2vGAMd2fs2WaNTLO5l8m6Lk0kFSCVrHZRh76mrjn1HTR55DhB9efFcxF23JqiBtOV0zIgz3S8XYlUsY8vw2-tMecLu-QZD1t4KMSd0ZkoK3_udJgJsfXJp3G5OpV0nokWWhwl7_fzxMvh7QCLx1f8VoEtEQqFjoMgRL2xJxUfVrdsnsgFTOc9UbQjAppt4VnahV_MI-6djBZy1qgbqONwlPSHjPzkACdaB71DxIKJoFaKtODdolgLYaifNYkg7EonJTy6A2xp7Mc2fE7oJXG4Bpd5Dgzd1LrNXe81RlJnHzepBLbZgjs5LK75zBH41BrqMJes2EtZ3G6tYA1dzPyMBp24f22ZwwRSDduQDuslw41YR4mx1R5Po9DdaovYyZXdW3KGNZahgm-p81NwMgdGmkgIGCao0Ch5CXEL_L94AB32DqjFtjFfAwpAMTXK_hB27UzCOUP2AtpPspmYS4RDYF8gdY2fBnkb1ZZTyR-djb_3HcJUjoD32HClSuD-v9RKFh8lFuHhk9p9zBU9GUHUEIyaESSsq5MgUDl2Ly31yzh4aLmPp13Qvr6ZSz1G-RJS-hnH3XG1WDtuWLlNf3t3-QMa9VHVu9kNeVGJg9KCEfIKnSaTJuya-NP3jJUqmSpk2M29hQ8EZOLsyIIfh3Tlv2XY9uxloJmDCsSguS208wjOPoPT-gYU7A0v0ytgvkpsNnbZ-aaDBfJQ1jmFXOQdG4707BJP4wV8ZXBBd_bmwAUftPgqoG1qb9HrqPkvWO5XGUuK4ZAKqwb_ph6zRtXbaoh6aSEVm6xrp-JiTfrag0_S3MxMlc902zLGc9IpEl20JlCHrgnjo9ZrVqhcqK39sp5rxhrz7EbdISVMmxXbmayz-6UcyadZhLUVy_UrlZnrJdlO84uRdtbM0zpEMF3Fhx8ObCGL6NgBWMp430BxB5gqz-ljVulwu-_YmxFakmNAMWB82fd2Hb5mjZeTG_rryuNffvGYKnc-NZfOsegZc3nhDjZltyfoQ8qRp688mTWnXQeEGW3RRkV3X1tV2GNDGobMicu01ApD4CtaSGz13Ni7IC_teLEWwQb7ZwomKdf_w7IKVvQV6FmC4dh_32LR9NIWj6TNdokbv7jncj7QzsO8H1kBqy_AF4OBmr-41gooTafp9Dq56SvqJ8qo4WJVCyRGK8PTa9JnaajoZOVn-AZOCJ-E9gLelsuSAx2ynNJSO517ZZX0VxJkVFbVoMQjotOI1fDxg7vjSVYPFJBI37HmGtNC1ekAKOLWcDdih8X5WZz47Jj6cW0E8NPSJnL9KsdlVfW-UKsxDK27FUzcVYRI3ZzeUL2dOfrOHM2xpn-qLlvuUi8-t89ys=w959-h633",
      activity: "debugging the front-end 😂 ",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FmP9tIsib5oWG9zCTh-fjs1VHtVy90Za-RYAjV6Q5et0ziHfdR-I4qLzNwTlGFGQEH0jRgvz25YMQa69tI83L6Vr6YtdAQXOREmeOImORg45I-dzT9xowrDjmC_ZsdlqixwFbdqbI11yf2YcOdfo-omzQleJwf2N3PaO9VQEOrwCv2rBDPCHn1ASh87uTBql8njMDtTslUCjGi5idpvlPwkaDK1u-A-s7JdLpUkIlaJNTENNwBTJtTWg1UWTACM7iDkRfHEjo7vinohx13CMHdiDJ9deMC294G0bNDBPI5FxTF4I-QCiBR348Os8ofibJTTqJ6JC_uMl22akwJt6_pZ6MADkmto9t6jXCMs48uhTtgJ6D4WCwwjA0AJsIr41tJocjzugzTWHUXvAMUFXXyyM-QQYwTpAazs6hEzmwszqBp0jMordXZ3tOf0l-Gdyr-ICljdTzfS2sWgR3YxvycTabkPA_KnuSlXXsB9khI50Ij92KNo3mmJQdDSMJGzLgi8yZf0St9bw2geJz2lvlrcCmi_hDau_DHN-FEN8ISqY8p4-SQKFps3G3AbaMxTuB97BfHm1tKkY_lNbjQpjcVudi0sh-3rhLv5j4D_iKLutLP1PJQoD9K9PLj_zltYD-0Elshi1aW2rN2zpsmHHsTzO6wx3Q1Kg3sUy8DU0BOwFVQRp1WdC5QCYsv85MsRAaAeuI2OY0C6MMo2vLcCLOw_JJTuUh_S-VzXPgbjv_JGKkYLhWpTCYnKc0jy5t2SwUOz8OOIozgLrfpaVIqKe89bIyttM5LN1nNEH6trJWg9HWjDfdjpiRg0D-yEhw86GPEX1rzlz3t6UaHJkTdbpnisQggPF4WbV_ckxQ-phdcMxw_JSVND-a2JhisVoMrie9Gl9-YJKLlH_8v7x-JcwrISaTWJDhkDNFO40XAw1jsIaFt_SZLwfPJAwOYpjMwgIOQNgOaXcABjKx6NO0_zqPYtZn2fCHaihvyIlsdmtlpJrelNCW08hDflpAtQ0uondG-qtLJdjcIzQqdCm9evR9VwU6JorIfCZXE52A-ZXoJVpiwlfxV6lKG1NB-kk5QfQIeJV4k-L43hsn2ssF05bmFAsHPmfqKk-cFn51P3D0pOjbG2r1XUZ8tMSTYAuX9s8oUMEHwBhB8gwwfpc-qqo2digypEhz26FGpYB9jBLZj3sw51M-feNqaDXZgpCoKBi4XiABuIgN3n9-2Ey5Qfg5Aq-aIjJRCdYx-Qg0UHnwmUZMkttjUDQhoK7W4Tpkzso--6fmdkaPdK_thkKnrEMIfKUFDXEBuiz2BXkkvIgjAr0NtuJjdkS5aXQ0gQSOM_zlySS-rVaAC9AfnOl_lbglqV5bQabKv_x_7aqywWkXrhRXWeqxaJv9hbzKhEO7cqhyrtU9Yzo14voC6XRsszxbUg7wX0wOmxDjTEZnLc1UM4OgtfA92OQZEW32GhMTDI7BtIh1Lz_mBQWldPtyNqH2cHruLUz8NNPRN_HGYdB0tGMrHOzTk07p2Ogc6JMwuHE6ox5QXsx0xB2MrAojdcafvkJbYMQ8VSPvQhc_GM24i0yWK-XBAiWsTnEfcFeURJvJHlhVOhBmUaNoDJAbcw-ZTLaMbuoNCzbZfU0Zb0qTGVn98ltFkdrwuVaG8lNMpcVZG7RIBHTxxOaIASwsO99jQY5py7nlIIDtOS7Ko4PtWb2DTPJIgnDm5VzM2JbG9-mgWSr242luSyAce9Z8exT8RR6Fy7WNmXIpx=w959-h633",
      activity: "Overjoyed",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FxtCZF_eB6yobXEQO1GOz7zKzUwHet1MqL6dAWzWqndfnud7GSYglMVU9aZy4-sZCyhO-tHSyvJb8aTmP4kgX3vabAqcQ62WU4QbJdBkev8eDCRorSziri4jfX9Sykkj2jvhLyaZCwTICLRLYbabdOtjA1WJJwibC971JMKMqc4SHUpKZZImSJkMZWqkXvrXcpJh-iyvxbZsZGy0uJxGuA4GkaO0ZbMyVBkcEqubAEl2CgoDpGHZ8PjIlekWI025bb7aNsGeie1Ncckdp7NgI3X1Sz05TmbQpjeW1yfmRuRWmzR6q37b-5OEMQSWfGSXIFgsONZ4brE5wEd1vNckvgeqwKOIzDLfgQSuWOaSgt55N4tC6AQxbtfYoenLuxKQFv3OjPHWWJ0BHyO8SEbnGd2ND8vzI_A4p9ZOzBIM8mG3WJktbgjfsy3bWBI4wqELpK45lARZPYRKwXeRhYrOdMkmFrPGLBZ7hIlmTWSAXsr5cLdx-owdI5U53YwZs-gkTJTRp8lpHIoV7La5-uVqF5Vy7i4RLlaHY9YwVOHJBu27xe_R8GJZS3a6YvG59yP-v8WzcSJIn3JhUKaaqNAv34QhUahszKs6mWukqR8GCoJhkLODppCzGyvjxWF_Ox9VEaLGQSyOcV5wefNC2FG8NSTqY2eF0gr6nZkTIHPQ41foSEE6FWiQLJj75N1DiUBNHz4IJ_r7oGQwHDb4DHy9V3d3t3fax_i5i5C4HRX3w31m_QEDtQBAOk8xy3jt9IZxgLGrum7ovXKB1aJVOd2FiFMtW62IoRTkG5rQfOHDViaQQefLlW4EvXbsczFf2Kn7ADBcAtxuosPEPC1JpvWOzPxkm7hICTb5CbKdYfJmdLBX5JlFvdV8uc0ryh-7xHxyPgaQ7eurfptBE7brl1jYYgNY_qhDDiZ_o2lTfryiMzg7JCtbLftbl5OkO9oFi77E8B3KaCP9cHoJzGMtsME4vUSCBEIiMJHiQaFuBJx-9Iwjq4Tl6gEpu2SndNRS1ru3SWNlg9p1UQs0DsE6iHZMxpswsBxIPIDOUfUtRt2IjKJ-UTWoArf-CGr346lbGlhK2LTQmOKliHDMCnTv-38y4ehXQ1Q3ptCCdeOu1hxXM_zI4U76k8ZkHdpshSxhjeMvkiLdcwduFOGn9Lm93ovQzYFEYhiM1T9IZAd7alDHVN-yXZUQ52mgK_DHapF9wOEEWQtEmWuMHM1RNAAYcPpiLYSfU6bbi4a6J0k088GbXZrq4sf-518u0TsocjwJXEvfbOoHhU6lvKmy6dXOlhhYyOFrhmASKq9IhNG7DoQb5Vw9tBhlvvrbudcFEKSwVPBEJLH0_v-Ys0L7cjUKCa3IBTOo6_jeY7_LJsDMZaXpy5TcQEFXXUGsw6l59y_b6mOsekXEUar8w8pESVl6FYr7wg6v0GmRR4Naf1uQZOO4GmBbyJQznJk3ec6-wlgZUf0yE5J7gkAvU7yGAUdcPOxqQghtQ_FU3_ZeuT44Lqk4E88m2lDY96ie5LKpkUlMN3MWfiXYWIgWfAbB9vFBZSPNioe8bQgIegXxqdCBu5eOQ_QpNZF9ULXdChYbG8Bx-ZpX-ZSZeTIEs9JPFzfIErF2qSkYKY44NRXbDSunZHm4AiPWVaf7jgYVVjUsFybEbY3qZ9dhcrD7GQ-bYFJUvyqpzYoxCHAGncA0noHsg1MBBdvsfHAA9VDbNkb5VpSnTFV8l4juiOvBFcCCnakXYIFFij3c06-vnk4Qm6=w959-h633",
      activity: "Work hours; no jokes 😤",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_E2jAXCjdS2FjRnayzKZFaCUKTHdQexU7yLY7zs_8pHJPi6JYLt_-Z8wTkyAjMPlDV6Y9ohxTs5IHdtrrLKbbWdEBVlT_Gi_cJZ5fow15mdAKjom9mAwPJPh7cPOF7R3vur7Hn6aNkhQDcNYsogtX6UDtddas_lUS0T-CYAKsfbAXebkBLa_pAYmQz9dxdu_T1wsQ7qSf_BFZsviyXkTYyXR2VpXZrQUJIae1PC7kWW3qaZkvb8gqGYLwpyEHxOUI8Yyu_204Csf7gMRgYOEsOXTZeKvQAkxdP9GNXZYIph6DQcA_mQl0BZDFIDWMJoB7eyYdpXC3XldWIFuCzSooc0RCPt1Jg7Za_fbUd3i8YYqPlHc0I8NdYkv6hFzrtHUavd8WJFqaVeW3GyLb5eE55IvhxfMEAirVwycEeio1A1vhJS1zqWNMzm75gPcWJ5wcXf2YPTe2kW23VVqzgSKkBUcpK2LKeZrgbj5eyt3dfIfzSbeCEmn5f4HDy0efa5odmu06WatTAjcnI5uTKGe4-Y0U-Z83ueaEKbV5o-IrZU7RefqTUlPYZpLGHYWJJcKAGiWEVGIK7JBRiwOaKXzbsnoCNmjKfUGlgsR3934o8i7gwOQF5p5WGZoYbKZj8FKsLNF8rcKQozyVNpCIM7jIqk_4h4ygqCAN3h2iA4IEqP7efdjzMpvX7t6gAIwJLOO_i5BcxVULFNFo5jd13Ojl3DwpSdJCFZ-BqUvcTPDbXFUFjGxfxSi-ft3JDp3vvVX24DBLJUIG87WUlUrUBaHwuTzGxkKSkoZ5yQs3BtoFDJ5LK-Smv2pJ58PGjkd7bE2j6F9KXkoJ7mYSz4FweM1w-UdgHbkczYuaVCv-N_tOjz8NW5Z7CnediTCSAVyhXRFsLaQgoGzrFBeOAXLrMjfVeSHTL40_oH_m2jtrJleG1uTl_TKajrelwjVhfuG_949FNzUxMjvvFq7A3EpA-CYbdwOLezUeHPqdtOL1pKEMxHdZu-0L2vk51mAGNv2pinsAKQATjUjZGy6pZTfwvjfpaKfzGOGIP6a06GO8kpeUsnLB2giXYZigoqOSL-BXcj9oZVQfmKNA0jcD4CEfzo3SsrTtO9sOISIyq9qZoXoMPI0CULokCJkkOGw3sQel37ON77BwCpHYvPFhrzrH9RyYBtJbkEBZYeCH5VAng9s97_iZGtr8uZo0ooCr3KHY3yyVSazjLi6TCrobucB8NOxtxIWIXNNH-2fS6aTX3jY_YhXJsXrECYEpZYu5n4LRahhmd0QgW1AujFPefHrIKBknp1aeyxfYBiU_V85buRSxK8XEmzer6ObjcCuNRjDPZxoRmqpdFiTyWcCEpYNkOHw3qqymHexVTMeAUOFQ1OUYp7nH2ng97qVgS7qoC3uAiIA_9BBHSxYiX-b0Y66_U5mzs7y_qcbo3z-F0vn76HjJV_E3WO04e7IQtu5BaAOySSTcjZjapCkhjfszC6cCNotnzCi41mpzeOhi9HgEhD3EJn4wjSeoiuLjdgFcPi7LaaITMgvMdnvofDwTauTwo9aPHoH2nU4fwEJHY1VwYRpPnn3WrGCJSLx7VaZUl2dyf0NO9kL7PVGnd1THrlUS2iMV85M_Nee82I7LxlaxScULk0Z3joHBgbfSt8mtukak_leF7bSEe1vnMVYER7awy56TD1MArKnLIHnrA5fWp72XBF-dESbGN6JjWSytPT9cOBt3TgBNfUOxnWI-f48MdMy5mBrlGTXYxmmo8=w959-h633",
      activity: "Brainstorming",
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_GoOxaq3fVbXLDzkcHxg_wsGv58Mv3Gz4f9j0gDSvr75xv0I7XVbLLLm4jPc23NO7pNxzFfcu8z8fWfy_n5ZAda2k1cNyyQffOHoQ0wb2wPVHpDDWyZEu1gIOTwtsISeCxPy_N6dbNnWHL5FlVbcesCFdy-UmtTf1JPo1cA47rPvCw38CeOnHnv9cWkn1NKI18dRNi9sHgPyLzjWc2nb7XGd45MeDpM6jVPQraBkZ5xboM72QcCWIWjnduZvFw2ljt2ikXOovhWCShvwZC4jOUDU2ZmqDOJBzzdIvFLQIJLxS6REXWAkxlqwJhV1MSLrFZ3DY4S3q43jNkuGVYKjhdbfoNnutOAVQh5td0vqe-aH03ozxa1aa1wF6uatcYzkzwdZVEN-fZ7yf_LlkzVus4JhpGWdbdw2a83CHvGmxOJNOhmFWG3lJzP1ayiU8S-SRBdrmSCICeELQbEW_lGjLFf9TxpCevktBR-jyzXaPeAY35qzmXhF347ye7TUNm4PGrm34uH1_VXtexcDPXkyZcQOOKSDuJWS9hqK-6rCQJUKQpNLbw0uxzcc51hhjoppLe1IqOobmvl8-65zBpkeDtiu0QxRftuK9qkO2tLeAHW59yfgbvtF-yk8Y8tNV0febrscqYeWj5AqpWZhwjQ179EEr3SYfCsdM093xV1HXL1n8XKla0WiYHUAclmI8psVxsqGA3qWCQcCrkZp_vUA2vDmUkI8pddsPLYPIHQKvImlgGdlXYpMKNtg-J_mSkxio-Uc0mPnwEnUC2NN4aRZQu3R7fma-NRPXAuQ9Puxf0bBzo4QWeWlIqRLiFqGfBa2h4eRVWKjvA1POnhte9haF40ZOSIuwajHfSSF5o0PUJwrlr1krzONV-_v0Mx_jW9XlqUI6bDEYMdfir38dTEVoM2teokzM6t3Q-tWMZtMmtQ7efXLf74DlMCLojE1BS_aBhJC8xwEBNofQ_AD8ktbyjLi3MSo7oNQz-6o2c_QacZIRV7i399DHuIK5DEpZNonu-6pmRgolhQlrykcoNrqaUBKYjx2-PSppoJYejBCiwa2G-dgF6st_0ZG_7o9wihnGLdnR9_77QzHK4uJqH5NO4wEpGp1FevIOqP4UV8gRKY2f7ujBcjZOiSMGS44Is7Oy0mqsyp7Ll4nRB12z6CxRWY7_tii53O7qVungIerDwXbh_2-xuJ2r6SaY8hsD-Wr0l2bS0Y9Xb-BiUs24O7gYoOMQGSxVz6Z_6wkL3Qh2W-p4Vuh9bT8bLBzAHfYvkP7Xp2dVp5PbCThba9AQSvqNy0_632i22v9CPwjzhi0iWqZaKJZp1gUXRgOswDz_7NtG0ZWvbZbYb3hT4iR6ZV2p-iIPZV4Bv-JHxZbbCYr5iUjQaNZx-aIt_WoZax54vMIkm5KOh8JmkJohbBr1osnd9GkO3584bwNDrHfRPkDnqydMdjpn4FTXNE9_Y4zgXdgrS3o_2cbZ3fyKos__7nNqYiWorN3EeBgK_cn0FL0rIfcdtkiuvVIe0uT8a5qPY_zltne4Ujba3QP6aZ-mFOwwJpbn4Z-BNq_yKoOKiRl1uybgGrtm0IvKZFvZ3BW45w_L4Y3xH5ilTWiFETYxX-vFIakH547vVmfCzHE_ihBB_SNUt3J0fWVqc3TZB4fjOnHtWD35Y6iVSYBrwiQmmn17wUIkp4RuWCGvQ-A96dFd_8xqZMIheZ63pagAdnYgO55MqOSnvRVY1sRIjqKjhdr0CbtxKTMCxavak=w943-h649",
      activity: "Challenge 5 getting hot"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_HAlhHgbWN-jM0w8fFXjPRZPVBlov2wPQvvHc98eUNCeM0u6B1x20mU4oOBuh27QOZEtkC_C9T_lLxhveTAiQ1FYrW59F3P_5NILhD-7RBimR1jrsR8WVZMWp9En0RFAwbDNA4_2wpg9pD0iAB-mBBpAllvhLzjTzaU1Ejw9497H2-2pcEENLqqLw5YcBt9E8nbnlYh0hqToR1S4FX8LImdOI5IvOmXtoiN7jEKAfb0XWuQk0s7aYkEJkTYxfyDblWYHOrlMDttABdxV6tnogo7n8ZMzGWeLvDNsoxuG3iFx41-bcjafcrjFknm2EsSUXBbF5RLOHRR6qeQ9UusGbHc1zJjOzVaMIOl7a8CgMEloq4pMCzCO9gSWyKp4lc_NslYWbVx3fXJn2cx5dEFJWyA7BMOhuwvr8RiYF9hcLB493MNa1ajIXezWNcXJFbNuD3tFncV6o8kjx-ZH2uQRI1CAKTBt0uqLhMIhxVLHq2JBdiET_x4rHa6r0-I3pCDZsjvcX_Qk6DjroTe_7-8pyjheAEr05pBPZ8p8MdWbwPO_pdcC1aC6nv7bIJaosRSz7GtcHenSmywfV5XA5OgN7KvLaMUDxTcQopX4PRxs5is_eKB_KNGo2rxGZ_XByGipB_LEZLUsFBw_4KJXoYmaqbM4EDem9E82n6hOvxwcnXi6nYRrH4EtwQonwOUb0LfQ4ye5IssDg03daESehyy-vZKKeRSEgtuHTIjC9JgqVpBc5rY3uDhWps1nhhwjgqX7-y5A3gvKZCeGK8-GDlBZVAYok8Sg4nxhoNkgqRPZsca6vzGV6S7V2ntWSzAcAHonO1Fdqg2ceLXaRL6Hh0T2UlQI_fOLoJTZr4pyMuHT1E88BC2rnpuLsO-MM9xjU-TBW6S-xylrxnMNpbORmbZDYck9XTVBFYc6KC4Fn3fBusT-gYCkO5xqHWKP9ucHfe2mbchOJIr0Z29l_U2kqfP-MsMdW9tvPvYiKgO8obrvW8G_MWL2CSza5tIDgHHTUtF3xVy2bxPL-NX-mP8-ZPmIZQGRZuJ05xFJ80rQZkN2mG3ENRr0yk_YsFhFvprEmIOQWG0QcxTVTE6zyLOSeLvCXpf2IMuXl3ayA5cUfABMC1BjW1Op9OEATFM9Yd3O-Hxl0npb7Cd20VkyAE9jjJC-OQ-xqFq34vSocz6m3UMqQ7jHp7ZrB7EI-AOo7P3NbtH4443DCdWkhZ_oWwqtq02ETfWtG_HIMzDtCnNlFwyHBLFz0K_Rx7k41Vz2-2dmCHTyecl1HHyD7bTt6xA2qmLuXl3jwAzxnHqdnLvEIEFum99BBOk-LHo6hsBXBTqMG5akr6-PbSNgGWmEGSJ7q0s_rvRE6ArDRql74OjhqgFOoimtTZ3QwAS4kxEblCXyRvoSGpt_bJVi7cBUNu0a7uvRxasUwmQ0_f6e17E4otsfDQVdpgz_HFIS9QLNZ9ogmYgtyjV64CDNV5MItNL6hVkaZs43H-366c5lbTyYsRfU_Fab9cCF5Gz3CtuhsTIgMsIp2q67RIfDRSPvnj27v2e8aB7Mg1_RjB9RZ7iWGr2BQ1ag_rtyjwHh0Wkddtqr7u2ywR-xQ8uPZNe-MeAC2GjnO9Sgly5H4utSwzFU8Y4pM8AH1M5iJmHht229KkCw05T0clmd7wsEhMZZ9nDnejEKssgy1_pFJkz7lJrPdVoEJoBww7SQxUZ2ySbjRl13yP-L-YZfCru_RA1ihz3v9xQzsVXE8oxEWeEr8Vu=w943-h649",
      activity: "👀😂😂😂"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_Hh0J2yXCU7GNAEY5Db6hhS64TEeZU8PoaveLpGyQBTN5s3BENo8_4Fd9AfER8UazZzbYWFQrHOyxIVNt04JUiFOCJyGIO8huNRciiJtKoi3UAaU8REdlLph6EosKKvEdw6GeCRPijTO1yVwjNsLtwt_bgsGWrmO-RTvYduNrtnnlX2eDy2sYVGhnMfsDB0t-t3ANNjypLoJb4585hx1fCjljH18V3PZ9LtI43VSZPbrRtNGaE6PBSVwsHoNNick5pj9E0NgnNF1jk9-HsL5lmz2BJQLwnyCro7O122QGl-gaNHES59ZKXJIsLIXUsVoi7USXNUiNujEyoommzkU2NHNbyIEobsIEhNP20QVeLOmrVyCVmds68m0VO3NoKeNuJyEaDRbSHMnxOK0LxrkK8tXavcABMY9Ier9MgmcHX6NsbgDDODR7DQBFjmwHpznhg5SjuslDolKbV-bJo-EZmaRdooN7p2uv-42E8Zxg84DE9Jlt31SaSqhioIKIi4VJbzBypV1n_KUN6MBr_3bfxOQvt2PqPoMxZnUHZzOnY4NCik3iXfG3TAP0X2f8BPMq0BnWx102UezcwkrK4MSSxV109G8F6dGmt4xR849ZPQRJHE7hNsY0_iwZk0Zpj2pTZPLvHsEgiHFkFc5yR-79BN1cqXzXB7kSmG27e_cHhVZmlezUyWCEeCSv1Cnau_6eduzq_s0Hq7VOYU707hzG5DPFWxep2d1Ql5zJvSmhepcpm76Ir8TgqYeDVdnnjUvvvviIFs5jzIlgo0T0zX9iKXI0GtUfLldRbFwRITvk-OkvSkW8ajZ9nxUY_siPrl-s0JCfUOJzUCeMNipoSZUDAPh6oHIg_PYopzsST8d7xXWEu9W5q5OaYbyPCCPMA2WIkBuB7x7KV5BbA9CpwYYCn6kf3ZRS4JEntJ9JNwXjJfyUQGVHQUgOnXXgRs4bi57Qz6h2py2I7sIymptSzrkWNfrWtp2TMb_VtGJTgKQf9HJdkzC5_0KDJGANMdRbs896e1QnWUkeycA25QFKDZaiM13WwT5W08b56ombAENoTwn0ht5b9hnFEiMjdO-qhSwLG1ZeDnxo_Jw206BQLtGpOmWbH1V-6D05BnRGQAMKgdavjNJvgbPs8IM2klm4E5nkHpEXS7eKEBheDhM9g5t9dnQY56NV5lhDL20nTYWuTaKN5E0QDSDeLz-VqqWRljuLqcgh3f8PbPpWg0uLjPSRUaEhSdTO-6HCYmSspGv4ELguDVoIVXBRIwFkopERENA5alMGnj7-sK260zBuoERGF5E0XHbGkDmIUKKlAka1mGygGjHP1cDjOQnYiLb22ttrtF6BJ6hsm3wdfWoUVClQPM1Ay5IPruickl6X-keuDjqflLQeTJyyTpy5gUuNNXjnV0Ch8h9Om9PvlZmhOogHISk3NeVElsk2O1paAeCrHqw63lR9ofF9_cL92P7S6VioZK6xCDvtfKI8uTWwWdTYQAVfPeTMLQvc4qjrpQ6P77q3yoQTWOUX0C4dH9qbrR1hp2jDzZouNiLzTDcn63qUcukhEuTAn6tsdglt_9fG0nNWhW3QtyTpi4BLcAvFEkEB17wvaT9FbOvnghGVL6af_0B4rK4AhtTT6MAOP_MWIAvm_XmYOuWwnOpYDyn60GKasAbgZJuJ_qRg-Y3drmjif8KytaxTt88qbGzqeqabujXXaWO2PEW9h3D_nDHBpgD0ibizt2960vQyhdcOMgwtKUD-ftxkfD1DDk=w943-h649",
      activity: "Challenge 4 completed"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_HXc9WXmzKvaZWPig0zq_4oRbTCdSGV1sOTsYnrlOjmkMd4FkW11-_iIeLVVBhNFICKG-HI2LKk0df9zjdg4Jc6Y3whfvBDd0Ayv17WxFtUu98BJTiqALAnLmSO6SirSC0kcN8Lrr2lLNImxmBFBlcxp7ztwabFRv8uiqBiyIZpMIHZK5-uN8_ruGx4nnHqJzmp_QhseGYPxwhd__hrsBn1TjOSwyj9x9RBRZrxIadKgN3fjH2ByQ7YazpEd--WgmHpTtULtOoXQtkxALtxPh8T8JDXdfoz4rQJTnVBapUzg3h_p9Rx9vuUQJ6eCnWDpAKFcBBWiBLqW6CJaPQ8UDg14UaMJUZiTpXCDIyX0oOBS5DixW88OTf0XI6rGtAI9Mukk6mqoDZeTVKWpOZN-c1BKANNOdgWk1yFmV92iQAVNlC5bhodb71vlYAGolB6QSJHYyc5EmMuTYDlPYfcD-fqYqs_7ngKkzHsUezRxCBUlnPH37PUoLYDTGiUMe72J0eMcEuoMB35lmiIOwFvb6huVDwTmZejnCAfRPnFDFYcGwMEd-tDL0lWd4sw6uFK8VaW1QYGfTNgC3jtMfqbasLyneMiKpMjwYhzKlfgVtIHETpK-VdN_cJrvZWy_usG5OwySdBks1tvQjktBqA7plPZctRO50SNa0BrUGpTW2SfAn3cPjumKAQR76c5W7Pymuh-W1WAhEnJnLYoi8GsUkneGoc0814dy2kog5Tf3mNx9C6KVgJ4LkvuiDGqNb7bDFYScuBphnSXUNLRw-D3-TS-mcKPoWWK2HWSbFVjaLKHDcfJiZEvSTbDw1SC2CD2RoOtBkxXNo7Ek811rcFAvMmeUzF-6pVK1Yj0IyxN0gDC68d_hoam8cWN9yY6MQMHX_vmtf6H6NRv6PSiTd8-GTqQeJDj7S3ZfAkcgP5Oj3E-ielEVho1jQmU_fmf1i-OAkDLSij20pGED8VQ4T9dZ8_ACQVgNVxx5UretgL_MyWDgFpRdTecL37OFuqaUrUjlgN_wBhCW7CLJi2wqqPSHbTJziBRSMXY8njRv8lHBv9O9PBTQ3NupYpTQn9l_tokWaU5YAthOR-wAALZXVYlS4wJUmr9aNatWji7x67ekLCc0UIZAOeDHRiINL4zZbu9MphxZ-NfwVsmpxjNg4gyfEPT8Evn0QsHQnOy2SVX8r4DHfVwUA0rFVjHbT7n27dltlbdOjgPzgBg_1w27wca_o0baNP3RuK5Yj3lfK6ja9Yg9mfblsEyFF_cvfECFpuLhbuE1LVIu00-qyNa1keLeSrhYmu4lIMy-1agUdawhmunAz8DOBRbPaaBSU5b2e3oS3Rw5e3KTeC1lJyHq85BJ8dZvXNRfhjSB7zmRghi_sbwSsbrxRNEoCwRoFA78W06eyW5nD3-Uw8KbCNnEFPVeGR15PTgJfHUh4VtYfYgT8iRtvR8lyJszwKeomDpszPiyMUwm1wqfFOgdWBGpwDvvWNjH52vsELK9aPVcwZ69sCirCfeMR_3KHunCbtL7Iyu7-PoKuMbCBfcgALDMvkLTzdZhYFLSerIwg3QpMIqivJsiejLH7YrAoOnWO3Qf5zNf4_eVDwp3XTTe7G8Mi-x_z069GLFE4XFt43RRaRdG6oHI3C6Znh_jz3mU3_4UBo3JGS0eAHmFGM1lILXehwkMu6_y3MeIQtIxzVeLEWwnO5Q8v9WC5wZgrH06Z4-j_FIoOuVk-7283rhW2r9EqkbpA4QKizDYYSAbtbh=w943-h649",
      activity: "Dancing session"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_EmXfBB_tj9keu4YyUMt1E3hsMJm4G2nC2GVLTUuOp_-T8pHg-b9HRJ9vNDZdngRHKB8R6NxEvrHdcrg5FphvMI2J2r54mpRwmxmnkwjhxdg_0CKlm5pvrwp17Fuvmvxqjdzgwza9_A_4D3JFfy_nRhYh_fQYuYRW5-UrxN3qYVPOj6WTeSPo1WSAvtevJT7WZlsxyi9I1jxUqrDxP3Q2Tv3AivONqQBo28lfEuEO-oGbcfZiRNLQ74vXnOkUfPjB28XY353Uywnc2zv-d5WBksUULPAxArBMzLr-6bDzOWNOF0bJuXmq2XPD8t7G9fzUuVLjjr5lATRS4G1sUkjvy1ek3ZAiaekTf2dvQVgRVz5vL_oBT6ntLWph0a4uHqJ3TCRGDpkPzFzgHMWjJ1vCk_qcA5OPsw7ROnckazr0lSCClNmXb3a1Lv4vdb23o5czzaq6POYtIkS4PG__flWLhxtayoGxefSw7lVx0nP3EwuRg4j2IPuO-sPHkdb_GISVlgKSRewZ9Qa18SmG7wRflyH8dX4fXv5myQlWqWq8yfUmYxEj5RX72-PVPJMXHs-2TUQoRt9TCTennGy6LHcE2Ccfwe5ngINmrXN0jJLS3YcIHT5nz5txJTe5aLHyGV49hJCGZ0k2XdUVFI7eAFGvt97E9WzqfR2YiLQtG1wpFm-efvR4T5rIGnVlTehKfWeDh3n8j2kzXjyuBJYszUVxc0Am8uqVdmiSW_CAjV58OMarBHvFV-e_IRcT3VWXo3j0OPxmKL8-B5b_QzQWpXOHv99FdV1SBrzfGEXWFTo8Ay3-G547Vfgu4YJAyQtLDAiNo_yxQvMCW0W1jHNtiEboO0HJE4rKndqLHcUcpfyhEfbDXI85XupjNIY-mN4-5M4V_w19gfcR5fdoytQ3GHBcPBcIV17XLmauUhLg54XXA_GJnRwkzi9O3fzkUwM6URnkZjmEBrzUxC8FMecIZ4PiknRfYjJlgI834vpANEnpfToHTCjRNAqe7uiQdJ-JZpv2npCOaxuGDElwr2gQaPA8mVM6TVw8MNJ5Nv2kR4kCxvYUGym7rBe4UUu6On7-tZRvhGlTTjTy89XCXpm0IHR8r0Qj9r5SNFSnh1gyUMMEX-e5c1taVO42w5IpRxlIrdMUD-MvU8wUcZckLsTbTfmtrtSf_gag6BHhf8dFdUDMzAkp-Uy7QWRMBIjfZFFl5iEm30oPaFL7zI8VtsQidRjDUY1-JyCgvvKwvW7KtbHYjHmuGxjt-SRGwdDkzaYj0EjVWC1hiRdhIUKdXO52e2cWprWLQ7YREgD4zwoi_wtMac5e5IPX1HFxVVQfGIl5jX-mPSjNa1TDhnTyVGUmqzcx_aSI8upgjZvj1xaX0c4Us8Bzr4i7m1s0b4vn3BNN33tYOLhscVlE3lMpp2xXyaGZyH_stf-pRKccH682eUpuh_v0xLGpMqe1OPSn0t5K8npd5Hvc8OG-zc9cXyKNjp1W3pQ1zcuz9kycabV6XNQCDoJY9PyhdzAufKHl5rjJRDMRq3Z-rVUbxVW_zjzpFUMZ8S9YfJONq9KBVkgI9YAZ0vBXKkJ6fujdxMTG1vuMDslfJwhQxVNo7cPw5M41F5Mz6cN-aWxgpjIsIQQX7DfzXWr2PT6MXnI3Q88Apri6XU8XMn01gK4Ec-eyfOO33wFF7dSaCk97xnT5JgQFV_c-DvjR1VrKQ1ZK3ot6ZFoagsvCqH_YHSPxNsOul7wo_jcyScGbc6tm7MHGDX=w943-h649",
      activity: "Challenge 5 about to begin"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FeQxIRnbYo4vdfRleWJzils1dYwnu3KQZBbZW4B4ZXnPA4O0JfBRemUa0DWmi0ukos6x6kd1UW_BSt4O0ad_eN2pHQj6eFCB9QhObbxe4mlwjxEPDmEQ5Kad1rtznrIYteQsPyanQbTzeNWuhr4XHHvWjWWQHLa5KQhv9W9lt42SHGiw3OEuJdTVH_JGhPvKou-PEHyaTbghMI5ClmJ2kIQ3tQPWP2wERzEO8XfnCL_503dNhKXVRPZEdCvwynuNmp5D0bF5ZfrJW5O1zrWN7C0o4R84_SA0GRqkY2g_XMzkI-gpLic6HDOvzl-v0SZVgKo2QFA9UAzJbJvFRPg1fxk7ifcZh1H3IAk6HaBin-IEn9h-8uH009W-BFHj_HzpPFA0HvNS_1gPNOAaY9OcIgGZqOQfOU3Iidckl-j9kMp6nqQRenYN7M9vh8VqSozZyc4QS9oS0jbdm6zcODkFxyjo-yxiJAQC85ERjHfLD-tJz2neqpH8xM8PcMy7116ZUvTGwrCLz72OchnOx2EMUnwxb1lZ39R6QxeFbmfE02FBS83Fvtfd7cDlI76oshVPxPI6IJcT4WCFLSbADvYqTZQim_SqzaZixlh2x2PdkJAr-vzZLlqq7FoKlFIT3tYRMwhCByI9Zcwg4uhb5GXEW7TxN39oTd2QcX_MmR67CPMDTAkaiKEw2aTpDxhmOX3Xsm6y5kacteBGjbg8QAiItnezUU8pS4GHxXNhOANe_9nSEUHoXhVQuE6ELOhDOj36VscR7XuaT8D_Po8bhqRnO0v73e0Gk73eJNLUA-qkH6SNkqisGSHz5lzO548sFa6L6ORI4heiJYnxJn0Hun_JLqyzaweLkBqeYpmkvSdXMxyy2W94eEmBI2cMH3o0iUHvARKClCAPVTFU4oqK_3dHiSIey_t-OizF2SGBsM-F6PK9yVc360Aq-bbXQtGrSbuCa4HFxkK6YPK8RxbJR0vBNtALVHJnwkcyEyVrHe3zujDyM5R00oZbbNEHAd35mNuWHFPTcQqpKyuUBJiZm5fpwaASNyAyt4-koolsoY6xMcCJl3WSspuaAIP7e6F19FVAkrQhDdpzAxzbKRGdOraj5Nx_3AT-oeW5-m1Pb2iODOtKVK2p2bkSHzDBa1HE_xzp8av3zRbJiZfGooXasSseXaDWkGREl5wH7tOoBqSPDIJHfYuZ5_Vb2PKM8KSBxVbhXysRuEsJZB-UhaP3eatvGVBeiMqcn37JjwfxON9oxh4nMQCPRhDBNwaR9Q-4ljuoa6D0r9_GltGmWzY1CuAXXyWXOpfT7lsydeYgzUJqh0LO_NmPGGvTdwDrOlv7kCbWm20FyrGniLCqXl1GZkR4EVDZ8RgQOtC9mN7HUF7eM_rDtU-2awnw4M8GRkkqKyO4-9V9_qEPDoBLVQzLr52XD5-Y3716btWlV6eeYQ2uzhcSyRtA0Qf9JqibAkRazPouAPKXVSGTVcq6dyyfdnHb4MNCWxJlqDnI0EiRCh4NMX_jlYqMDPOhshTlP4TwKFHwtFu-suI7jcSnm1pRrTmmWWOzDuQFIriAL4NKIr7fuBOS9T41ZCop8eMB2o11zUK--iWBHAw5fmzqdgGmgvxM3XrxGrwjxD2eNlIbIAy3siWRSm8_d9v6OyHgKZSKdkyLlmRWMgHGJjICLJxxnh7j1bl6ktIKRm3aTCOAsqpfUAGHfHjpcXrikR_tzrlvjha21siX8Qdb5GJfaLSor-q3lKrj0om4eJ0Sw=w943-h649",
      activity: "Richest member in SORWAZINI"
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_FjW_SvZcPP3q_VTu_zvM6k6MwNmOCeAdqI7KzQPQNQ054d1kT_FHpsVgbKntH4sWsfWxR2tIlHajSXtsGBNWm7V41zJY_SbFwez-zhMw7trRTFyqg_0mOdAw7dNbgzVWgBAqBVzENXTcW0M5kXgpCrmkTh9FZWU_-qUi3N4ius2pTSOcuUvbWqiyxfYvJhVAV0GW4iqNZoXkB-IRKQOxaAbCp1cfG_-A697J1vyMJkHoBkMckg3LSjUV7ZQmgLiEtWTP7pCaATR66OBHw56awr_0M7GRsAdohNVscE-0C1WEtLXzUBYr5wDq4koKqdWjpFDUUy_evtgOEnZB96qfL8jGZJ7QGbqh4d-mgHN7Rxd0IJZcGUJzrYsA-aACxCxXr5zFs-Wa41uAK-xvmFp-PVIQWaIo5qYksiE66o3-X8ZC6WX8dtxHkiCOlIam2Pl7TcazNn4Mvw0103pZLd5PkuV26BmG-KJVOf7FKOWk2Dd5-JpICCHfTKWV_Q8s6bzJizjEllBSfjFjSBqNjZLfldjPyBaf3bq_yFzRUj--tfksQYHWoI4UuCfgYBjTzPCZFgRzp9INKgEz521GKeRWblFHtqnmfYBLr9C7xkG-_DEV2I2kJLA18yCf6bD2KqFXPcP-XyV2I66OmBpZCKauVPri9b2DS39iGzKhlFQMVL-kL439kxmmR-VUc-QQds5c0nGP7naZK0oDTe3iABeASa_6QYPqF5Pcu0p0T83XY9kmnv4-xKVNg94MrOedU9P298snsqpHmaqVLuLLfmt7gdJ5kHdf-JBtQUtPyZv35vCvqe4bVaKW6rQOFRtjB5TWSwkxFURsVMR8vcU2dEexTtvHFBolOhn0IsDNj71o2a_QVSZSIF1O-tRR0oYgXSMbKFyUukja-atVjc0Rswf9qnsMr12O6Ws_2yILJYrliS6x6QJRNtBqB4-AaNpzAAq_wvfHK0dAsDiIgRT8O2Di-mvQ0izvVHrILyXCoBO_K0SuH0u4ctnZmKXReQXYA6AyIZNMRJm6lSrMRrw1rCvRrWU8IvSSg42OXmrQWlQmBeIYjEFR6cQ3RACUJpFwvxFDLBsbskXo7w8jALqV9ECnZAUGzdMtnn9A0UGn7hUmoGp-LBb_ycd3hUz_wZcmZUNKZYypHl58-gm94v_tNfxnxQGOHhPfOy1wevLk0bk3HY_T4yr8lh-AgKrYxNVBtbTtrtpPtaEJPr5Es6lg82_4Oc-aE1foXsXpZLwH95kjqdY0XAiuPjwIysxU8ij0w8Xd2fDDQwMc72yzLeo8tE6r_87SbRKydSxNtRXzbkUROEHuKu9ua1HPkCJgeSyM6T-sqjE8z3GOJRQkzSS1oFUoxPMz52myRuiB3KzU-W8rHyk9CHVskSzjIlHRKRvJ8ckS2Wm6O9S2afJyOqYEGkm8PrGsEPsALpP89ZJ2ABo6FMF2UrbLJbRBXAULqYv9W25rJD4VgFwJxj8-K7IjPAYddYwG2scPIwldPtNPp2ahUK1RYUxIwE6LSxyYpDPmL-VKeXUgC4RCozrIsO5wSE-J3gjNBUETgjBIipP0A8eZYb53G-nFAaewa0HEElUgMVJqwpDZ765a7s7Ouf3XU13lZw9DM6P7KWSYu0hfys1Wws0KFWPVeN4LqKvTYjkdiTaNZxGR5XDXu0MxsS42GE6FYM7PDtXKw2e-c-opAf1MT7Ga4bIDCLynauV2qbhCHxsRxe0AwNmGUwhtEq0V1OQund3AuH-Sf8sHDS=w943-h649",
      activity: "Help lab day "
    },
    {
      url: "https://lh3.googleusercontent.com/fife/ALs6j_G-TKjmbkyMLz8msjd1VwmSkP9exhImnPcOYC56vJFPqh7pVYIBJEP5r6mmQ4R_zilt_zdFdWVLjpYeGAuySVAVauW-nJB-XE8vlHqRfDhTHCSPydveBjSayamu6rsYPK6U8yVQzQKv8bBLl3dHaar9HhuXchHZgOSt1p79eapUvpRQwLKzH98Ps1dmp4QyJiSKiy8xdAq_iD8XoWHFjM0UOUdbVUQ1rq_uKRCVL-C0-5038ld2HCti3xa7vLvnCApMmLDcfk-fHz5KQCnkPFkjzCrxiuXBYjWIzlJ4UStvlyzrWqIiyLmGidV-g6deqIw1-reyJ4uy4fvuCpyFeznE716frxTjP_CT5FOR_mNHCx1N3pEic9lrAx_oqjaJ1TZvLWM1QatgaUidWTwu5dhICkCzXzQp-3VmcC-qV8vDPksIL5uq9S6pkOdXofCuqr3DKjb0y45QhrufCxNXwHpAEFaATXXb9aGSJmDVGJFpayBWYU9-_MPY8uSifF4xEruA0iE-m8ZFSu_wejN5Fn9sPQloOYA8MFyyGRub2XlvP-qn62Vz5lBcpWdXCAuPuhHw1UjQzsI-SFKYb1vRErsEmPxlwDnPbXTjX6ADq1udbEVITmSbGf1M17TnuzUMwpqnJcDci_UltTnKgpyZJiVSHmvlz-Tw6MGXpCC0J9g06VquaQQ3UL6WWQxLxrMknCPRAKUQI6MCNzG1FtuUXRcNzK_ojwqNO4xBNWEeSHRK_PaAUqWnPJSDvLu5yFkxCzbLppyqP_Bq5awwJMRGtPIIGr2NLaQLNMEHyEEz_tuSuqO-mZxAb8m6d6exwr5gBJGb_5AxEAX1Z_8ku4LbNeh58cEdyseGcQ3pLYhSDXWZX6g5Fab4YOdpspHVgX-JzRyU63QX6k5P-aPpQ1dPAP8Xy6vtFrbRfUShhn9Hygu1ZsSAfYGxyXJKPGYnplY2Snw5M70Td6hq9oWl4puh1-1yVNhYhuSK2JcyMY7g8_xCPq2VH_BHuaDzOVGPNKxes40uuR0WmQw54ye4DTJLQO8e23nRVct0-_r3_FHxn6dNi8FRxnD76yv3E0lz6ocFHzovO24EzWEcUFtZEK_bn-8Uok3Mbg4ifjk7bik5gnNsvsymgrijR0NBXRQv0cCrvJFcbjm9N-ZbPclp53y5cfp_Tuh3ppB9IWU7m_pkYgPpWs0Q7JNkWKAf2twMOS6d_CI0iS_jJbhfom101MLzNJKuFKlFR5KII4rxLhfbo3GCbWNA3i4BLKHWlE8eDKquS6-sqdVTM20vJK1el3ng8j3DNPdpBY8Hz5GfYlt2nphdaPI28ttdpWpxEdDA7fbh71dJk_ztJWxFa7L1S1oWcB79LOlyAk2jnucQe404gYzuVmmTLfk5lb1XgUpm7qAkXvRO5dK_AwsWsmPbL-Znf86RD7BB7LYsSKCjTrECtBRMfVZvqoinBvVld7RGfFVvIBBbTH_qfs_8rTtghxH9HnVwSObE7UpBwLh9gDKrJPpQHXTdDRXkJTvwgXHxffjTTBS6z3d-4wphcd4fJVTjoYoO429wrot2P1DKRclKdgxKbcY40W2o3hc0DDGxGSVyU55Xw3tNswBf3s4RdZRPPWe-0Np70iBfCdcxadCjid7Jf6Im9O0txlfVLI716WqqB5eOa01CXm5c5wi77Ayp8kkjsAYzyOeAjDz7ppUXWlHd7mvmw2VGoIU1dqouQSsjfoA4H70ox1dq25k_iLAa6OBji0fu_RdHgGYD=w943-h649",
      activity: "Brainstorming again"
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

// Faqs
export const Faqs = [
  {
    question: "How do I purchase a bus ticket online?",
    answer:
      "To purchase a bus ticket online, visit our website or mobile app, select your desired route and travel date, choose the available bus, and complete the payment process using your preferred payment method. You will receive a digital ticket via email or SMS.",
  },
  {
    question: "Can I track the location of my bus in real-time?",
    answer:
      "Yes, our system allows you to track the location of your bus in real-time. Simply log in to your account on our website or mobile app, go to the 'Track My Bus' section, and enter your ticket number or bus details to view its current location and estimated arrival time.",
  },
  {
    question: "What should I do if I miss my bus?",
    answer:
      "If you miss your bus, please contact our customer support team as soon as possible. Depending on availability and the terms and conditions of your ticket, we may be able to rebook you on the next available bus or offer a partial refund.",
  },
  {
    question: "Is it safe to make payments online for bus tickets?",
    answer:
      "Yes, making payments online through our system is safe and secure. We use advanced encryption technologies and comply with international security standards to ensure that your personal and payment information is protected.",
  },
  {
    question: "How can I cancel or change my ticket booking?",
    answer:
      "To cancel or change your ticket booking, log in to your account on our website or mobile app, go to the 'My Bookings' section, select the ticket you wish to cancel or change, and follow the prompts. Please note that cancellations and changes are subject to our terms and conditions, and additional fees may apply.",
  },
  {
    question: "What should I do if I lose my digital ticket?",
    answer:
      "If you lose your digital ticket, you can retrieve it by logging into your account on our website or mobile app. Go to the 'My Bookings' section to view and re-send your ticket details.",
  },
  {
    question: "Can I bring luggage on the bus?",
    answer:
      "Yes, you can bring luggage on the bus. Each passenger is allowed one piece of checked luggage and one carry-on bag. Additional luggage may incur extra fees, depending on the bus company’s policies.",
  },
];
