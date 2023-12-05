import "./Product.css";
function Product(props) {
  return (
    <div className="card text-center  mt-3 mb-3 rounded-3 position-relative">

      <div className="Img-box">
        <img src={props.pr.image} alt={props.pr.title} className="w-50 " />
      </div>
      <div className="Text-box">
        <span className="text-capitalize text-light">{props.pr.category}</span>
        <h3 title={props.pr.title}>{props.pr.title}</h3>
        <span className="fw-bold text-light">{props.pr.price}$</span>
      </div>
    </div>
  );
}
export default Product;
