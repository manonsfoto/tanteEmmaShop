import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../utils/dummyItems";
import { Item } from "../utils/interfaces";

const Details = () => {
  const { item_id } = useParams();
  const [itemData, setItemData] = useState<Item>();

  useEffect(() => {
    if (item_id) {
      const item = items.find((singleItem: Item) => {
        singleItem.id === Number(item_id);
        setItemData(item);
      });
    }
  }, []);

  return <section>Details</section>;
};

export default Details;
