import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Catalog } from "./catalog/Catalog";
import { Contact } from "./contact/Contact";
import { About } from "./about/About";
import { FlowerDetails } from "./flowerDetails/FlowerDetails";
import { AppRoute } from "./common/AppRoute";
import { ToastContainer } from "react-toastify";
import { Checkout } from "./checkout/Checkout";
import "react-toastify/dist/ReactToastify.css";
import { CheckoutConfirm } from "./checkout/CheckoutConfirm";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path={AppRoute.Catalog} element={<Catalog />} />
        <Route path={AppRoute.About} element={<About />} />
        <Route path={AppRoute.Contact} element={<Contact />} />
        <Route path={AppRoute.FlowerDetails} element={<FlowerDetails />} />
        <Route path={AppRoute.Checkout} element={<Checkout />} />
        <Route path={AppRoute.CheckoutConfirm} element={<CheckoutConfirm />} />
      </Switch>
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
};
