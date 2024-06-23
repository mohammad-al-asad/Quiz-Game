/* eslint-disable react/prop-types */
function Checkbox({className, children }) {
  return (
    <label className={className}>
      {" "}
      <input type="checkbox" /> <span>{children}</span>{" "}
    </label>
  );
}

export default Checkbox;
