import { useNavigate } from "react-router-dom";
import manageHero from "../assets/image.png";

const highlights = [
  {
    icon: "🚀",
    title: "Create once, publish everywhere",
    description: "Push listings to portals, your site, and socials without re-uploading assets.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Stay in sync with your team",
    description: "Assign folders, leave notes, and keep everyone aligned in a single workspace.",
  },
  {
    icon: "📢",
    title: "Grow your digital presence",
    description: "Schedule posts, share reports, and showcase curated collections automatically.",
  },
  {
    icon: "🤖",
    title: "AI listing assistant",
    description: "Draft captivating descriptions, headlines, and multilingual copy in seconds.",
  },
  {
    icon: "🧠",
    title: "Smart pricing intelligence",
    description: "Blend market comps with live demand signals to nudge pricing suggestions.",
  },
  {
    icon: "🛡️",
    title: "Compliance guardrails",
    description: "Automatic checklisting keeps imagery, docs, and disclosures on-brand and audit ready.",
  },
];


const managementSuiteCards = [
  {
    icon: "🏡",
    title: "Add & manage properties",
    description:
      "Effortlessly add new properties with detailed information, media, and specs so your entire portfolio stays organized.",
    points: ["Quick property onboarding", "Bulk property import", "Document management"],
  },
  {
    icon: "📊",
    title: "Advanced insights",
    description:
      "Surface the metrics that matter most with ready-made dashboards covering market trends and performance KPIs.",
    points: ["Market value analysis", "Performance tracking", "Predictive analytics"],
  },
  {
    icon: "📣",
    title: "Social media marketing",
    description:
      "Promote listings everywhere your clients are—schedule, publish, and monitor engagement without leaving IMOVA.",
    points: ["Multi-platform posting", "Scheduled campaigns", "Engagement analytics"],
  },
];

const workflowSteps = [
  {
    title: "Add property",
    description: "Upload property details, media, and documents with our intuitive form.",
  },
  {
    title: "Analyze & optimize",
    description: "Review insights and fine-tune pricing or positioning with real-time data.",
  },
  {
    title: "Social promotion",
    description: "Publish optimized content to every social channel without duplicate work.",
  },
  {
    title: "Track performance",
    description: "Monitor engagement, inquiries, and conversions across all campaigns.",
  },
];

const ManageListings = () => {
  const navigate = useNavigate();


  return (
    <>
      <main className="manage-page">
        <section className="manage-hero">
          <div className="manage-hero__content">
            <h1>
              <span className="text-gradient">Master</span> your property management
            </h1>
            <p className="manage-hero__subtitle">
              Manage your portfolio, create new listings, and share content across social media from
              one command center. One login, all your channels.
            </p>
            <div className="manage-hero__actions">
              <button type="button" className="manage-hero__cta" onClick={() => navigate("/pricing")}>
                <span className="manage-hero__cta-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="presentation">
                    <path
                      d="M7 7h10M7 11h10M7 15h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <span>Start managing properties</span>
              </button>
            </div>
          </div>
          {/* Hero image */}
          <figure className="manage-hero__media">
            <img src={manageHero} alt="IMOVA property management workspace" />
          </figure>
        </section>

        {/* Reference-aligned feature suite with three utility cards. */}
        <section className="management-suite">
          <div className="section-heading management-suite__heading">
            <h2>Complete property management suite</h2>
            <p>
              Everything you need to manage properties efficiently—from adding listings to advanced
              analytics and social media marketing.
            </p>
          </div>
          <div className="management-suite__grid">
            {managementSuiteCards.map((card) => (
              <article key={card.title} className="suite-card">
                <span className="suite-card__icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="suite-card__points">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="workflow">
          <div className="section-heading workflow__heading">
            <h2>Streamlined workflow</h2>
            <p>From property addition to social media promotion in just a few clicks.</p>
          </div>
          <ol className="workflow__steps">
            {workflowSteps.map((step, index) => (
              <li key={step.title} className="workflow-step">
                <div className="workflow-step__number">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="manage-highlights">
          <div className="section-heading">
            <p className="eyebrow">Why teams switch to IMOVA</p>
            <h2>Built for modern property operations</h2>
            <p>
              Automate repetitive work, keep listings synchronized, and maximize visibility with tools
              crafted for cross-border real estate teams.
            </p>
          </div>
          <div className="manage-highlights__grid">
            {highlights.map((highlight) => (
              <article key={highlight.title} className="manage-highlight-card">
                <span className="manage-highlight-card__icon" aria-hidden="true">
                  {highlight.icon}
                </span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <section className="manage-cta manage-cta--full">
        <div className="manage-cta__inner">
          <h2>Operate listings like a pro</h2>
          <p>Create, organize, analyze, and publish — all from IMOVA.</p>
          <button
            type="button"
            className="manage-hero__cta manage-cta__button"
            onClick={() => navigate("/pricing")}
          >
            <span className="manage-hero__cta-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="presentation">
                <path
                  d="M7 7h10M7 11h10M7 15h6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <span>Get started</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default ManageListings;
