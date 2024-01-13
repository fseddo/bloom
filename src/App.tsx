import { Navbar } from "./nav/Navbar";
import { Routes } from "./nav/Routes";

const App = () => {
  return (
    <div className="flex h-screen overflow-x-hidden bg-blue-100 flex-col ">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
