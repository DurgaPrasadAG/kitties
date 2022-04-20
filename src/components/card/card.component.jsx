import './card-container.styles.css'

const Card = ({id, name, email}) => {
    return (
        <div className="card-container" key={id}>
            <img
                alt={`kitties ${name}`}
                src={`https://robohash.org/${id}/?set=set4&size=180x180`}
            >
            </img>
            <h3>{name}</h3>
            <p>{email}</p>
            <br></br>
        </div>
    )
}

export default Card;