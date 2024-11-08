import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./General.module.scss";
import { lazily } from "react-lazily";
import {
  Footer,
  Header,
  RegistrationForm,
  MyModal,
  LogRegContainer,
} from "../../../globalImports";

const { Home, Shop } = lazily(() => import("../../../globalImports"));

export const General = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={style.wrapper}>
      <Router basename="/">
        <Header setModal={setModal} />
        {modal && (
          <MyModal setModal={setModal}>
            <LogRegContainer />
          </MyModal>
        )}
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
