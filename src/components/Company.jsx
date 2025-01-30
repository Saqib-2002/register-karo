import brandlogo from "../assets/brands.svg";

const Company = () => {
  return (
    <>
      <div className="mb-[60px] flex flex-col items-center px-[200px]">
        <h1 className="text-center text-[22px] font-semibold">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h1>
        <img
          src={brandlogo}
          alt="Brand Logos"
          className="mt-4 h-[auto] max-w-full"
        />
      </div>
    </>
  );
};
export default Company;
