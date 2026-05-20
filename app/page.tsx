import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import QuoteBanner from "./components/QuoteBanner";
import OurClients from "./components/OurClients";
import SignsToVet from "./components/SignsToVet";
import MakeAppointment from "./components/MakeAppointment";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Hero + AboutUs together — cat image overlaps AboutUs */}
      <AnimateIn variant="down" mount delay={80}>
        <Hero />
        <AboutUs />
      </AnimateIn>

      {/* Services: slides in from right */}
      <AnimateIn variant="right">
        <OurServices />
      </AnimateIn>

      {/* Quote: subtle scale + fade */}
      <AnimateIn variant="scale">
        <QuoteBanner />
      </AnimateIn>

      {/* Clients: big slide up */}
      <AnimateIn variant="up">
        <OurClients />
      </AnimateIn>

      {/* Signs: slides from left */}
      <AnimateIn variant="left">
        <SignsToVet />
      </AnimateIn>

      {/* Appointment: scale in */}
      <AnimateIn variant="scale" rootMargin="0px 0px -40px 0px">
        <MakeAppointment />
      </AnimateIn>

      {/* Footer: gentle fade */}
      <AnimateIn variant="fade">
        <Footer />
      </AnimateIn>
    </main>
  );
}
