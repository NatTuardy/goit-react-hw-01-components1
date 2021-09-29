import PropTypes from "prop-types";

const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map((string) => (
        <tr key={string.id}>
          <td>{string.type}</td>
          <td>{string.amount}</td>
          <td>{string.currency}</td>
        </tr>
      ))}
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
    </tbody>
  );
};

export default TableBody;

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
