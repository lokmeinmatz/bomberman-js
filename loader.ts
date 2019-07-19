import {Loader} from 'pixi.js'

export default function loadData(callback: Function) {
  Loader.shared.add(['textures/tiles.png'])
  .load(callback)
}