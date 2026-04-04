
const Section_2 = ({ landing }) => {
  return (
    <section className="flex flex-col gap-6 py-10 lg:py-20 px-5 lg:px-20 w-full space-y-4">
      <div className="flex-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          {landing.section2.header}
        </h1>

        <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-4 text-gray-400">
          {landing.section2.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
        {landing.section2.cards.map((item, index) => {
            const Icon = item.logo;

            return (
          <div key = {index} className="w-full bg-[#151A21] p-5 space-y-4 rounded-lg">
            <div className="bg-[#21312A] w-fit p-4">
              <Icon className="text-neon text-md sm:text-lg md:text-xl lg:text-2xl" />
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
              {item.title}
            </h1>
            <p className="text-gray-400 text-sm sm:text-md md:text-lg lg:text-xl">
              {item.description}
            </p>

            {/* <img
              src={item.image}
              alt=""
              className="w-full"
            /> */}
          </div>
        )
        })}

      </div>
    </section>
  );
};

export default Section_2;
