import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [itemList, setItemList] = useState([]);

  function onAddItems(newItem) {
    setItemList((prev) => [...prev, newItem]);
  }

  function handleClearList() {
    if (itemList.length > 0) {
      const ok = window.confirm("Are You Sue You Want To Clear The List?");

      ok && setItemList([]);
      toast.success("List Cleared");
    } else {
      toast.error("List Already Cleared");
    }
  }

  function handletoggle(id) {
    setItemList(
      itemList.map((item) =>
        item._id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // console.log(id);
  }

  const handleDelete = (id) => {
    const ok = window.confirm(
      "Are You Sue You Want To Remove Following List Item?"
    );

    ok && setItemList(itemList.filter((item) => item._id !== id));
    toast.success("item Removed");
  };
  return (
    <div className="app">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Logo />
      <Form setItemList={onAddItems} />
      <PackingList
        handleClearList={handleClearList}
        handletoggle={handletoggle}
        itemList={itemList}
        handleDelete={handleDelete}
      />
      <Stats itemList={itemList} />
    </div>
  );
};

export default App;
