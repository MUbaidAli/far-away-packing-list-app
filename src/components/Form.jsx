import { useState } from "react";
import toast from "react-hot-toast";

function Form({ setItemList }) {
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState("");

  {
    // console.log(itemName, itemCount);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !itemCount) {
      return toast.error("Enter Correct Credditionals");
    }
    const newItem = {
      itemName,
      itemCount,
      packed: false,
      _id: Date.now(),
    };

    setItemList(newItem);
    setItemCount(0);
    setItemName("");
    console.log(newItem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={itemCount} onChange={(e) => setItemCount(e.target.value)}>
        <option value={0}>0</option>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option value={num} key={i}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onSubmit={(e) => handleSubmit(e)}>Add</button>
    </form>
  );
}

export default Form;
