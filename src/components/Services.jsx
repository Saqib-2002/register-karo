import icon1 from "../assets/services/1.svg";
import icon2 from "../assets/services/2.svg";
import icon3 from "../assets/services/3.svg";
import icon4 from "../assets/services/4.svg";
import icon5 from "../assets/services/5.svg";
import icon6 from "../assets/services/6.svg";
import rightArrow from "../assets/rightArrow.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Services = () => {
  const data = [
    {
      title: "Company Formation",
      desc: "Build web-based solutions that enhance customer experience.",
      icon: icon1,
    },
    {
      title: "Company Secretarial Services",
      desc: "Make data-driven decisions andutilize technology to reach business goals.",
      icon: icon2,
    },
    {
      title: "Virtual Office Address",
      desc: "Foster customer relationships by effectively serving your market.",
      icon: icon3,
    },
    {
      title: "Annual Compliance Services",
      desc: "Turn your ideas into modern products with our design experts.",
      icon: icon4,
    },
    {
      title: "Payroll Services",
      desc: "Expand your business across the globe with minimal effort.",
      icon: icon5,
    },
    {
      title: "Bookkeeping Services",
      desc: "Steering user behaviours with creative design, data insights & technology.",
      icon: icon6,
    },
  ];

  return (
    <div className="bg-creamwhite text-center">
      <div className="mx-16 my-12 py-12">
        <p className="text-darkyellow text-[14px] font-normal">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h1 className="text-darkblue text-[32px] font-bold">
          Explore Our Services
        </h1>
      </div>

      <div className="mx-[10.25rem] grid grid-cols-3 items-center gap-8 space-y-16">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <img src={item.icon} alt="" height={60} width={60} />
              <h1 className="mb-8 text-2xl font-semibold">{item.title}</h1>
              <p className="text-md mb-12 max-w-full px-12 text-center font-normal">
                {item.desc}
              </p>
              <Link to="/" className="flex justify-center">
                <span className="-mt-1">Learn More</span>
                <span>
                  <img src={rightArrow} alt="" className="ml-2" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <Button bgcolor="bg-blue">See All Services</Button>
      </div>
    </div>
  );
};
export default Services;
