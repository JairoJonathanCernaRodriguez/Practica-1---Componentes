import "react-responsive-carousel/lib/styles/carousel.min.css"; // estilos predeterminados
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel() {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
      <div>
        <img src="/file.svg" alt="Imagen 1" style={{ width: '400px', height: '250px' }} />
        <p className="legend">Imagen 1</p>
      </div>
      <div>
        <img src="/globe.svg" alt="Imagen 2" style={{ width: '400px', height: '250px' }} />
        <p className="legend">Imagen 2</p>
      </div>
      <div>
        <img src="/vercel.svg" alt="Imagen 3" style={{ width: '400px', height: '250px' }} />
        <p className="legend">Imagen 3</p>
      </div>
      <div>
        <img src="/window.svg" alt="Imagen 4" style={{ width: '400px', height: '250px' }} />
        <p className="legend">Imagen 4</p>
      </div>
    </Carousel>
  );
}
