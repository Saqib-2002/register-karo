import clients from "../assets/happyClients.svg";
import { Link } from "react-router-dom";
import rightArrow from "../assets/rightArrow.svg";
import icon1 from "../assets/happyClients/icon1.svg";
import icon2 from "../assets/happyClients/icon2.svg";
import icon3 from "../assets/happyClients/icon3.svg";
import icon4 from "../assets/happyClients/icon4.svg";

const HappyClients = () => {
  const data = [
    {
      title: "Fill up Application Form",
      icon: icon1,
      color: "bg-icon1",
    },
    {
      title: "Make Online Payment",
      icon: icon2,
      color: "bg-icon2",
    },
    {
      title: "Executive will Process Application",
      icon: icon3,
      color: "bg-icon3",
    },
    {
      title: "Get Confirm Mail",
      icon: icon4,
      color: "bg-icon4",
    },
  ];
  return (
    <>
      <div className="my-12 flex flex-col items-center">
        <div className="mt-4 mb-12 max-w-[50%] text-center">
          <h1 className="text-[32px] font-bold">Our Happy Clients</h1>
          <p className="text-gray-3 text-[16px]">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>
        <div className="mx-16 mb-8 max-w-svw">
          <img src={clients} alt="" />
        </div>
        <div>
          <Link to="/" className="flex justify-center">
            <span className="-mt-1">Learn More</span>
            <span>
              <img src={rightArrow} alt="" className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-yellowdarker mb-12 flex justify-center py-12">
        <div className="text-brown ml-12 grid grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex gap-4">
                <div
                  className={`h-12 w-12 ${item.color} flex items-center justify-center rounded-full`}
                >
                  <img src={item.icon} alt="" className="h-6 w-6" />
                </div>
                <h1 className="text=[18px] flex items-center justify-center font-semibold">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HappyClients;
