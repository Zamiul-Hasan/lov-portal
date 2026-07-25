import avatar from "../assets/images/logos/logo.png";

import blueLockBanner from "../assets/images/temp/blue-lock-banner.jpg";
import demonSlayerBanner from "../assets/images/temp/demon-slayer-banner.jpg";
import soloLevelingBanner from "../assets/images/temp/solo-leveling-banner.jpg";

const members = [
  {
    id: 1,

    username: "zamiul",

    fullName: "Zamiul Hasan",

    displayName: "Zamiul",

    avatar,

    cover: blueLockBanner,

    bio:
      "Founder of Legion of Vocals. Passionate about anime dubbing, web development, and building the biggest Bangla anime dubbing community.",

    department: "Management",

    role: "Founder",

    level: 25,

    status: "Verified",

    joined: "June 2025",

    joinedAt: "2025-06-15",

    location: "Bangladesh",

    social: {
      facebook: "",
      discord: "",
      youtube: "",
      github: "",
    },

    skills: [
      "Voice Acting",
      "Web Development",
      "Project Management",
      "Community Management",
    ],

    stats: {
      projects: 3,
      dubVideos: 5,
      points: 1500,
      followers: 120,
    },

    achievements: [
      "Founder",
      "Top Contributor",
      "Verified Member",
    ],

    permissions: {
      canUploadProject: true,
      canUploadDub: true,
      canManageMembers: true,
    },
  },

  {
    id: 2,

    username: "voiceactor01",

    fullName: "Member Name",

    displayName: "Member",

    avatar,

    cover: demonSlayerBanner,

    bio:
      "Voice Actor of Legion of Vocals. Loves anime dubbing and character performance.",

    department: "Voice Acting",

    role: "Member",

    level: 8,

    status: "Verified",

    joined: "January 2026",

    joinedAt: "2026-01-10",

    location: "Bangladesh",

    social: {
      facebook: "",
      discord: "",
      youtube: "",
      github: "",
    },

    skills: [
      "Voice Acting",
      "Character Performance",
    ],

    stats: {
      projects: 2,
      dubVideos: 4,
      points: 620,
      followers: 35,
    },

    achievements: [
      "Rising Talent",
    ],

    permissions: {
      canUploadProject: false,
      canUploadDub: true,
      canManageMembers: false,
    },
  },

  {
    id: 3,

    username: "editor01",

    fullName: "Editor Name",

    displayName: "Editor",

    avatar,

    cover: soloLevelingBanner,

    bio:
      "Video editor responsible for polishing every Bangla dub release.",

    department: "Video Editing",

    role: "Member",

    level: 10,

    status: "Verified",

    joined: "March 2026",

    joinedAt: "2026-03-20",

    location: "Bangladesh",

    social: {
      facebook: "",
      discord: "",
      youtube: "",
      github: "",
    },

    skills: [
      "Video Editing",
      "Adobe Premiere Pro",
      "After Effects",
    ],

    stats: {
      projects: 4,
      dubVideos: 8,
      points: 980,
      followers: 55,
    },

    achievements: [
      "Creative Editor",
    ],

    permissions: {
      canUploadProject: false,
      canUploadDub: true,
      canManageMembers: false,
    },
  },
];

export default members;