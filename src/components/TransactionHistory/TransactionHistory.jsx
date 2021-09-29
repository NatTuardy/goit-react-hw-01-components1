import PropTypes from "prop-types";
import TableBody from "./TableBody/TableBody";
import style from './TransitionHistory.module.scss'

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TableBody items={items} />
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
