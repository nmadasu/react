import React from 'react'
import { ChannelContext, UserContext } from '../App'

function USeContextWithMultipleValue1() {
  return (
    <div>
       <UserContext.Consumer>
        {
            user=>{
                return(
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return <div> User context value: {user}, channel context value: {channel}</div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default USeContextWithMultipleValue1
