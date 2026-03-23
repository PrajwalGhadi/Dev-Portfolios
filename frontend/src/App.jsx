import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./routers/Router";

function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
