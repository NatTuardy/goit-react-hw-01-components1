import PropTypes, { string } from "prop-types";
import style from "./Statistic.module.css";

const randomColor = () => Math.floor(Math.random() * 255);
const colorRandom = () =>
  `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

const Statistic = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            className={style.item}
            style={{ backgroundColor: colorRandom() }}
          >
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistic;

Statistic.defaultProps = {
  title: string,
  stats: [],
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
