import * as THREE from "three"

export class SingletonScene {
  static scenes: Record<string, THREE.Scene> = {}

  // Get a scene or create it if it doesn't exist
  static getScene(key: string, renderer: THREE.WebGLRenderer) {
    if (!this.scenes[key]) {
      this.scenes[key] = new THREE.Scene()

      renderer.setSize(window.innerWidth, window.innerHeight / 3)
      document.body.appendChild(renderer.domElement)
      return this.scenes[key]
    }
    return null
  }

  // Optional: Delete a scene by its key
  static deleteScene(key: string) {
    if (this.scenes[key]) {
      delete this.scenes[key]
    }
  }
}
