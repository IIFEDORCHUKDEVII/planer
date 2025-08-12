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
        <h3>Count purpose</h3>
        <h2>{listPurpose.length}</h2>
      </div>
      <input type="button" className="button">
        Add purpose
      </input>
    </div>
  );
};
