export default function Service () {
    return (
        <> 
          <h2 className="subTitle">Service</h2>
          <div className="serviceContainer">
            <div className="service-box1">
              <p className="titleDesign">Design</p>
              <p className="serviceImg"><img src="/img/disignIcon.png" alt="" /></p>
              <p className="serviceExplain">The key for good design is to know clients need.</p>
              <p className="serviceExplain">We will listen to client's need and we will build the foundation of the effective websites.</p>
          </div>{/* service-box1 */}
            <div className="service-box2">
              <p className="titleDesign">Coding</p>
              <p className="serviceImg"><img src="/img/codingIcon.png" alt="" /></p>
              <p className="serviceExplain2">I know not only how to code also but SEO because I have affiliate websites.</p>
              <p className="serviceExplain2">I will create an SEO-friendly website using both front-end and back-end technologies.</p>
              <p className="serviceExplain2">I also know the back end languages such as Node.js, php or C# </p>
            </div>{/* service-box2 */}
          </div>  {/* serviceContainer */}
        </>
    )
}