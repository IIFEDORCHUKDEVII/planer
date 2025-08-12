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
      <button className="button">Add purpose</button>
    </div>
  );
};
