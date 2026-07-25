import blueLockBanner from "../assets/images/temp/blue-lock-banner.jpg";
import demonSlayerBanner from "../assets/images/temp/demon-slayer-banner.jpg";
import soloLevelingBanner from "../assets/images/temp/solo-leveling-banner.jpg";

const projects = [
  {
    id: 1,
    title: "Demon Slayer",
    status: "Completed",
    description: "Bangla Dub by Legion of Vocals.",

    image: demonSlayerBanner,
    banner: demonSlayerBanner,

    category: "Anime Dub",

    progress: 100,

    releaseDate: "January 2026",
  },

  {
    id: 2,
    title: "Solo Leveling",
    status: "Ongoing",
    description: "New Bangla dub videos are currently being produced.",

    image: soloLevelingBanner,
    banner: soloLevelingBanner,

    category: "Anime Dub",

    progress: 45,

    releaseDate: "July 2026",
  },

  {
    id: 3,
    title: "Blue Lock",
    status: "Upcoming",
    description:
      "The Blue Lock Bangla Dub is currently in production. Stay tuned for updates from Legion of Vocals.",

    image: blueLockBanner,
    banner: blueLockBanner,

    category: "Anime Dub",

    progress: 5,

    releaseDate: "Coming Soon",
  },
];

export default projects;