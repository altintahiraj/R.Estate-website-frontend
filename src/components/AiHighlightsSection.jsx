const cards = [
  {
    icon: "🔍",
    title: "Simple search through chat",
    description:
      "The user types the property they're looking for, and the platform instantly provides a list of accurate options.",
  },
  {
    icon: "📍",
    title: "Map + List View",
    description:
      "Every property is shown both in a list and on the map with clusters, making navigation easier.",
  },
  {
    icon: "🎯",
    title: "Accurate and up-to-date results",
    description:
      "All properties are organized and cleaned of duplicates, so users don't waste time.",
  },
  {
    icon: "🔗",
    title: "End-to-end experience",
    description:
      "From searching to listing, users can manage their entire property journey in one place.",
  },
];

const AiHighlightsSection = () => {
  return (
    <section className="ai-section">
      <div className="ai-section__header">
        <h2>
          Powered by <span>Artificial Intelligence</span>
        </h2>
        <p>
          Experience the future of real estate search with cutting-edge AI technology that
          understands your needs better than traditional platforms.
        </p>
      </div>

      <div className="ai-section__grid">
        {cards.map((card) => (
          <article className="ai-card" key={card.title}>
            <div className="ai-card__icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AiHighlightsSection;
