import React from 'react';
import user from './api/user.json';
import statisticalData from './api/statistical-data.json';
import friends from './api/friends.json';
import transactions from './api/transactions.json';
import Profile from './components/Profile/Profile.jsx'
import Statistic from './components/Statistic/Statistic.jsx'
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'
import './App.css'



function App() {
//  console.log(transactions)

 const userInfo = {
  name:user.name,
  tag: user.tag,
  location: user.location,
  avatar: user.avatar,
  stats:user.stats,
 }

 const statisticInfo = {
   title: 'Upload stats',
   stats: statisticalData,
 }
//  console.log(statisticInfo)


// console.log(userInfo)
  return (
    <div>
      <Profile {...userInfo}/>
      <Statistic {...statisticInfo}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
