import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import RootState from '.';

const groupsAdapter = createEntityAdapter();

const initialState = groupsAdapter.getInitialState({
  currentGroupId: null,
});

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addMany: groupsAdapter.addMany,
    changeGroup: (state, { payload }) => {
      state.currentGroupId = payload.id;
    },
  },
});

export const { addMany, changeGroup } = groupsSlice.actions;

const selectors = groupsAdapter.getSelectors((state: RootState) => state.groups);

export const customSelectors = {
  allGroups: selectors.selectAll,
  closedGroups: (state: RootState) => selectors.selectAll(state).filter(({ closed }) => closed),
  openedGroups: (state: RootState) => selectors.selectAll(state).filter(({ closed }) => !closed),
  friendsGroups: (state: RootState) => selectors.selectAll(state).filter(({ friends }) => friends),
  notFriendsGroups: (state: RootState) => selectors.selectAll(state).filter(({ friends }) => !friends),
  colorGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color),
  redGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'red'),
  greenGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'green'),
  yellowGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'yellow'),
  blueGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'blue'),
  purpleGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'purple'),
  whiteGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'white'),
  orangeGroups: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color === 'orange'),
  colorNames: (state: RootState) => selectors.selectAll(state).filter(({ avatar_color }) => avatar_color).map(({ avatar_color }) => avatar_color),
  currentGroup: (state: RootState) => {
    const { currentGroupId } = state.groups;

    return selectors.selectById(state, currentGroupId);
  },
};

export default groupsSlice.reducer;
