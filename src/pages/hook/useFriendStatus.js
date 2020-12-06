import React, {useState, useEffect} from 'react';

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(()=>{
    function handleStatusChange(status){
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendId,handleStatusChange);
    return ()=>{
      ChatAPI.unsubscribeFromFriendStatus(friendId,handleStatusChange);
    }
  })

  return isOnline;
}

export default useFriendStatus;