import React from "react"
import Hero from "./Main-Sections/Hero";
import Specials from "./Main-Sections/Specials";
import Testimonials from "./Main-Sections/Testimonials";
import About from "./Main-Sections/About";

function Main() {
  return(
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="menu">
        <Specials />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}

export default Main;