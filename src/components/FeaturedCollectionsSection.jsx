const collections = [
  {
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    title: "Invest in Coastal Spain",
    description:
      "Discover waterfront apartments and villas with strong rental demand along the Mediterranean coastline.",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Living in Madrid",
    description:
      "Explore high-end residences with terrace views, premium amenities, and easy access to the capital's cultural core.",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=80",
    title: "Holiday Homes in the Balearics",
    description:
      "Curated escapes across Mallorca, Ibiza, and Menorca perfect for seasonal getaways and investment potential.",
    link: "#",
  },
];

const FeaturedCollectionsSection = () => {
  return (
    <section className="collections-section">
      <div className="collections-header">
        <h2>
          Explore other <span>collections</span>
        </h2>
        <p>
          Discover more curated property collections tailored to different preferences and
          needs.
        </p>
      </div>

      <div className="collections-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.title}>
            <img src={collection.image} alt={collection.title} />
            <div className="collection-body">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <a className="collection-link" href={collection.link}>
                See more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollectionsSection;
