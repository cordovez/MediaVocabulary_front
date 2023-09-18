export default function WordList({ list, color }) {
  return (
    <div>
      <ul>
        {list.map((word) => {
          return <li key={word}> {word} </li>;
        })}
      </ul>
    </div>
  );
}
