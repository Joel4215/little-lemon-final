import React from "react"
import Hero from "./Main-Sections/Hero";
import Specials from "./Main-Sections/Specials";
import Testimonials from "./Main-Sections/Testimonials";
import About from "./Main-Sections/About";
function Main() {
return(
    <main>
        <Hero />
        <Specials />
        <Testimonials/>
        <About/>
    </main>
    );
}
export default Main;