const MediumCard = (props) => {
  return (
    <div className="container">
      <div className="col">
        <div className="section-title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
        <p>
          <ul>
            <li>
              {props.content}
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
          margin-top: 30px;
        }
        .col {
          margin: 1rem 2rem;
          padding: 1.5rem;
          text-align: left;
          background-color: #f4f4f4;
          width: 340px;
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
      `}</style>
    </div>
  );
};

export default MediumCard;
