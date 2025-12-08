import React from 'react'

const UserStatus = ({isLoggedin,isAdmin}) => {
  return (
    <div>
        {isLoggedin && isAdmin  && "Welcome Admin"}
        {isLoggedin && !isAdmin && "Welcome User"}
    </div>
  )
}

export default UserStatus