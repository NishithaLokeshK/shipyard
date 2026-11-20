"use client";

import { useState } from "react";
import Stars from "./Stars";

// Heavy interactive client component lazy-loaded via next/dynamic
export default function ProductReviews({ rating }: { rating: number }) {
  const [helpfulCount, setHelpfulCount] = useState(14);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <section className="reviews-section" style={{ marginTop: "2rem", borderTop: "1px solid var(--line)", paddingTop: "1.5rem" }}>
      <h3 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem" }}>Customer Reviews &amp; Verified Ratings</h3>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <Stars rating={rating} />
        <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>{rating} / 5.0</span>
        <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>(Based on 128 verified customer purchases)</span>
      </div>
      <div style={{ background: "var(--bg)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--line)" }}>
        <p style={{ margin: "0 0 0.5rem", fontWeight: 600 }}>&ldquo;Exceptional build quality, lightweight and reliable.&rdquo;</p>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>
          The materials hold up remarkably well and the design is versatile for both daily commutes and outdoor training.
        </p>
        <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            type="button"
            className="chip"
            onClick={() => {
              if (!hasVoted) {
                setHelpfulCount(helpfulCount + 1);
                setHasVoted(true);
              }
            }}
            style={{ cursor: hasVoted ? "default" : "pointer" }}
          >
            👍 Helpful ({helpfulCount})
          </button>
        </div>
      </div>
    </section>
  );
}
