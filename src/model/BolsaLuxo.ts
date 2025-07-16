import { Bolsa } from './Bolsa';

export class BolsaLuxo extends Bolsa {

    private _designer: string;

    constructor(numeroBolsa: number, nome: string, preco: number, estoque: number, designer: string) {
        super(numeroBolsa, nome, preco, 2, estoque);
        this._designer = designer;
    }
        public get designer(): string {
        return this._designer;
    }

        public set designer(designer: string) {
            this._designer = designer;
        }

        public visualizar(): void {
            super.visualizar();
            console.log("Designer: " + this._designer);
        }


}