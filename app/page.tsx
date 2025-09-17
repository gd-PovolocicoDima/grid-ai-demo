import Header from "./components/Header";
import Results from "./components/Results";
import Solutions from "./components/Solutions";
import TrustSignals from "./components/TrustSignals";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";
import { getPage } from "./getPage";
import { FooterSection, NavbarSection, PartnersSection } from "./types";

export default async function Home() {
  const data = await getPage("home");
  const sections = data.data[0].sections;

  const navbar = sections.find(
    (s) => s.__component === "navbar.navbar"
  ) as NavbarSection;

  const partners = sections.find(
    (s) => s.__component === "sections.partners"
  ) as PartnersSection;

  const footer = sections.find(
    (s) => s.__component === "footer.footer"
  ) as FooterSection;

  return (
    <div className="relative w-full min-h-screen bg-primary overflow-x-hidden">
      <Header navbar={navbar} />
      <Results />
      <Solutions />
      <TrustSignals partners={partners} />
      <Industries />
      <Testimonials />
      <SuccessStories />
      <Footer footer={footer} />
    </div>
  );
}
