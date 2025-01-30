import ig from "../assets/social/ig.svg";
import fb from "../assets/social/fb.svg";
import google from "../assets/social/google.svg";
import apple from "../assets/social/apple.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const social = [fb, google, apple, ig];
  const data = [
    {
      title: "START A BUSINESS",
      links: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ],
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <div className="bg-deepblue px-12 py-16">
      <div className="mb-12 flex">
        {/* social links */}
        <div className="space-y-4">
          <p className="text-gray-1 max-w-[240px] text-[16px] font-medium">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex h-6 w-6 gap-6">
            {social.map((link, index) => {
              return (
                <img
                  src={link}
                  alt=""
                  key={index}
                  to="/"
                  className="h-6 w-6 cursor-pointer"
                />
              );
            })}
          </div>
        </div>

        {/* links */}
        <div className="relative left-[5rem]">
          <div className="grid grid-cols-4 gap-8">
            {data.map((item, index) => {
              return (
                <div key={index} className="mx-2 flex flex-col space-y-2">
                  <h1 className="text-yellowdarker text-[14px] font-bold">
                    {item.title}
                  </h1>
                  {item.links.map((data, index) => {
                    return (
                      <Link
                        to="/"
                        className="text-gray-1 text-[14px] font-medium transition-all duration-300 ease-in-out hover:pl-2"
                        key={index}
                      >
                        {data}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-gray-1 text-[14px] font-medium">
          &copy; 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
