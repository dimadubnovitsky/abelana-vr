import backgroundImage from "./images/Banner/background_image.jpg";
import summary_image_1x from "./images/Summary/image@1x.png";
import summary_image_2x from "./images/Summary/image@2x.png";
import summary_image_3x from "./images/Summary/image@3x.png";
import details_image_1x from "./images/Details/image@1x.png";
import details_image_2x from "./images/Details/image@2x.png";
import details_image_3x from "./images/Details/image@3x.png";
import gallery_image1 from "./images/Gallery/image1.jpg";
import gallery_image2 from "./images/Gallery/image2.jpg";
import gallery_image3 from "./images/Gallery/image3.jpg";
import gallery_image4 from "./images/Gallery/image4.jpg";
import gallery_image5 from "./images/Gallery/image5.jpg";
import gallery_image6 from "./images/Gallery/image6.jpg";

export const evolutionOfStars = {
  banner: {
    title: "Evolution Of Stars",
    backgroundImage: backgroundImage,
  },
  summary: {
    text: "This experience is the first chapter in the Visceral Science series produced by the World Science Festival. Working in teams, your students will learn essential astronomy and physics lessons in a fully immersive environment, sparking more curiosity and engagement than through traditional instruction. How do stars and planets form, what impacts planetary orbits, which stars lead to violent supernovae and the formation of black holes – these and many other questions will be explored by students in a phenomena-based interactive learning environment.",
    image_1x: summary_image_1x,
    image_2x: summary_image_2x,
    image_3x: summary_image_3x,
  },
  details: {
    image_1x: details_image_1x,
    image_2x: details_image_2x,
    image_3x: details_image_3x,
    userEnvironment: "Multiplayer",
    maximumClassSize: "34",
    availableRoles: "Teacher, students",
    pcVrVersion: "Yes",
    standaloneVrVersion: "Yes",
    mobileApp: "Yes",
    videoChat: "BlueJeans",
  },
  gallery: {
    image_1: gallery_image1,
    image_2: gallery_image2,
    image_3: gallery_image3,
    image_4: gallery_image4,
    image_5: gallery_image5,
    image_6: gallery_image6,
  },
};
