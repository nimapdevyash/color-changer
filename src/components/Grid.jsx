import React from "react";
import { useState } from "react";

export default function Grid({ size }) {
  const [clickSequenceNumber, setclickSequenceNumber] = useState(0);
  const [isRevering, setIsReversing] = useState(false);

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
      setIsReversing(true);

      clickSArray.forEach((it) => {
        setTimeout(
          (itemId) => {
            setClicksArray((prev) =>
              prev.map((i) =>
                i.id === itemId ? { ...i, isClicked: false } : i,
              ),
            );

            if (clickSArray[itemId].clickSequenceNumber === -1) {
              setIsReversing(false);
            }
          },
          1000 * (clickSArray.length - it.clickSequenceNumber),
          it.id,
        );
      });
      return;
    }

    const targetId = event.target.id;

    setClicksArray((prev) =>
      prev.map((i) =>
        i.id == targetId
          ? { ...clickSArray[targetId], isClicked: true, clickSequenceNumber }
          : i,
      ),
    );

    setclickSequenceNumber((prev) => prev + 1);
  }

  return (
    <div
      style={{
        top: "50",
      }}
    >
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
              borderRadius: "1rem",
              height: "3rem",
              cursor: "pointer",
              backgroundColor: it.isClicked ? "green" : "black",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {it.id}
          </div>
        ))}

        {isRevering ? (
          <h1 style={{ color: "black", width: "100%" }}> Reversing Now </h1>
        ) : (
          []
        )}
      </div>
    </div>
  );
}
