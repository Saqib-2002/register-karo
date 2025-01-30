import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import social from "../assets/social.svg";
import registerkaro from "../assets/register-karo.svg";
import search from "../assets/search-icon.svg";
import downArrow from "../assets/down-arrow.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  const navTop = [
    {
      tilte: "www.registerkaro.in",
      icon: mail,
    },
    {
      tilte: "+918447746183",
      icon: phone,
    },
  ];

  const mainNavEl = ["Home", "Our Services", "Blog", "Contact Us", "About us"];

  return (
    <div>
      {/* Nav-top */}
      <div className="bg-blue relative flex h-[44px] text-white">
        {navTop.map((item, index) => {
          return (
            <div key={index} className="relative left-[55%] mx-3 flex">
              <img src={item.icon} alt="" width={15} height={11} />
              <p className="mt-2 ml-2">
                {item.tilte}
                <span className="verLine left-[10.25rem] mx-3"></span>
              </p>
            </div>
          );
        })}
        <div className="relative left-[60%] flex">
          <img src={social} alt="" width={118} height={18} />
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-12 flex h-[71px] justify-between text-center">
        <div>
          <Link to="/">
            <img
              src={registerkaro}
              alt=""
              width={222}
              height={56.8}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="relative top-[40%] flex gap-8">
          <div className="">
            <ul className="flex">
              {mainNavEl.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-darkblue font-open-sans mx-4 text-[16px]"
                  >
                    <Link to="home">{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <img src={search} alt="" className="cursor-pointer" />
          </div>
          <div className="-mt-[12px]">
            <Button bgcolor="bg-darkyellow">talk to me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
