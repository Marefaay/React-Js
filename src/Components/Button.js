import "./Button.css"
function Button(props){
    return (
        <button className="ms-3 me-3  mt-2 " id="btn">{props.title.title}</button>
    );
}
export default Button;