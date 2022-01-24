import './styles/Box.css';

export default function Box({propsImage, propsText, bgColor}){

    return(
        <div className="box" style={{'--bg-color': `${bgColor}`}}>
            <img className="box-image" src={propsImage} alt="image"/>
            <p className="box-text">
                {propsText}
            </p>
      

        </div>
    )
}