import { Navbar } from "./nav/Navbar";
import { Routes } from "./Routes";

const App = () => {
  return (
    <div className="flex h-screen overflow-x-hidden flex-col ">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
