import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your business evolve and grow
          <br /> by providing solutions
        </p>
        <hr />
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business Tech Analysis</h2>
          <p>
          Our Business Tech Analysis service offers a comprehensive examination of your technological infrastructure and processes.
          We identify areas for improvement, assess risks, and provide strategic recommendations to enhance efficiency and productivity. 
          By leveraging cutting-edge analysis tools, we ensure that your business stays ahead in the rapidly evolving tech landscape.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Development</h2>
          <p>
          Empower your business with our Software Development service. 
          We specialize in creating customized, scalable, and innovative solutions tailored to meet your specific needs. 
          Our development team utilizes the latest technologies to deliver robust applications that drive growth and streamline operations, 
          ensuring your software aligns seamlessly with your business objectives.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>System Maintenance</h2>
          <p>
          Ensure the seamless functioning of your IT systems with our System Maintenance service. 
          We offer proactive monitoring, timely updates, and expert troubleshooting to minimize downtime and prevent potential issues. 
          Our dedicated team ensures that your systems operate at peak performance, allowing you to focus on your core business activities without disruptions.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tech Edu</h2>
          <p>
          Stay ahead of the curve with our Tech Education service. 
          We provide targeted training programs and workshops designed to equip your team with the latest technological skills and knowledge. 
          From coding and development to emerging technologies, our educational initiatives empower your workforce to adapt to industry changes and drive innovation within your organization.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;