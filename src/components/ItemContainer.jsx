import Item from "./Item";
import usePics from "../hooks/usePics";
const ItemContainer = () => {
  const { handleClick, pics, hold, solved } = usePics();
  return (
    <div className="flex flex-wrap items-center m-auto w-11/12 h-full lg:w-1/2">
      {pics.map((pic) => {
        return (
          <div
            className="flex justify-center w-3/12 my-2"
            style={{ order: pic.order }}
            key={pic.id}
            onClick={() => handleClick(pic.id)}
          >
            <Item
              pic={pic.pic}
              hold={hold.includes(pic.id)}
              solved={solved.includes(pic.id)}
              svg={pic.svg}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemContainer;
