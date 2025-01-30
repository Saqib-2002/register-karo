import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import youtube from "../assets/youtube.svg";

const Video = () => {
  return (
    <div className="bg-blue text-offWhite my-16">
      <div className="mx-12 grid grid-cols-2 py-8">
        <div className="mt-5 ml-8 max-w-[32rem]">
          <h1 className="text-[34px] font-bold">Our Video Introductions</h1>
          <p className="text-gray-1 text-[16px]">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <Card />
        </div>
        <div>
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const data = [
    {
      title: "Explore ideas together",
      desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
      icon: icon1,
    },
    {
      title: "Bring those ideas to life",
      desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
      icon: icon2,
    },
  ];

  return (
    <div className="my-12 flex flex-col items-center gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="bg-darkyellow mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
            <img src={item.icon} alt="" className="h-6 w-6 items-center" />
          </div>
          <div>
            <h1 className="text-[22px] font-bold">{item.title}</h1>
            <p className="text-gray-1 text-[16px]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Video;
