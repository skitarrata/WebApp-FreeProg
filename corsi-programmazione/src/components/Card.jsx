import './Card.css';

function Card({title, imgUrl}){
    return(
        <>
            <div className='card'>
                <img className='img-card' src={imgUrl} width="260" height="120" />
                <h5 className='label-card'>{title}</h5>
            </div>
        </>
    );
}

export default Card;