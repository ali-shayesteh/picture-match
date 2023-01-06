import { useEffect, useState } from "react";

import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";
import pic4 from "../assets/pic4.svg";
import pic5 from "../assets/pic5.svg";
import pic6 from "../assets/pic6.svg";
import pic7 from "../assets/pic7.svg";
import pic8 from "../assets/pic8.svg";
import pic9 from "../assets/pic9.svg";
import pic10 from "../assets/pic10.svg";

const rnd = () => Math.floor(Math.random() * 3);
const pics = [
  { id: 1, pic: 1, order: rnd(), svg: pic1 },
  { id: 2, pic: 1, order: rnd(), svg: pic1 },
  { id: 3, pic: 2, order: rnd(), svg: pic2 },
  { id: 4, pic: 2, order: rnd(), svg: pic2 },
  { id: 5, pic: 3, order: rnd(), svg: pic3 },
  { id: 6, pic: 3, order: rnd(), svg: pic3 },
  { id: 7, pic: 4, order: rnd(), svg: pic4 },
  { id: 8, pic: 4, order: rnd(), svg: pic4 },
  { id: 9, pic: 5, order: rnd(), svg: pic5 },
  { id: 10, pic: 5, order: rnd(), svg: pic5 },
  { id: 11, pic: 6, order: rnd(), svg: pic6 },
  { id: 12, pic: 6, order: rnd(), svg: pic6 },
  { id: 13, pic: 7, order: rnd(), svg: pic7 },
  { id: 14, pic: 7, order: rnd(), svg: pic7 },
  { id: 15, pic: 8, order: rnd(), svg: pic8 },
  { id: 16, pic: 8, order: rnd(), svg: pic8 },
  { id: 17, pic: 9, order: rnd(), svg: pic9 },
  { id: 18, pic: 9, order: rnd(), svg: pic9 },
  { id: 19, pic: 10, order: rnd(), svg: pic10 },
  { id: 20, pic: 10, order: rnd(), svg: pic10 },
];

const usePics = () => {
  const [hold, setHold] = useState([]);
  const [solved, setSolved] = useState([]);
  const handleClick = (id) => {
    if (solved.includes(id)) return;
    setHold((cur) => (cur.includes(id) ? cur : [...cur, id]));
  };

  useEffect(() => {
    setHold(pics.map(pic => pic.id));
    setTimeout(() => {
      setHold([]);
    }, 2000);
  }, []);

  useEffect(() => {
    const checkHold = () => {
      if (hold.length === 2) {
        const pic1 = pics.find(({ id }) => id === hold.at(0));
        const pic2 = pics.find(({ id }) => id === hold.at(1));
        if (pic1.pic === pic2.pic) {
          setSolved((cur) => (cur.includes(pic1.id) ? cur : [...cur, pic1.id]));
          setSolved((cur) => (cur.includes(pic2.id) ? cur : [...cur, pic2.id]));
          setHold([]);
        } else {
          setTimeout(() => {
            setHold([]);
          }, 1000);
        }
      }
    };
    checkHold();
  }, [hold]);

  useEffect(() => {
    if (solved.length === pics.length) {
      alert("YOU WIN!");
      setTimeout(() => {
        setHold([]);
        setSolved([]);
      }, 2000);
    }
  }, [solved]);
  return {
    handleClick,
    pics,
    hold,
    solved,
  };
};

export default usePics;
