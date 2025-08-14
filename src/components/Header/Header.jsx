export const listPurpose = [
  {
    id: 1,
    name: "Purpose 1",
  },
  {
    id: 2,
    name: "Purpose 2",
  },
  {
    id: 3,
    name: "Purpose 3",
  },
];

export const Header = () => {
  return (
    <div className="headerBlock">
      <div className="countPurpose">
        <h5>Count purpose</h5>
        <h4>{listPurpose.length}</h4>
      </div>
      <div className="listPurpose">
        <h5>List purpose</h5>
        <ul>
          {listPurpose.map((item) => (
            <li className="purpose" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="button">Add purpose</button>
      </div>
    </div>
  );
};
