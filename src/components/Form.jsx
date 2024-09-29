import { useRef } from "react"

export function FormComponent({ onSubmit }) {
    const titleRef = useRef(null)
    const priceRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(titleRef.current.value, priceRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" ref={titleRef}/>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" ref={priceRef}/>
            <button type="submit">Submit</button>
        </form>
    )
}