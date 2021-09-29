import PropTypes from "prop-types";
import style from "./FriendList.module.scss";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={style.item}>
          <span className={friend.isOnline ? style.isActive : style.status}>
            {friend.isOnline}{" "}
          </span>
          <img className={style.avatar} src={friend.avatar} alt="" width="48" />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.boolean,
      id: PropTypes.number,
    })
  ),
};
