import { useState, useEffect } from "react";
import "./QuoteSection.css";

const BANNER_IMAGE = "https://template.canva.com/EAE0HK7TP7Y/1/0/1600w-fj5Ej0JtAC4.jpg";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const QUOTES = [
  {
    content: "Hope is stronger than fear.",
    author: "Unknown"
  },
  {
    content: "Every day is a second chance.",
    author: "Anonymous"
  },
  {
    content: "You are stronger than you think.",
    author: "Unknown"
  },
  {
    content: "Cancer may touch your life, but it does not define you.",
    author: "Unknown"
  },
  {
    content: "Where there is hope, there is strength.",
    author: "Anonymous"
  },
  {
    content: "Small steps every day lead to big healing.",
    author: "Unknown"
  }
];

function QuoteSection() {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [animate, setAnimate] = useState(false);
  const [copied, setCopied] = useState(false);

  const getRandomQuote = () => {
    const random =
      QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(random);
    setAnimate(true);
    setCopied(false);
    setTimeout(() => setAnimate(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(getRandomQuote, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quote-section">
      <div className="banner-header">
        <img
          src={BANNER_IMAGE}
          alt="Cancer awareness"
          className="banner-img"
          onError={(e) => {
            e.target.src = FALLBACK_IMAGE;
          }}
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">🌟 Cancer Awareness & Hope</h1>
          <p className="banner-subtitle">Find strength, hope, and inspiration every day</p>
        </div>
      </div>

      <div className="quote-container">
        <h2 className="quote-section-title">✨ Daily Inspiration</h2>

        <div className={`quote-content ${animate ? "fade-in" : ""}`}>
          <div className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote className="quote-text">
              {quote.content}
            </blockquote>
            <p className="quote-author">— {quote.author}</p>

            <div className="quote-toolbar">
              <button
                className="icon-btn"
                onClick={getRandomQuote}
                title="New quote"
              >
                ⟳
              </button>

              <button
                className="icon-btn"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    `"${quote.content}" — ${quote.author}`
                  );
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                title="Copy quote"
              >
                {copied ? "✓" : "⧉"}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={getRandomQuote}
          className="new-quote-button"
        >
          ✨ New Quote
        </button>
      </div>
    </section>
  );
}

export default QuoteSection;

