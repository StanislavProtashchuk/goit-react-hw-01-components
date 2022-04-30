import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import FriendList from './Friends/friends';
import TransactionHistory from './TransactionHistory/transactionHistory';
import user from '../user'
import data from '../data'
import friends from '../friends'
import items from '../transactions'

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats} />
      <Statistics
        title={'Upload stats'}
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={items}
      />
    </div>
  );
};