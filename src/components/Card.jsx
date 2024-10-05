import { useState, useEffect } from 'react';
import './Card.css';

function Card({title, typelan, url}){

    const [imgUrl, setImgUrl] = useState(null);
    
    useEffect(() => {
        if (typelan == "JavaScript"){
            setImgUrl("./javascript.jpg");
        } else if (typelan == "HTML"){
            setImgUrl("./html.jpg");
        } else if (typelan == "CSS"){
            setImgUrl("./css.jpg");
        } else if (typelan == "Java"){
            setImgUrl("./java.jpg");
        } else if (typelan == "C++"){
            setImgUrl("./c++.jpg");
        } else if (typelan == "C#"){
            setImgUrl("./cs.jpg");
        } else if (typelan == "C"){
            setImgUrl("./c.jpg");
        } else if (typelan == "Python"){
            setImgUrl("./python.jpg");
        } else {
            setImgUrl(null);
        }
      }, [typelan, title, url]);


    return(
        <>
            <div className='card'>
                <img className='img-card' src={imgUrl} onClick={url == "" ? null : () => window.open(url, '_blank')} width="260" height="120" />
                <h5 className='label-card'>{title}</h5>
            </div>
        </>
    );
}

export default Card;