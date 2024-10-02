import IAction from "./IAction";

const defaultState = { posts: [{ id: 1, author: "test@gmail.com", title: "First post", content: "test", likes: 0 }] };

const reducerPosts = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        case "DEL_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            }
        case "LIKE_POST":
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.payload) {
                        post.likes += 1;
                    };
                    return post;
                }),
            }
        default:
            return state;
    }
}

export default reducerPosts;