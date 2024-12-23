// get the photos of my works from the database.
import { useState, useEffect, useRef } from "react";
export default function Works() {
  const [works, setWorks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); //Current index
  const worksContainerRef = useRef(null); // get slide content

  useEffect(() => {
    const getWorks = async () => {
      let response = await fetch("https://my-portfolio-backend-chi.vercel.app/api/work");
      let data = await response.json();
      console.log(data); 
      setWorks(data);
    };
    getWorks();
  }, []);

  // move slides
  const moveSlide = (direction) => {
    const container = worksContainerRef.current;
    if (!container) return;

    let newIndex = currentIndex + direction;

    // out of index
    if (newIndex < 0) {
      newIndex = works.length - 1; 
    } else if (newIndex >= works.length) {
      newIndex = 0; 
    }

    setCurrentIndex(newIndex); //  new index
    const slideWidth = container.getBoundingClientRect().width; 
    container.style.transform = `translateX(${-slideWidth * newIndex}px)`; 
  };

  return (
    <>
      <h2 className="subTitle">Works</h2>
      <div className="carousel">
        <div className="worksContainer">
          <div
            className="worksBox"
            ref={worksContainerRef}
            style={{
              transform: `translateX(${-100 * currentIndex}%)`, 
            }}
          >
            {works.map((work) => (
              <div className="workContent" key={work._id}>
                <a href={work.url}>
                  <img className="workImg" src={`/img/${work.img}`} alt={work.explanation} />
                </a>
                <p className="workExplain" >{work.explanation}</p>
              </div>
            ))}
          </div>
        </div>
        <button id="prev" onClick={() => moveSlide(-1)}>&laquo;</button>
        <button id="next" onClick={() => moveSlide(1)}>&raquo;</button>
      </div>
      {/* Current slide navigation */}
      <nav className="currentCircle">
        {works.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "current" : ""} 
            onClick={() => setCurrentIndex(index)} 
          ></button>
        ))}
      </nav>
    </>
  );
}
