import React, { FC } from 'react';
import './poke-card.css'
import { Pokemon } from '../../model/pokemon';
import TypeIcon from '../type-icon/TypeIcon';


interface PokeCardProps {
  pokemon: Pokemon;
  click:()=>void;
}

const PokeCard: FC<PokeCardProps> = (props) => {

  return (
    <div className='bg' onClick={props.click}>
      <div className="card">
        <img src={props.pokemon.sprites.official_artwork} alt='thumb'></img>

        <div className="details">
          <h1>{props.pokemon.name}</h1>

          <div className='wth-container'>
            <div className="weight-container">
              <h2>{props.pokemon.weight}kg</h2>
              <h3>WEIGHT</h3>
            </div>
            <hr className='vertical-hr'/>
            <div className="types-container">
              {props.pokemon.types.map((type, index, arr) => {
                return(
                  <div className='type-group'>
                    <div className='type-container'>
                      <TypeIcon name={type.type.name}/>
                    </div>
                    <h3>{props.pokemon.types[index].type.name}</h3>
                  </div>
                )
              })}
            </div>
            <hr className='vertical-hr'/>
            <div className="height-container">
              <h2>{props.pokemon.height}m</h2>
              <h3>HEIGHT</h3>
            </div>
          </div>
          
          <hr className='horizontal-hr'/>
        </div>

      </div>
    </div>
  )
};

export default PokeCard;