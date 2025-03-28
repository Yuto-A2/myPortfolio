export default function AboutComponent() {
  return (
    <>
      <h2 className="subTitle">About</h2>
      <div className="about">
        <div className="aboutPhoto">
          <p>Yuto Arimori</p>
          <p><img className="profileImg" src="/img/yutoA2.jpg" alt="profile photo" /></p>
        </div>
        <h3 className="aboutHeader">Work Experience</h3>
        {/* preply */}
        <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">Preply</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Japanese Tutor</p>
              </div>
              {/* <div className="year"><p>April 2020</p> <p>-</p> <p>Current</p></div> */}
              <div className="year">April 2020 - Current</div>
              <ul>
                <li>Teaching Japanese with strong communication skills, consistently guiding students to pass their Japanese exams each year.</li>
                <li>Preparing comprehensive lesson plans, dedicating one to two hours of preparation for each class.</li>
                <li>Coaching and motivating students, fostering improved engagement and a positive learning attitude.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* j-tech */}
        <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">J-TECH CREATIONS</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Web Application Developer</p>
              </div>
              <div className="year">November 2024 - December 2024</div>
              {/* <div className="year"><p>November 2024</p> <p>-</p> <p>December 2024</p></div> */}
              <ul>
                <li>Designed website layouts using Figma and created comprehensive architecture plans.</li>
                <li>Developed web applications integrated with PostgreSQL, leveraging .NET and SEKIBAN, an event-sourcing framework.</li>
                <li>Built front-end interfaces for websites using modern frameworks and tools, ensuring seamless integration with back-end systems for efficient data processing and user interaction.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Techer */}
        <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">Elementary school in Fukuoka, Japan</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Elementary school teacher</p>
              </div>
              {/* <div className="year"><p>April 2020</p> <p>-</p> <p>Current</p></div>*/}
              <div className="year">April 2015 - March 2017</div>
              <ul>
                <li>Taught various subjects and supported students in achieving scores above the national average.</li>
                <li>Managed classes of up to 32 students, ensuring effective learning and classroom engagement.</li>
                <li>Developed well-structured curricula, demonstrating strong organizational and planning skills.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="aboutEducation">Education</h3>
        {/* humber */}
        <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">Humber College</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Ontario Graduate Certificate</p>
                <p className="position">Web Development</p>
              </div>
              <div className="year">January 2024 - December 2024</div>
              <ul>
                <li>Relevant coursework: HTML, CSS, JavaScript, ReactJS, C#, PHP, Node.js, SQL, MongoDB, and design tools such as Figma and Miro.</li>
                <li>Consistently met deadlines and applied front-end and back-end technologies to develop web applications, including a sales site and a task management app, earning recognition on the Dean's List for two consecutive terms.</li>
                <li>Designed a website using Figma and developed a portfolio with the MERN stack within two weeks, achieving a success rate of over 80%.</li>
                <li>Achieved a GPA of 83.5 (Summer term 2024).</li>
              </ul>
            </div>
          </div>
        </div>

      {/* tsom */}
      <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">Toronto School of Management</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Diploma</p>
                <p className="position">Fundamentals of Hospitality and Tourism</p>
              </div>
              <div className="year">July 2021 - April 2023</div>
              <ul>
                <li>Courses include: Accounting Fundamentals, Food and Safety Management, Customer Service, and others.</li>
                <li>High focus on Canadian marketplace and industry.</li>
              </ul>
            </div>
          </div>
        </div>
        
         {/* fukudai */}
      <div className="aboutExplain">
          <div className="left-content">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="right-content">
            <div className="row">
              <span className="text">University of Fukuoka</span>
            </div>
            <div className="textExplain">
              <div className="positionBox">
                <p className="position">Bachelor of Arts</p>
                <p className="position">Education and Psychology</p>
              </div>
              <div className="year">April 2010 - March 2014</div>
              <ul>
                <li>Courses include: Education, Developmental Psychology, Teaching Methods, Education and Law, Medical Psychology, Clinical Psychology, and others.</li>
                <li>Volunteer work in elementary schools.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* コメントを保持 */}
        {/* 
          <p>I take Web Development Program.</p>
          <p>I learn coding and web design.</p>
          <p>My goal is to help you make a website you want.</p>
          <p>I know not only how to code and design also but SEO and web marketing.</p>
          <p>Please contact me for more information.</p>
        */}
      </div>{/* about */}
    </>
  )
}
