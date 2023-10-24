import { useState } from "react";
import Item from "./Item";

function PackingList({
  itemList,
  handletoggle,
  handleDelete,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = itemList;

  if (sortBy === "description")
    sortedItem = itemList
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));

  if (sortBy === "packed")
    sortedItem = itemList
      .slice()
      .sort((a, b) => Number(a.packed) + Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          <Item
            itemList={sortedItem}
            handletoggle={handletoggle}
            handleDelete={handleDelete}
          />
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleClearList}>Clear list</button>
        </div>
      </div>
    </>
  );
}

export default PackingList;
