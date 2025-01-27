import { useEffect } from "react";
import { useParams } from "react-router-dom";
import items from "../utils/dummyItems";

const Details = () => {
  const { item_id } = useParams();

  useEffect(() => {
    const item = items.find((item) => {
      item.id === Number(item_id);
    });
  }, []);

  return <section>Details</section>;
};

export default Details;
