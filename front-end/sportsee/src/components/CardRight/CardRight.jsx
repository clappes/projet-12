
import "./CardRight.css"

function CardRight(props) {

    const {icon, count, type} = props
    var color = ''

    switch (type) {
        case 'Calories':
            color = 'red'
            break;
        case 'Proteines':
            color = 'blue'
            break;
        case 'Glucides':
            color = 'yellow'
            break;
        case 'Lipides':
            color = 'pink'
            break;
        default:
            break;
    }

    return (
        <div className='card'>
            <div className={'card-icon card-icon_' + color}>
                <img src={icon} alt="icon" />
            </div>
            <div className='card-description'>
                <p className="card-number">{type === "Calories" ? count + "kCal" : count + "g"}</p>
                <p className="card-numbertype">{type}</p>
            </div>
        </div>
    );
}

export default CardRight;