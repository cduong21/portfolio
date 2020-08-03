function MainContent() {
  return (
    <div className="container">
      <div className="main-content">
        <img src="profile.jpg"></img>
        <div className="text">
          <div className="intro">Hey there! <span>I’m Cindy.</span></div>
          <div className="bio">
            I’m a senior at Claremont McKenna College who enjoys leveraging code
            + design to build human-centric technology.{" "}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 20rem;
        }
        .name {
          font-size: 30px;
          padding: 1.5rem;
        }
        ul {
          list-style-type: none;
          text-align: right;
        }
        li {
          margin: 2rem 1rem;
        }
        .main-content {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          max-width: 850px;
          margin-top: 0px;
        }
        .text {
          padding-left: 2rem;
          letter-spacing: 0.02em;
          line-height: 29px;
        }
        .intro {
          font-weight: 600;
          font-size: 40px;
          line-height: 54px;
          letter-spacing: 0.02em;
        }
        span {
          color: #FFB951;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
