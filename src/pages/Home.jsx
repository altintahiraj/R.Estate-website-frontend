// Landing page – assembles all marketing sections
import SearchSection from "../components/SearchSection";
import AiHighlightsSection from "../components/AiHighlightsSection";
import FeaturedCollectionsSection from "../components/FeaturedCollectionsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <SearchSection />

      <AiHighlightsSection />

      <FeaturedCollectionsSection />

      <Footer />
    </main>
  );
};

export default Home;

