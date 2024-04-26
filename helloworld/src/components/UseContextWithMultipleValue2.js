import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'

function UseContextWithMultipleValue2() {
  const user=useContext(UserContext)
  const channel=useContext(ChannelContext)
return (
  <div>
    User context value: {user}, channel context value: {channel}
  </div>
)
}

export default UseContextWithMultipleValue2
