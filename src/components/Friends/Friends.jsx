import PropTypes from 'prop-types';
import s from './Friends.module.css'

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li className={s.item} key={id}>
                        <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
                        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

FriendList.ropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}
