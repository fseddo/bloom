import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Catalog } from "../catalog/Catalog";
import { Contact } from "../contact/Contact";
import { About } from "../about/About";
import { FlowerDetails } from "../flowerDetails/FlowerDetails";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/catalog/:flowerId" element={<FlowerDetails />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
};
