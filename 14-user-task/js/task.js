export class Task {
    #message;

    constructor(msg) {
        this.#message = msg;
    }

    run() {
        console.log(this.#message);
    }
}