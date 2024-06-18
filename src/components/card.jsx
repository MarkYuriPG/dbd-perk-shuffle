import '../components/card.css';

const Card = ({name, image}) =>{
    console.log(image);
    return(
        <div className="card">
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
        </div>
    );
}

export default Card;