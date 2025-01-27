import { Link } from "react-router-dom";
import { Item } from "../utils/interfaces";
import { FC } from "react";

interface ItemCardProps {
  singleItem: Item;
}

const ItemCard: FC<ItemCardProps> = ({ singleItem }) => {
  return (
    <article>
      <img src={singleItem.img_url} alt={singleItem.name} />
      <p>{singleItem.name}</p>
      <p>€ {singleItem.price}</p>
      <Link to={`/details/${singleItem.id}`}>
        <button type="button">Details</button>
      </Link>
    </article>
  );
};

export default ItemCard;
