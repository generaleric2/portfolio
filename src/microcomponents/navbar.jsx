import Sidebar from "../components/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import {GitBranch,X} from "phosphor-react"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Eric Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/generaleric2">
          <GitBranch size={32} />
          </a>
          <a href="https://x.com/general_eric1">
          <X size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;