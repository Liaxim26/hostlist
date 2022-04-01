export default class Host {
    constructor
    (
        public id: number,
        public name: string,
        public price: number,
        public lastPaymentDate: Date,
        public nextPaymentDate: Date,
        public specification: string,
        public comment: string
    ){}
}