import { Component } from "react";

class Card extends Component {
    render(){
        const { email, id, name} = this.props.monster;
        return (
        <div className='card-container' key = {id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        );
    }
}

export default Card;