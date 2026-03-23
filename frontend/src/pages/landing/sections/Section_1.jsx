import Button from "../../../components/utils/Button";
import { RiExternalLinkFill } from "react-icons/ri";

const Section_1 = ({landing}) => {
  return (
    <section className="flex lg:flex-row flex-col gap-6 py-30 px-5 lg:px-20">
      <div className="flex flex-col lg:w-[50%] ">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
          {landing.section1.header}
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          {landing.section1.title}
        </h2>
        <p className="text-sm md:text-md lg:text-xl mt-6 text-gray-400 max-w-xl">
          {landing.section1.description}
        </p>

        <div className="mt-6 flex gap-6">
          <Button text="Create Your DevLink →" color="bg-neon sm:py-1 md:py-2 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-3" />
          <Button
            text="View Examples"
            color="border border-neon text-white sm:py-1 md:py-2 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-3"
          />
        </div>
      </div>

      <div className="flex justify-center items-center lg:w-[50%]">
        {/* Card */}
        <div className="w-fit bg-[#0F141A] shadow-[#3b5a54] shadow-2xl backdrop-blur-2xl p-6 sm:p-6 md:p-5 lg:p-4 rounded-lg space-y-4">
          {/* Name and Devlink */}
          <div className="flex gap-2">
            <img
              src="/john_doe_user_icon.png"
              alt="john_doe_user_icon.png"
              className="w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[5vw] border border-neon bg-black rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-white">John_Doe</h1>
              <p className="text-neon">devlink.com/JohnDoe</p>
            </div>
          </div>

          {/* Github Contribution */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-gray-400">GITHUB CONTRIBUTION</p>
              <p className="text-neon">542 stars</p>
            </div>
            <div>
                <img src="/Github_Contribution.png" alt="Github_Contribution.png" className="w-full"/>
            </div>
          </div>

          {/* Latest Articles */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">LATEST ARTICLES</p>

            <div className="flex flex-col gap-3">
              {[
                "Scaling React App with Web Worker",
                "Why I moved to Rust for CLI tools",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-[#171D25] p-3 rounded-lg"
                >
                  <p className="text-gray-200 text-sm sm:text-md md:text-lg lg:text-lg">{item}</p>{" "}
                  <RiExternalLinkFill className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
