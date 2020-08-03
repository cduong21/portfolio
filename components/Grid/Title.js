const Title = (props) => {
  return (
    <div className="container">
      <div className="title">{props.title}</div>
      <style jsx>{`
        .container {
          width: 1280px;
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 2.5rem;
        }
        .title {
          font-weight: 600;
          font-size: 40px;
          line-height: 54px;
          letter-spacing: 0.02em;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Title;
