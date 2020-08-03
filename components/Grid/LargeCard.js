const LargeCard = (props) => {
  return (
    <div className="container">
      <div className="box">
        <div className="section-title">{props.title}</div>
        <div className="information">
          <p>{props.content}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .box {
          margin: 0 0 1.5rem 0;
          padding: 1.5rem;
          text-align: left;
          background-color: #f4f4f4;
          width: 550px;
          height: 179px;
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

export default LargeCard;
