const app = {
  state: {
    user_name: '',
		user_pw: '',
		is_login: false
  },
  mutations: {
    CHANGE_NAV_ACTIVE: (state, navIndex) => {
      state.navIndex = navIndex
    }
  },
  actions: {
    login: ({commit}, val) => {
      commit('CHANGE_NAV_ACTIVE', val)
    }
  }
}
export default app
