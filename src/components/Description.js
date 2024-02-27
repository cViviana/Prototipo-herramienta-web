
const Description = ({url,title, text}) => {
  return (
    <div className="recommendation_description">
        <div className="div_imagen">
            <img src={url} alt={title}/>
        </div>
        <p className="title2">{title}:</p>
        <div className="text">
            <p>{text}</p>
        </div>        
    </div>
  );
};

export default Description;