interface User {
    id: number | string;
    name: string | null | number;
    email?: string;
};

const user: User = {id: 1, name: ""};
console.log(user);