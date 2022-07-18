function Content(props) {
  return (
    <div className="text" style={{ border: `8px solid ${props.color}` }}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Content;
