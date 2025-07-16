import  { Bolsa } from './Bolsa';

export class BolsaBasica extends Bolsa {

    private _material: string;

    constructor(numeroBolsa: number, nome: string, preco: number, estoque: number, material: string) {
        super(numeroBolsa, nome, preco, 1, estoque);
        this._material = material;
    }

    public get material(): string {
        return this._material;
    }

    public set material(material: string) {
        this._material = material;
    }

    public vender(quantidade:number): boolean {
        if(quantidade > this.estoque) {
            return false;
        }

        this.estoque = this.estoque - quantidade;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Material: " + this._material);
    }
}