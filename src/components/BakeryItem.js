// TODO: create a component that displays a single bakery item
function BakeryItem({item, addToCart}) {
    return (
      <div>
        <img src={item.image} alt="hello"/>
        <h3>{item.name}</h3>
        <h4>{item.description}</h4>
        <p>Price: {item.price}</p>
        <button onClick={() => addToCart(item)} >Add To Cart</button>
      </div>
    )
  }

export default BakeryItem;