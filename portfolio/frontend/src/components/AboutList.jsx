import {useState, useEffect} from "react";
export default function AboutList() {
  const [portfolios, setPortfolios] = useState([]);
// this rought get the life event for about page from the database
  useEffect(() => {
    const getPortfolios = async () => {
      let response = await fetch(`https://${process.env.REACT_APP_API_URL}/api/about`);
      let data = await response.json();
      console.log(data);
      setPortfolios(data);
    }
    getPortfolios();
  }, []);
  // show life event
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