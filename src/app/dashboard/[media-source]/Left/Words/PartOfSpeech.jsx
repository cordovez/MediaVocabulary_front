export default function PartOfSpeech({ pos, data }) {
  return (
    <>
      <div className="mr-2 w-full">
        <h2>{pos}</h2>

        <ul>
          <div className="">
            {data.map((noun) => (
              <>
                <div className="flex p-1 justify-between">
                  <li key={noun} className="mr-2">
                    {noun}
                  </li>
                  <button className="btn btn-outline btn-info btn-xs ">
                    +
                  </button>
                </div>
                <hr />
              </>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}
