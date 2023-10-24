function Item({ itemList, handletoggle, handleDelete }) {
  return (
    <>
      {itemList?.map((item) => (
        <li key={item._id}>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => handletoggle(item._id)}
          />
          <span className={item.packed ? "strike" : ""}>{item.itemName}</span>
          <button onClick={() => handleDelete(item._id)}>❌</button>
        </li>
      ))}
    </>
  );
}

export default Item;
