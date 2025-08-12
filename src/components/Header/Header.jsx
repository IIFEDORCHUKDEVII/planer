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
      <h3>Counts purpose</h3>
      <h2>{listPurpose.length}</h2>
      <div>
        {listPurpose.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <button className="button">Add purpose</button>
    </div>
  );
};
