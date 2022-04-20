import Card from "../card/card.component";

import './card-list.styles.css'

const CardList = ({ kitties }) => {

    return (
        <div className="card-list">
        {kitties.map((kitties) => {
            const { id, name, email } = kitties;
            return (
                <Card id={id} name={name} email={email} />
            );
        })}
    </div>
    );
};

export default CardList;


