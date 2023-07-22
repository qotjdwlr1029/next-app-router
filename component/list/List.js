"use client";

import { useState, useEffect } from "react";

export default function ListComponent({ input }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(input);
    setList(input);
  }, [list]);

  return (
    <div>
      {!list &&
        list.map((v, i) => {
          return <div key={i}>{JSON.stringify(v)}</div>;
        })}
    </div>
  );
}
