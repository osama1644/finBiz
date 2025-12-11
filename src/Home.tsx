import DataAnalysis from "./_components/DataAnalysis/DataAnalysis";
import FinanceExperience from "./_components/FinanceExperience/FinanceExperience";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/header/Header";
import Hero from "./_components/hero/Hero";
import Pricing from "./_components/pricing/Pricing";
import TeamManagement from "./_components/TeamManagement/TeamManagement";
import Testemonials from "./_components/testemonials/Testemonials";
import NavLinks from "./_components/Links/NavLinks";
function Home() {
  return (
    <div  className="container " >
      <Header />
      <Hero />
      <DataAnalysis />
     <NavLinks />
      <TeamManagement />
      <Testemonials />
      <Pricing />
      <FinanceExperience />
      <Footer />
    </div>
  );
}

export default Home;
// data-theme="dark"