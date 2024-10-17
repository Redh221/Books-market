import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./General.module.scss";

const Home = lazy(() => import("./Home"));
const Shop = lazy(() => import("./Shop"));
export const General = () => {
  const selec = useSelector((state) => state.myMarket.giga);
  console.log(selec);
  return (
    <div className={style.wrapper}>
      <Router basename="/">
        <Header />

        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/goods/" element={<Shop />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </Router>
    </div>
  );
};
