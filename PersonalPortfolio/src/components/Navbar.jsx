import logo from "../assets/BhaveshLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return  (
  <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/BhaveshGupta07"><FaGithub/></a>
        <a href="https://leetcode.com/u/BhaveshGupta07/"><SiLeetcode/></a>
        <a href="https://github.com/BhaveshGupta07"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/bhavesh-gupta07/"><FaLinkedin/></a>
        <a href="https://github.com/BhaveshGupta07"><FaSquareXTwitter/></a>
    </div>
  </nav>
  )
}

export default Navbar
