import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';
import { Character } from "./characterInterface";

interface CharacterGridProps {
    items: Character[],
    isLoading: boolean,
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : <section className="cards">
        {items.map((item: Character) => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharacterGrid;
