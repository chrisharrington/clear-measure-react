import Uuid from "uuid";

export default class TodoItem {
    constructor(label) {
        this.label = label;
        this.id = Uuid.v4();
    }
}
