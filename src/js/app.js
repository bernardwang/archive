import "babel-polyfill"
import smoothscroll from 'smoothscroll-polyfill'

global.app = function() {
  smoothscroll.polyfill()
}
