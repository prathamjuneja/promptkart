export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        padding: "60px 20px",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 80,
        }}
      >
        <h2 style={{ fontWeight: 700 }}>PromptKart</h2>
        <div style={{ opacity: 0.8 }}>Products | Pricing | Contact</div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 48, fontWeight: 800 }}>
          AI Prompt Packs for Businesses
        </h1>

        <p style={{ opacity: 0.7, marginTop: 20 }}>
          Ready-made marketing, automation and business prompts that save time
          and increase sales.
        </p>

        <button
          style={{
            marginTop: 30,
            padding: "14px 28px",
            background: "white",
            color: "black",
            borderRadius: 8,
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          marginTop: 100,
          maxWidth: 1100,
          marginInline: "auto",
        }}
      >
        {[
          { title: "Business Pack", price: "₹1499" },
          { title: "Marketing Pack", price: "₹1499" },
          { title: "Automation Pack", price: "₹1499" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#151515",
              padding: 30,
              borderRadius: 14,
            }}
          >
            <h3>{item.title}</h3>
            <p style={{ opacity: 0.6 }}>High converting AI prompts</p>
            <h2 style={{ marginTop: 12 }}>{item.price}</h2>

            <button
              style={{
                marginTop: 14,
                width: "100%",
                padding: 10,
                borderRadius: 8,
                background: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          marginTop: 120,
          opacity: 0.5,
        }}
      >
        © 2026 PromptKart
      </footer>
    </main>
  );
}
