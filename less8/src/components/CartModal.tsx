import { createPortal } from "react-dom";
import "./CartModal.css";

const modalNode: HTMLElement = document.getElementById("cart-container")!;

const renderContent = (props: any) => {
  return createPortal(
    <div>
      <div className="cart-background" onClick={props.closeModal} />
      <div className="cart">
        <button className="cart-close" onClick={props.closeModal}>
          &times;
        </button>
        {props.children}
        <button className="cart-confirm" onClick={() => {
            console.log("Confirmed");
            props.closeModal();
          }}>
          Confirm Purchase
        </button>
      </div>
    </div>,
    modalNode
  );
};

const CartModal = (props: any) => {
  return props.open === true ? renderContent(props) : null;
};

export default CartModal;