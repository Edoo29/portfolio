import Navbar from "./components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Glowing circle */}
      <div id="glowing-circle" className="m-auto"></div>
    </div>
  );
};

export default Home;
