import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Node Commerce",
    img: "/portfolio/images/screen.png",
    desc: "I developed a cutting-edge ecommerce platform using Node.js, Express, and MongoDB, delivering a seamless shopping experience with a user-friendly interface, secure authentication, and efficient checkout. The robust backend, powered by Node.js and Express, seamlessly manages data stored in MongoDB. The project showcases my expertise in full-stack development, emphasizing efficiency, security, and a superior user experience",
  },
  {
    id: 2,
    title: "Security App",
    img: "/portfolio/images/app2.png",
    desc: "Designed and implemented a mobile application for the Uganda Police using Dart and Flutter, providing law enforcement officers with a powerful and intuitive tool. The app, built with Flutter's cross-platform capabilities, ensures seamless performance on both iOS and Android devices. Leveraging Dart's flexibility and Flutter's rich UI components, the application enhances police operations with features like real-time data access, incident reporting, and streamlined communication, contributing to a more efficient and responsive law enforcement system.",
  },
  {
    id: 3,
    title: "ELearning App",
    img: "/portfolio/images/screen2.png",
    desc: "Developed a robust eLearning platform for Refactory using React, Node.js, Express, MongoDB, and JWT authentication. The frontend, built with React, offers an engaging user interface, while the backend, powered by Node.js and Express, seamlessly integrates with MongoDB for efficient data management. The incorporation of JWT ensures secure and seamless user authentication, contributing to a feature-rich eLearning experience that aligns with Refactory's educational goals.",
  },
  {
    id: 4,
    title: "React Native App",
    img: "/portfolio/images/app.png",
    desc: "Crafted a dynamic ecommerce mobile app using React Native and Expo (EAS) to achieve cross-platform compatibility. The app combines the power of React Native for a native-like experience and Expo's EAS build system for streamlined development and deployment. With a focus on intuitive design and smooth functionality, the ecommerce mobile app provides users with a seamless shopping experience, showcasing the versatility of React Native and the efficiency of Expo's development tools.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;