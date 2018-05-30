import Vuex from 'vuex'
import dogAscii from "~/src/js/dogAscii.js"

const createStore = () => {
  return new Vuex.Store({
    state: {
      dogs: [],
      windowMoved: false,
      windowStatus: "",
    },
    mutations: {
      showWindow (state) {
        if (state.windowStatus === "hide" ||
            state.windowStatus === "close") {
          state.windowStatus = ""
        }
      },
      hideWindow (state) {
        if (state.windowStatus === "hide") {
          state.windowStatus = ""
        } else {
          state.windowStatus = "hide"
        }
      },
      expandWindow (state) {
        if (state.windowStatus === "expand") {
          state.windowStatus = ""
        } else {
          state.windowStatus = "expand"
        }
      },
      closeWindow (state) {
        if (state.windowStatus === "close") {
          state.windowStatus = ""
        } else {
          state.windowStatus = "close"
        }
      },
      addDog (state) {
        const numSquiggle = 2 // TODO: add more squiggle
        const squiggleIndex = Math.floor((Math.random() * numSquiggle))
        const asciiIndex = Math.floor((Math.random() * dogAscii.length))

        state.dogs.push({
          x: Math.floor((Math.random() * 80)),
          y: Math.floor((Math.random() * 70)),
          ascii: dogAscii[asciiIndex].ascii,
          squiggleIndex
        })
      },
      removeDog (state, index) {
        const numDogs = state.dogs.length
        if (numDogs > 0 && index < numDogs && index >= 0) {
          state.dogs.splice(index, 1)
        }
      }
    },
  })
}

export default createStore
