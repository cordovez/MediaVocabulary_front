export default function POSTable({ count, list, label, part_of_speech }) {
  return (
    <div className="overflow-x-auto h-96  flex-initial">
      <table className="table table-xs table-pin-rows">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th></th>
            <th>
              {label} ({count})
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((part_of_speech, i) => {
            return (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{i + 1}</td>
                <td>{part_of_speech}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
