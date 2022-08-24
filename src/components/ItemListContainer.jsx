import ItemCount from "./ItemCount";

function ItemListContainer() {

  const onAdd = (qty) => {
    alert(`You have selected ${qty} items`);
  }

  return ( 
    <>
      <div className="item-list-container">
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
    </>  
  );
}

export default ItemListContainer;
