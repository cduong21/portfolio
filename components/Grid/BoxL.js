const BoxL = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="section-title">Education</div>
        <div className="information">
          <p>
            Claremont McKenna College <br />
            Bachelors of Arts in Computer Science (completed through Harvey Mudd
            College) <br />
            Yonsei University <br />
            Focus on South East Asia’s Political Economic Development and
            Culture
          </p>
        </div>
      </div>
      <div className="box">
        <div className="section-title">Courses</div>
        <div className="information">
          <p>
            Principles of CS / Discrete Mathematics / Computability and Logic /
            Algorithms / Software Development / Economic Statistics / Data
            Structures and Program Development / Facebook Above and Beyond
            Computer Science Fall 2020: Programming Languages / Data Science /
            Clinic
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin-bottom: 3rem;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .box {
          margin: 0 1rem 1.5rem 0;
          padding: 1.5rem;
          text-align: left;
          background-color: #f4f4f4;
          width: 550px;
          height: 200px;
          border-radius: 15px;
        }
        .section-title {
          margin: 0px 0px 5px 0px;
          font-weight: bold;
        }
        .information {
          font-size: 12px;
          margin-top: 0px;
        }
      `}</style>
    </div>
  );
};
export default BoxL;
