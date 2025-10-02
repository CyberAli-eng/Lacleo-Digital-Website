import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import Reviews from "@/components/Reviews";
import GlobalServices from "@/components/GlobalServices";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <ClientLogos />
        <CaseStudies />
        <GlobalServices />
        <Services />
        <Industries />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
