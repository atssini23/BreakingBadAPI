import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};
export default CharacterGrid;
