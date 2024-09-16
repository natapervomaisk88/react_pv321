import { useRef } from "react";
import Item from "../model/Item";

const CardForm = (state: any): JSX.Element => {
    const ref_image: any = useRef();
    const ref_title: any = useRef();
    const ref_cost: any = useRef();
    const ref_stock: any = useRef();
    const ref_discount: any = useRef();

    const handleAddCard = (e: any): void => {
        e.preventDefault();
        const new_id = state.cards.length + 1;
        const newCard: Item = {
            id: new_id,
            image: ref_image.current?.value || "",
            title: ref_title.current?.value || "",
            cost: parseFloat(ref_cost.current?.value || "0"),
            stock: parseInt(ref_stock.current?.value || "0"),
            discount: parseInt(ref_discount.current?.value || "0")
        };
        state.setCards([newCard, ...state.cards]);
    };

    return (
        <>
            <form onSubmit={handleAddCard}>
                <input type="url" placeholder="Image URL" ref={ref_image} required={true} />
                <br />
                <input placeholder="Item Title" ref={ref_title} required={true} />
                <br />
                <input type="number" min={0} step={0.01} placeholder="Item Cost" ref={ref_cost} required={true} />
                <br />
                <input type="number" min={0} placeholder="Item Stock" ref={ref_stock} required={false} />
                <br />
                <input type="number" min={0} max={100} placeholder="Item Discount" ref={ref_discount} required={false} />
                <br />
                <button>Add item</button>
            </form>
        </>
    );
};

export default CardForm;