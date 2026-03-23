import { landing } from "../../../constants/Landing";
import Section_1 from "./sections/Section_1";
import Section_2 from "./sections/Section_2";
import Section_3 from "./sections/Section_3";

const Landing = () => {
  return (
    <main className="bg-[#0A0E14]">
      <Section_1 landing={landing}/>
      <Section_2 landing={landing}/>
      <Section_3 landing={landing}/>
    </main>
  );
};

export default Landing;
