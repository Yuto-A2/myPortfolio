import {useState, useEffect} from "react";

export default function AboutList() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const getPortfolios = async () => {
      let response = await fetch("http://localhost:8888/api/about");
      let data = await response.json();
      console.log(data);
      setPortfolios(data);
    }
    getPortfolios();
  }, []);

  return (
    <table className="aboutTable">
      <tr>
        <th>Year</th>
        <th>Event</th>
      </tr>
        {
          portfolios.map((portfolio) => (
            <tr>
              <td>{portfolio.lifeEvent}</td>
              <td>{portfolio.year}</td>
            </tr>
          ))
        }
      
  </table>
  );
}