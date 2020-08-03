const BoxM = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="stretch">
          <div className="section-title">PolyOperations</div>
          <div className="date"> JUN 2020 - PRESENT</div>
        </div>
        <div className="subtitle">Front End Developer Intern</div>
        <div className="line"> </div>
        <p>
          <ul>
            <li>
              Create custom dashboards and projections for clients to better
              manage their businesses
            </li>
            <li>
              Implement new features and debug the interface in adherence to UX
              guidelines
            </li>
            <li>Ideate and implement new onboarding features</li>
          </ul>
        </p>
      </div>
      <div className="col">
        <div className="section-title">PolyOperations</div>
        <div className="subtitle">Front End Developer Intern</div>
        <p>
          <ul>
            <li>
              Create custom dashboards and projections for clients to better
              manage their businesses
            </li>
            <li>
              Implement new features and debug the interface in adherence to UX
              guidelines
            </li>
            <li>Ideate and implement new onboarding features</li>
          </ul>
        </p>
      </div>
      <div className="col">
        <div className="section-title">PolyOperations</div>
        <div className="subtitle">Front End Developer Intern</div>
        <p>
          <ul>
            <li>
              Create custom dashboards and projections for clients to better
              manage their businesses
            </li>
            <li>
              Implement new features and debug the interface in adherence to UX
              guidelines
            </li>
            <li>Ideate and implement new onboarding features</li>
          </ul>
        </p>
      </div>
      <style jsx>{`
        ul {
          width: 100%;
          padding-inline-start: 20px;
        }
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
          width: 355px;
          height: 400px;
          border-radius: 15px;
        }
        .section-title {
          margin: 0px 0px 5px 0px;
          font-weight: bold;
        }
        p {
          font-size: 12px;
          margin-top: 0px;
        }
        .date {
          font-size: 10px;
        }
        .stretch {
          display: flex;
          justify-content: space-between;
        }
        .line {
          border: 1px solid rgba(0, 0, 0, 0.25);
          width: 100%;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default BoxM;
