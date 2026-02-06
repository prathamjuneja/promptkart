export default function Home() {
  return (
    <main style={{
      background:"#0b0b0f",
      color:"white",
      fontFamily:"system-ui",
      minHeight:"100vh",
      padding:"40px"
    }}>

      {/* Navbar */}
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <h2 style={{fontWeight:"700"}}>PromptKart</h2>
        <div style={{opacity:0.8}}>
          Products | Pricing | Contact
        </div>
      </nav>

      {/* Hero */}
      <section style={{marginTop:"120px", textAlign:"center"}}>
        <h1 style={{fontSize:"56px", fontWeight:"800"}}>
          AI Prompts That Save 100+ Hours
        </h1>
        <p style={{marginTop:"20px", opacity:0.7}}>
          Ready made prompt packs for founders, marketers and businesses.
        </p>

        <button style={{
          marginTop:"30px",
          padding:"14px 28px",
          background:"#6c63ff",
          border:"none",
          borderRadius:"8px",
          color:"white",
          fontWeight:"600",
          cursor:"pointer"
        }}>
          Explore Products
        </button>
      </section>

      {/* Products */}
      <section style={{marginTop:"140px"}}>
        <h2>Popular Packs</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, 1fr)",
          gap:"20px",
          marginTop:"30px"
        }}>

          {["Business Pack","Marketing Pack","Automation Pack"].map((item)=>(
            <div key={item} style={{
              background:"#15151d",
              padding:"30px",
              borderRadius:"12px"
            }}>
              <h3>{item}</h3>
              <p style={{opacity:0.6}}>High converting AI prompts</p>
              <button style={{marginTop:"10px"}}>Buy Now</button>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer style={{marginTop:"150px", opacity:0.5}}>
        © PromptKart
      </footer>

    </main>
  );
}
