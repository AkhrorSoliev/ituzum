import Logo from "../assets/logo.svg";
import { FaGithub, FaYoutube, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-neutral ">
      <div className="align-elements footer gap-y-5 text-neutral-content items-center p-4 justify-center md:justify-between">
        <aside className="flex items-center">
          <img src={Logo} alt="" className="w-10" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="flex w-full justify-center gap-4">
          <a href="https://github.com/akhrorsoliev">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://www.youtube.com/@akhrorweb">
            <FaYoutube className="w-7 h-7" />
          </a>
          <a href="https://t.me/akhror_web">
            <FaTelegram className=" w-7 h-7" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
