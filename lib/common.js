
currentUserIsAdmin = function(userId) {
   if(userId)
    {
      return Houston._user_is_admin(userId)
    }
  return false
}