import * as THREE from 'three'
import Experience from '../Experience'
import testVertexShader from '../../Materials/shaders/water/vertex.glsl'
import testFragmentShader from '../../Materials/shaders/water/fragment.glsl'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        const geometry = new THREE.PlaneGeometry(2, 2, 128, 128)

        const material = new THREE.RawShaderMaterial({
            vertexShader: testVertexShader,
            fragmentShader: testFragmentShader,
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI * 0.5

        this.scene.add(mesh)
    }
}
