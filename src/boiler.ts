export class Boiler {
    constructor( 
        protected type: number, 
        protected serial: number, 
        protected password: number 
    ) {
    }

    public getId() {
        return `${this.type}-${this.serial}`;
    }
}