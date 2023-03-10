import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/Contact";
import Toggle from "./components/Toggle";
import Footer from "./pages/Footer";

export default function App() {
  const [categories, setCategories] = useState([
    { name: "Resume" },
    { name: "Portfolio" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="container">
      <header>
        <Navbar
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navbar>
      </header>
      <main>
        {!contactSelected ? (
          <>
            <AboutMe />
            <Toggle currentCategory={currentCategory}></Toggle>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer />
    </div>
  );
}
