import './Studied.css'

export default function Studied() {
    return (
        <>
            <div className='headerTitle'>
                <h2 className="subTitle2">Why You Will Love Me</h2>
            </div>
            <div className="studyContainer">
                <div className="studiedBox">
                    <a href="/img/deanList.jpg"><img src="../img/deanList.jpg" alt="" /></a>
                </div>
                <div className="studiedContent">
                    <h3 className="subTitle3">Enthusiam</h3>
                    <p>I have consistently demonstrated a strong commitment to academic excellence, achieving an 80% or higher success rate and being named to the Dean&#39;s List twice. </p>
                    <p>While in Japan, I was dedicated to enhancing my skills as an educator, leading a grade level that had previously performed below the national average to surpass the national benchmark within a year. Now, as I advance my career as a professional engineer, I am continuously refining my skills not only through formal education but also by completing Udemy courses and studying technical literature.</p>
                </div>
            </div>

            <div className="studyContainer">
                <div className="studiedBox">
                    <a href="/img/teamPhoto.JPG"><img src="../img/teamPhoto.JPG" alt="" /></a>
                </div>
                <div className="studiedContent">
                    <h3 className="subTitle3">Team work</h3>
                    <p>I participated in a team project to design the introduction website for Humber e-Sports. Through collaborative discussions, we utilized Figma not only to design the pages but also to develop the site&#39;s architecture, define user personas, and create a style guide. </p>
                    <p>By working closely as a team to understand the client&#39;s needs and align our planning accordingly, I strengthened my ability to conceptualize and execute projects that meet specific requirements.</p>

                </div>
            </div>

            <div className="studyContainer">
                <div className="studiedBox">
                    <a href="/img/grade.jpg"><img src="../img/grade.jpg" alt="" /></a>
                    <p>Click the photo to see the details.</p>
                </div>
                <div className="studiedContent">
                    <h3 className="subTitle3">Professionalism</h3>
                    <p>I have developed applications using a wide range of programming languages, including HTML, CSS, JavaScript, Node.js, React.js, Next.js, TypeScript, C#, and PHP. Additionally, I am well-versed in database management with MySQL and MongoDB and have experience developing applications with authentication features using Supabase.</p>
                    <p>I have independently designed and planned applications from scratch. During my internship, I was responsible for creating project proposals, designing UI/UX with Figma, structuring databases, and developing web applications using C# and Razor for both the frontend and backend. My work was highly evaluated, receiving the highest rating of 5 out of 5 in most categories.</p>
                </div>
            </div>
        </>
    )
}