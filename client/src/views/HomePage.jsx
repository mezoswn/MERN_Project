import React from "react";
import Header from '../component/Header';
import Work from '../component/Work';
import About from '../component/about';
import Skills from '../component/skills';
import Promotion from '../component/Promotion';
import Footer from '../component/Footer';
import Layout from "../component/layout"

export default function HomePage() {
  return (
    <>
      <Layout>
        <Header></Header>
        <Work></Work>
        <About></About>
        <Skills></Skills>
        <Promotion></Promotion>
        <Footer></Footer>
      </Layout>
    </>
  );
}
