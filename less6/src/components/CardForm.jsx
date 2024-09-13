import { useRef } from "react";

const CardForm = ({cards, setCards}) => {
    const ref_image = useRef();
    const ref_title = useRef();
    const ref_cost = useRef();
    const ref_stock = useRef();
    const ref_discount = useRef();

    const handleAddCard = (e) => {
        e.preventDefault();
        const new_id = cards.length + 1;
        setCards([{ id: new_id, image: ref_image.current.value, title: ref_title.current.value, cost: parseFloat(ref_cost.current.value), stock: parseInt(ref_stock.current.value) }, ...cards]);
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