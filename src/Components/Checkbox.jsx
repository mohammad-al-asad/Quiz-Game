/* eslint-disable react/prop-types */
function Checkbox({ className, children, ...rest }) {
  return (
    <label className={className}>
      {" "}
      <input type="checkbox" {...rest} /> <span>{children}</span>{" "}
    </label>
  );
}

export default Checkbox;
