import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";
function Gallery({ projects = [] }) {
  const [activeCard, setActiveCard] = useState({});
  const galleryRef = useRef();
  const cardPositionStep = useRef(0);
  const cardStepOffset = 50;

  const galleryCards = projects.map((project) => {
    return <GalleryCard key={project.name} project={project} />;
  });
  galleryCards.push(
    <GalleryCard key={"test1-1"} project={{ name: "puk1" }} isActive={false} />
  );
  galleryCards.push(
    <GalleryCard key={"test2"} project={{ name: "puk2" }} isActive={false} />
  );
  galleryCards.push(<GalleryCard key={"test3"} project={{ name: "puk3" }} />);
  galleryCards.push(<GalleryCard key={"test4"} project={{ name: "puk4" }} />);
  galleryCards.push(<GalleryCard key={"test5"} project={{ name: "puk5" }} />);

  const gallery = (
    <ul ref={galleryRef} className="gallery-list">
      {galleryCards}
    </ul>
  );
  /* const handleGalleryScroll = (e) => {
    console.log(e.target.scrollLeft);
    e.target.scrollLeft = scrollMiddlePosition.current;
  }; */
  useEffect(() => {
    const scrollWidth = galleryRef.current.scrollWidth;
    const clientWidth = galleryRef.current.clientWidth;
    const realScrollWidth = scrollWidth - clientWidth;
    return () => {
      const centralCardIndex = Math.floor((galleryCards.length - 1) / 2);
      const activeCard = galleryCards[centralCardIndex];
      cardPositionStep.current = realScrollWidth / galleryCards.length;
      console.log(realScrollWidth);
      console.log(centralCardIndex);
      console.log(cardPositionStep.current);
      galleryRef.current.scrollLeft =
        centralCardIndex * cardPositionStep.current;
      console.log(galleryRef.current.scrollLeft);
    };
  }, [galleryCards]);
  return <>{gallery}</>;
}

Gallery.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
