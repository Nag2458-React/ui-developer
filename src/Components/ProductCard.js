const ProductCard = ({ item }) => {
  return (
    <div className="container">
      <div className="card">
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "250px", padding: "20px 30px" }}
        />

        <div className="card-body">
          <h5>{item.title}</h5>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
