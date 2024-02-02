import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Catalog } from "../catalog/Catalog";
import { Contact } from "../contact/Contact";
import { About } from "../about/About";
import { FlowerDetails } from "../flowerDetails/FlowerDetails";
import { AppRoute } from "../common/AppRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path={AppRoute.About} element={<About />} />
      <Route path={AppRoute.Contact} element={<Contact />} />
      <Route path={AppRoute.FlowerDetails} element={<FlowerDetails />} />
    </Switch>
  );
};
