export default function Products() {
  const packs = [
    { name: "Business Pack", price: 1499, desc: "High converting AI prompts" },
    { name: "Marketing Pack", price: 1499, desc: "Ads, reels, captions, growth prompts" },
    { name: "Automation Pack", price: 1499, desc: "Workflows, systems, productivity prompts" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "60px 40px",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 40 }}>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 30,
        }}
      >
        {packs.map((p) => (
          <div
            key={p.name}
            style={{
              background: "#151515",
              padding: 30,
              borderRadius: 12,
            }}
          >
            <h3>{p.name}</h3>
            <p style={{ opacity: 0.7 }}>{p.desc}</p>
            <p>₹{p.price}</p>
            <button style={{ marginTop: 10 }}>Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
