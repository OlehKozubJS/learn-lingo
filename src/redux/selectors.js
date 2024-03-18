const selectTeachers = (state) => {
  return state.teachers.teachersData.teachers;
};

const selectPages = (state) => {
  return state.teachers.teachersData.pages;
};

export { selectTeachers, selectPages };
