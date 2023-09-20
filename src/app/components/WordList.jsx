export default function WordList({ list, title }) {
  return (
    <div className="prose">
      <h1>{title}</h1>
      <ul>
        {list.map((word) => {
          return <li key={word}> {word} </li>;
        })}
      </ul>
    </div>
  );
}
