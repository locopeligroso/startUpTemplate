import Experience from '../Experience'

export default class Model {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.placeHolderModel

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene

        this.scene.add(this.model)
    }
}
