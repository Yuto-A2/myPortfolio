// get the photos of my works from the database.
import {useState, useEffect} from "react";
export default function Works() {
  const [works, setWorks] = useState([]);
useEffect(() => {
  const getWorks = async () => {
    let response = await fetch(`https://${process.env.REACT_APP_API_URL}/api/work`);
    let data = await response.json();
    console.log(data);
    setWorks(data);
  }
  getWorks();
}, []);
return (
  <>
      <h2 className="subTitle">Works</h2>
      <div className="worksContainer">
          {works.map((work) => (
              <div className="worksBox" key={work.id}>
                  <a href={work.url}>
                  <img src={`/img/${work.img}`}/>
                  </a>
                  <p>{work.explanation}</p>
              </div> //</div>worksBox
          ))}
      </div>{/* </div>worksContainer */}
  </>
);
}