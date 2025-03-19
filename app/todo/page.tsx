export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[];

  return (
    <h1>
      {todo.map(({ userId, id, title, completed }) => (
        <div key={id}>
          <h2>{userId}</h2>
          <h3>{title}</h3>
          <div>{completed ? "done" : "not do"}</div>
        </div>
      ))}
    </h1>
  );
}
