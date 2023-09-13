import GOODS from "../../constants";
import Item from "../item/Item";

export default function GoodsList() {
  return (
    <>
      {GOODS.map((item) => {
        return <Item props={item} />;
      })}
    </>
  );
}
