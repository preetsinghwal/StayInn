import Counter from "../components/Counter";

export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return (
        <div>
            <h3>Cabins Page</h3>
            <ul>{data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
            <Counter users={data}/>
        </div>
    )
}