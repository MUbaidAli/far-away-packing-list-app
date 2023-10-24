export default function Stats({ itemList }) {
  const totalItems = itemList.length;
  const packedItems = itemList.filter((item) => item.packed).length;
  const remianingItems = totalItems - packedItems;

  if (!itemList.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        You Have {totalItems} in Your List( {packedItems} Packed{" "}
        {remianingItems} Remaining) 🚀
      </em>
    </footer>
  );
}
