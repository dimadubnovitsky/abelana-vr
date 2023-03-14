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

export const gravitySimulator = {
  banner: {
    title: "Gravity Simulator",
    backgroundImage: backgroundImage,
  },
  summary: {
    text: "GRAVITY SIMULATOR is a new virtual reality experience in the Visceral Science series by the World Science Festival. Inspired by the first observation of gravitational waves made by the LIGO observatory, in this experience students create their own systems of stars, planets, moons, and black holes, observing how they interact and collide. Students will discover the phenomena of “stellar vampirism” and gravitational waves, with spacetime distortions demonstrated in 3D. Students can peer inside planets and other objects, learning about their compositions, as well as the mechanics of volcanism and plate tectonics.",
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
    mobileApp: "No",
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
