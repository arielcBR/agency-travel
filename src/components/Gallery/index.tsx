import { GalleryContainer, GalleryHeader, GalleryImages } from "./styles"
import palacioBarolo from "../../assets/images/palacio-barolo.jpg"
import facultadIngenieria from '../../assets/images/facultad-ingenieria.jpg'
import facultadDerecho from '../../assets/images/facultad-derecho.jpg'
import puertoMadero from "../../assets/images/puerto-madero.jpg"
import rosedal from "../../assets/images/rosedal.jpg"


export function Gallery() {
  return (
    <GalleryContainer>
      <GalleryHeader className="container">
        <h3>Explore uma das culturas mais apaixonantes do mundo</h3>
        <p>
          Ficaríamos encantados em compartilhar com você nossa galeria de fotos
          deslumbrantes de Buenos Aires! Nossa coleção inclui uma variedade de
          imagens que mostram a beleza arquitetônica, o patrimônio cultural e as
          atrações únicas de <span> "la ciudad de la furia"</span>.
        </p>
      </GalleryHeader>
      <GalleryImages>
        <img className="hide" src={facultadIngenieria} alt="" />
        <img src={palacioBarolo} alt="" />
        <img src={puertoMadero} alt="" />
        <img src={rosedal} alt="" />
        <img className="hide" src={facultadDerecho} alt="" />
      </GalleryImages>
    </GalleryContainer>
  );
}
