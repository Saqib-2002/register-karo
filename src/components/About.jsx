import about from "../assets/aboutPic.svg";
import bgImg from "../assets/aboutBg.svg";
import rightArrow from "../assets/rightArrwhite.svg";
import Button from "./Button";

const About = () => {
  return (
    <div className="my-16">
      <img src={bgImg} alt="" className="absolute right-[0%] -z-10" />
      <div className="mx-12 grid grid-cols-2">
        <div>
          <p className="text-yellowdarker text-[14px]">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h1 className="text-darkblue text-[32px] font-bold">
            About <span className="text-yellowdarker">Register Karo</span>
          </h1>
          <div className="text-darkblue my-8 max-w-[500px] text-[16px]">
            <p className="mb-4">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I&apos;m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone&apos;s expectations.
            </p>
            <p>
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>
          </div>
          <Button icon={rightArrow} bgcolor="bg-blue">
            Learn More
          </Button>
        </div>
        <div>
          <img src={about} alt="" className="z-20" />
        </div>
      </div>
    </div>
  );
};
export default About;
