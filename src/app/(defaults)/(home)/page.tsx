"use client";
import React, { useEffect } from "react";
import { DealSection2 } from "./_components/_DealSection2";
import { Features } from "./_components/Features";
import { DealSection } from "./_components/_DealSection";
import { Categories } from "./_components/_categories";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import { Home } from "./_components/_Home";
import { Section1 } from "./_components/section1";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });
  return (
    <div className="overflow-hidden">
      {/* <Home /> */}
      <Section1 />
      <Categories />
      <DealSection2 />
      <DealSection />
      <Features />

      {/* <About />
      <OurService />
      <GeneralTrade />
      <Contracting />
      <CommercialAgencies />
      <ContactUs /> */}
    </div>
  );
};

export default Page;
