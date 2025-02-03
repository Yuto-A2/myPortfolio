// get the photos of my works from the database.
import { useState, useEffect, useRef } from "react";

export default function Works() {
  const [works, setWorks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const worksContainerRef = useRef(null);

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

    if (newIndex < 0) {
      newIndex = works.length - 1;
    } else if (newIndex >= works.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
    const slideWidth = container.getBoundingClientRect().width;
    container.style.transform = `translateX(${-slideWidth * newIndex}px)`;
  };

  // Open modal
  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="subTitle">Projects</h2>
      <div className="clickInfo">
        <p>Click on the images to get more information.</p>
      </div>
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
              <div className="workContent" key={work._id} onClick={() => openModal(work)}>
                <img className="workImg" src={`/img/${work.img}`} alt={work.explanation} />
                <p className="workExplain">{work.language}</p>
              </div>
            ))}
          </div>
        </div>
        <button id="prev" onClick={() => moveSlide(-1)}>&laquo;</button>
        <button id="next" onClick={() => moveSlide(1)}>&raquo;</button>
      </div>

      <nav className="currentCircle">
        {works.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "current" : ""}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </nav>

      {/* Modal */}
      {isModalOpen && selectedWork && (
        <div className="modalContainer">
          <div className="modalBox">
            <div className="close" onClick={closeModal}>×</div>
            <img src={`/img/${selectedWork.img}`} alt="work image" />
            <h3>Languages Used in the Project</h3>
            <div className="languageBox">
              <p>{selectedWork.language}</p>
            </div>

            <h3>Links</h3>
            {selectedWork.url.map((link, index) => (
              <div key={index}>
                <p>
                  {link.Site && (
                    <a href={link.Site} target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-link"></i> Visit the Website
                    </a>
                  )}
                </p>
                <p>
                  {link.GitHub && (
                    <a href={link.GitHub} target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-github"></i> Visit GitHub
                    </a>
                  )}
                </p>
              </div>
            ))}

            <h3>About the work</h3>
            <div className="workExplainBox">
              {selectedWork.explanation.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <h3>Features</h3>
              <ul>
                {selectedWork.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
