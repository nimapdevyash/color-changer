import React from "react";
import { useState } from "react";

export default function Grid({ size }) {
  const [clickSequenceNumber, setclickSequenceNumber] = useState(0);

  const [clickSArray, setClicksArray] = React.useState(
    Array(size * size)
      .fill(-1)
      .map((_, index) => ({
        id: index,
        isClicked: false,
        clickSequenceNumber: -1,
      })),
  );

  function handleClick(event) {
    event.preventDefault();

    if (clickSequenceNumber === size * size - 1) {
      setclickSequenceNumber(0);

      clickSArray.forEach((it) => {
        setTimeout(
          (itemId) => {
            setClicksArray((prev) =>
              prev.map((i) =>
                i.id === itemId ? { ...i, isClicked: false } : i,
              ),
            );
          },
          1000 * (clickSArray.length - it.clickSequenceNumber),
          it.id,
        );
      });
      return;
    }

    const targetId = event.target.id;

    setClicksArray((prev) => {
      const re = prev.map((i) =>
        i.id == targetId
          ? { ...clickSArray[targetId], isClicked: true, clickSequenceNumber }
          : i,
      );

      console.log(re);
      return re;
    });

    setclickSequenceNumber((prev) => prev + 1);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: Array(size).fill("1fr").join(" "),
        color: "white",
      }}
    >
      {clickSArray.map((it) => (
        <div
          onClick={handleClick}
          id={it.id}
          key={it.id}
          style={{
            backgroundColor: it.isClicked ? "green" : "black",
            margin: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {it.id}
        </div>
      ))}
    </div>
  );
}
