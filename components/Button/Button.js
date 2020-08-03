const Button = (props) => {
  return (
    <div className="container">
      <div className="button">
        <div className="content">{props.title}</div>
      </div>
      <style jsx>{`
        .content {
            text-align: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }
        .button {
            width: 218px;
            height: 41px;
            background: #FFB951;
            border-radius: 20px;
            text-align: center;
            margin: 2rem auto;
            display: flex;
            justify-content: center;
            align-items: center;
      `}</style>
    </div>
  );
};
export default Button;
