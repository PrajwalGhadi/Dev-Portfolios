import { IoCodeWorking } from "react-icons/io5";

const Section_3 = ({ landing }) => {
  return (
    <section className="flex flex-col gap-6 py-10 lg:py-20 px-5 lg:px-20 w-full space-y-4">
      <div className="bg-[#0F141A] w-full relative py-10 rounded-lg">

        <IoCodeWorking className="text-[#1A1F26] text-5xl sm:text-6xl md:text-7xl lg:text-9xl absolute right-0 sm:right-[10%] md:right-[15%] lg:right-[0%] xl:right-[22%]" />

          {/* Section 3 title  */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mt-10 z-9">
          {landing.section3.title}
        </h1>

        {/* Section 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          {landing.section3.cards.map((item, index) => {
            const Icon = item.logo;

            return (
              <div
                key={index}
                className="w-full p-5 space-y-4 rounded-lg flex flex-col items-center"
              >
                <div className="bg-black w-fit p-4">
                  <Icon className="text-neon text-2xl" />
                </div>

                <span className="text-neon text-lg">{item.step}</span>

                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-3xl text-white">{item.title}</h1>
                <p className="text-gray-400 text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl w-[75%] xl:w-[50%] text-center">{item.description}</p>

                {/* <img
              src={item.image}
              alt=""
              className="w-full"
            /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section_3;
