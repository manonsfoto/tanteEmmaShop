import items from "../utils/dummyItems";
import ItemCard from "./ItemCard";

const ItemList = () => {
  return (
    <section>
      {items.map((singleItem) => (
        <ItemCard key={singleItem.id} singleItem={singleItem} />
      ))}
    </section>
  );
};

export default ItemList;
