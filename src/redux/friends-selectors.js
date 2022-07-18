import {createSelector} from "reselect";

export const selectFriends = createSelector(
    (state) => state.usersPage.users,
    (users) => users.filter((u) => u.followed)
)
