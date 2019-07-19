import {utils, Application} from 'pixi.js'
import loadData from './loader'
import Game from './Game';
 
let type : string = "WebGL"
export let app : Application = undefined
function mainStart() {
  let game = new Game()
}

window.onload = () => {
  if(!utils.isWebGLSupported()){
    type = "canvas"
  }
  utils.sayHello(type)
  
  
  app = new Application({width: window.innerWidth, height: window.innerHeight})
  document.body.appendChild(app.view)
  loadData(mainStart)
}
  