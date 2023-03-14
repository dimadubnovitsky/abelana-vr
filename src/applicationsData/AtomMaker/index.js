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

export const atomMaker = {
  banner: {
    title: "Atom Maker",
    backgroundImage: backgroundImage,
  },
  summary: {
    text: "This virtual experience is dedicated to the topic of atoms, orbitals, and the periodic table of elements. Students will be able to assemble all known elements, visualize bizarre shapes of orbitals across energy levels of an atom, improve their understanding of familiar diagrams from the school curriculum, compete against each other in educational games that help to solidify the material and enjoy the best blend of virtual reality and peer-driven learning.",
    image_1x: summary_image_1x,
    image_2x: summary_image_2x,
    image_3x: summary_image_3x,
  },
  details: {
    image_1x: details_image_1x,
    image_2x: details_image_2x,
    image_3x: details_image_3x,
    userEnvironment: "Multiplayer",
    maximumClassSize: "32",
    availableRoles: "Teacher, students",
    pcVrVersion: "Yes",
    standaloneVrVersion: "No",
    mobileApp: "Yes (teacher)",
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
