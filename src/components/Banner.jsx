import banner from "../assets/banner.svg";
import star from "../assets/star.svg";
import stars from "../assets/starsmul.svg";
import global from "../assets/global.svg";
import Button from "./Button";
import play from "../assets/play.svg";
import bannerChar from "../assets/bannerChar.svg";
import archer from "../assets/archer.svg";

const Banner = () => {
  return (
    <div>
      <img src={banner} alt="" className="absolute -z-1" />
      <div className="relative top-[50px] flex justify-center">
        <div className="left-[70px]">
          <div className="flex gap-2">
            <img src={star} alt="" />
            <p>Google Rating</p>
            <img src={stars} alt="" />
          </div>
          <div className="font-inter h-[466px] w-[700px]">
            <h1 className="text-darkblack text-[47px] font-medium">
              Your trusted partner<br></br>for compliance business needs
            </h1>
            <hr className="mt-[12px] h-[1px] w-[40px] text-red-500" />

            <p className="text-gray-2 my-[20px]">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, <b>registrations</b>,{" "}
              <b>tax filings</b>, and other
              <b>legal matters.</b>
            </p>

            <img src={global} alt="" />
            <div className="mt-[20px] flex gap-2">
              <Button bgcolor="bg-blue mr-4">Talk An Expert</Button>
              <img src={play} alt="" />
              <p className="mt-3">See how it works</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={bannerChar} alt="" />
          <img
            src={archer}
            alt=""
            className="relative -top-[158px] left-[65%]"
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
