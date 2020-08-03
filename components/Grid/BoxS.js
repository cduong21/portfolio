const BoxS = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="title">Programming Tools</div>
        <div className="line"></div>
        <p>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript, HTML, CSS</li>
            <li>C++</li>
            <li>React</li>
            <li>Django</li>
            <li>Docker</li>
            <li>Linux, Git</li>
          </ul>
        </p>
      </div>
      <div className="col">
        <div className="title">Design Tools</div>
        <div className="line"></div>
        <p>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe XD</li>
            <li>Adobe After Effects</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>InVision</li>
          </ul>
        </p>
      </div>
      <div className="col">
        <div className="title">Extracirriculars</div>
        <div className="line"></div>
        <p>
          <ul>
            <li>
              Institute Lead | <a>Kravis Leadership Institute</a>{" "}
            </li>
            <li>
              Marketing Public Relations and Fellow |{" "}
              <a>Center for Innovation and Entrepreneurship</a>{" "}
            </li>
            <li>
              Research Assistant | <a>Lowe Institute of Political Economy</a>
            </li>
            <li>
              Design Intern | <a>MyMaskMovement</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="col">
        <div className="title">Interests</div>
        <div className="line"></div>
        <p>
          <ul>
            <li>
              Climbing <span>(conquering v3’s)</span>
            </li>
            <li>
              Ice Cream <span>(@icecwindz on Instagram)</span>
            </li>
            <li>
              Capture the Flag <span>(bug hunting)</span> & OWASP
            </li>
            <li>Longboarding & Biking</li>
          </ul>
        </p>
        <div className="title">Languages</div>
        <div className="line"></div>
        <p>
          <ul>
            <li>Spanish</li>
            <li>Cantonese</li>
            <li>Vietnamese</li>
          </ul>
        </p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .col {
          margin: 1rem 0rem;
          padding: 1.5rem;
          text-align: left;
          background-color: #f4f4f4;
          width: 250px;
          height: 400px;
          border-radius: 15px;
        }
        .line {
          border: 1px solid rgba(0, 0, 0, 0.25);
          width: 100%;
          margin-top: 0.5rem;
        }
        .title {
            font-weight: bold;
        }
        ul {
          width: 100%;
          padding-inline-start: 20px;
        }
        p {
          font-size: 12px;
          margin-top: 0px;
        }
        a {
          color: #ffb951;
        }
        span {
          color: #858585;
        }
      `}</style>
    </div>
  );
};
export default BoxS;
