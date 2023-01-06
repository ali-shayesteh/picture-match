import { Transition } from "@headlessui/react";
import itemBg from "../assets/itemBg.svg";
import qMark from "../assets/qMark.svg";

const Item = ({ pic, solved, hold, svg }) => {
  return (
    <div
      className="h-32 w-32 flex justify-center items-center rounded cursor-pointer"
      style={{ background: `url(${itemBg}) no-repeat center center` }}
    >
      {solved || hold? (
        <Transition
          show={solved || hold}
          appear={true}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <img className="h-28 w-28 -mt-3" src={svg} />
        </Transition>
      ) : (
        <div className="flex flex-col items-center py-16 overflow-hidden">
          <Transition
            show={!hold}
            appear={true}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <img className="h-28 w-28 " src={qMark} />
          </Transition>
        </div>
      )}
    </div>
  );
};

export default Item;
