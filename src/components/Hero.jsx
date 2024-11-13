export function Hero() {
    return (
      <section className="hero">
        <div id="home" className="hero-content">
          <h1>KREASI PRODUCTION </h1>
          <h3>Melayani Foto, Percetakan dan Sablon</h3>
           </div>
        <div className="kreasi-image">
        <img src={`${process.env.PUBLIC_URL}/kreasi heroo.png`} alt="kreasihero"/>
      </div>
    </section>
  );
  };