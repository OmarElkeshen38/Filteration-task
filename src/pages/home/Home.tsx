import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Service from "../../components/service/Service";
import Testymonials from "../../components/testymonials/Testymonials";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Testymonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
