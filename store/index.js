import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      windowMoved: false,
      windowStatus: "",
    },
    mutations: {
      resetWindow (state) {
        state.windowStatus = ""
      },
      setWindow (state, action) {
        state.windowStatus = action
      }
    },
    actions: {
      hideWindow (context) {
        if (context.state.windowStatus === "hide") {
          context.commit("resetWindow")
        } else {
          context.commit("setWindow", "hide")
        }
      },
      expandWindow (context) {
        if (context.state.windowStatus === "expand") {
          context.commit("resetWindow")
        } else {
          context.commit("setWindow", "expand")
        }
      },
      closeWindow (context) {
        if (context.state.windowStatus === "close") {
          context.commit("resetWindow")
        } else {
          context.commit("setWindow", "close")
        }
      }
    }
  })
}

export default createStore
