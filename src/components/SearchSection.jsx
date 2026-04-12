import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const popularSearches = [
  { label: "Penthouse in Estepona center", query: "Estepona" },
  { label: "Beachfront apartment in Torrevieja", query: "Torrevieja" },
  { label: "Modern villa in Orihuela Costa", query: "Orihuela Costa" },
  { label: "Homes near Pilar de la Horadada beaches", query: "Pilar de la Horadada" },
  { label: "Golf apartment in Algorfa", query: "Algorfa" },
  { label: "Townhouse in Ciudad Quesada", query: "Ciudad Quesada" },
  { label: "Luxury villa in Marbella Golden Mile", query: "Marbella" },
  { label: "Sea views in Los Alcazares", query: "Los Alcazares" },
  { label: "New development in Fuengirola", query: "Fuengirola" },
  { label: "Country home in San Miguel de Salinas", query: "San Miguel de Salinas" },
  { label: "Boutique flat in Mijas Costa", query: "Mijas" },
  { label: "Coastal living in Casares", query: "Casares" },
];

const midpoint = Math.ceil(popularSearches.length / 2);
const tagRows = [
  popularSearches.slice(0, midpoint),
  popularSearches.slice(midpoint),
];

// Hero search experience used on the homepage and search flow entry.
const SearchSection = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Normalizes the term, fires optional callback, then routes to the search results page.
  const submitSearch = (term) => {
    const trimmed = term.trim();
    setQuery(trimmed);
    if (!trimmed) return;
    onSearch?.(trimmed);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  // Handles form submit to run the same search flow as tag clicks.
  const handleSubmit = (event) => {
    event.preventDefault();
    submitSearch(query);
  };

  // Lets the marquee tags kick off a search without typing.
  const handlePopularClick = (tag) => {
    submitSearch(tag.query);
  };

  return (
    <section className="hero-section" id="search">
      <div className="hero-content">
        <h1>
          An <span className="highlight">intelligent way</span> to discover homes
        </h1>
        <p className="subtitle">
          Property search engine, designed to aggregate and refine listings into clear,
          reliable insights tailored to your needs
        </p>

        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Describe the property you are looking for..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" className="search-button" aria-label="Search">
            {"\u2727"}
          </button>
        </form>

        <p className="popular-title">Popular searches</p>

        <div className="popular-tags">
          {tagRows.map((row, index) => (
            <div
              key={index}
              className={`popular-tags__row ${index === 1 ? "reverse" : ""}`}
            >
              {[...row, ...row].map((tag, i) => (
                <button
                  key={`${tag.label}-${i}`}
                  type="button"
                  onClick={() => handlePopularClick(tag)}
                  className="popular-tag"
                  data-query={tag.query}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
