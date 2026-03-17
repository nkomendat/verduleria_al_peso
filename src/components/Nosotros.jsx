const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2 className="nosotros-title">Sobre Nosotros</h2>

      <div className="nosotros-row">
        <div className="nosotros-text">
          <p>
            Somos expertos en frescura y calidad, con más de 40 años de
            experiencia seleccionando los mejores productos para nuestros
            clientes. Nuestro compromiso es ofrecerte productos frescos, de alta
            calidad y a precios competitivos.
          </p>
        </div>

        <div className="nosotros-image">
          <img
            src="https://i.postimg.cc/g0YtYC6p/img1_714329df05607010f7ea.jpg"
            alt="Verduras frescas en el mercado"
          />
        </div>
      </div>

      <div className="nosotros-row">
        <div className="nosotros-image">
          <img
            src="https://i.postimg.cc/TPRNRzWG/img2_f3702193291f329f50c3.jpg"
            alt="Frutas y verduras del mercado"
          />
        </div>

        <div className="nosotros-text">
          <p>
            Diariamente recorremos cada rincón del Mercado Central,
            seleccionando con cuidado las frutas y verduras de productores
            nacionales e internacionales para brindarte una gran variedad con la
            mejor calidad, al mejor precio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;