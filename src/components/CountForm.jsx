import React from "react";

export default function CountForm({ size, setSize }) {
  const [localSize, setLocalSize] = React.useState(size);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        value={localSize}
        onChange={(e) => setLocalSize(e.target.value)}
      />
      <button type="submit" onClick={() => setSize(localSize)}>
        Create
      </button>
    </form>
  );
}
