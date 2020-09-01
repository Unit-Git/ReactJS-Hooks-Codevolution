import React, { useState } from "react";
import { MainCounter } from "../Styled-Components/HookStyled.js";
import { Button } from "../Styled-Components/HookStyled";

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <MainCounter>
      <h2>hook4</h2>
      <div style={{ width: "200px", margin: 0 }}>
        <Button onClick={addItem}>Add Item</Button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ul>
      </div>
    </MainCounter>
  );
}

export default HookCounter4;
