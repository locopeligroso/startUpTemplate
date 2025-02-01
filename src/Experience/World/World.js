import Experience from '../Experience'
import Environment from './Environment'
import Model from './Model'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            // Setup
            this.model = new Model()
            this.environment = new Environment()
        })
    }
}
