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

export const nearTheSpeedOfLight = {
  banner: {
    title: "Near the Speed of Light",
    backgroundImage: backgroundImage,
  },
  summary: {
    text: "NEAR THE SPEED OF LIGHT is the next installment in the Visceral Science series, spearheaded by the World Science Festival. The virtual reality application helps students acquire an intuitive understanding of what happens when we move closer to the speed of light. The experience is an innovative and engaging crossplay where a team of mobile players competes against players in virtual reality, incorporating phenomena such as the Relativistic Doppler Effect, the Headlight Effect, Lorentz Contraction, and the Relativity of Simultaneity.",
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
    availableRoles: "VR / mobile crossplay",
    pcVrVersion: "Yes",
    standaloneVrVersion: "Yes",
    mobileApp: "Yes (crossplay)",
    videoChat: "No",
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
