export abstract class Bolsa {

    private _numeroBolsa: number;
    private _nome: string;
    private _preco: number;
    private _tipoBolsa: number;
    private _estoque: number;

    constructor(numeroBolsa: number, nome: string, preco: number, tipoBolsa: number, estoque: number) {
        this._numeroBolsa = numeroBolsa;
        this._nome = nome;
        this._preco = preco;
        this._tipoBolsa = tipoBolsa;
        this._estoque = estoque;
        
    }

    public get numeroBolsa(): number {
        return this._numeroBolsa;
    }

    public get nome(): string {
        return this._nome;
    }

    public get preco(): number {
        return this._preco;
    }

    public get tipoBolsa(): number {
        return this._tipoBolsa;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set numeroBolsa(numeroBolsa: number) {
        this._numeroBolsa = numeroBolsa;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    
    public set tipoBolsa(tipo: number) {
        this._tipoBolsa = tipo;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    public vender(quantidade: number): boolean {
        if (quantidade > this._estoque) {
            console.log("❌ Estoque Insuficiente"); 
            return false;
        }

        this._estoque = this._estoque - quantidade;
        return true;
    }

    public adicionarEstoque(quantidade: number): void {
        this._estoque = this._estoque + quantidade;
            
    }      

    public visualizar(): void {
        let tipo: string = "";

    switch (this.tipoBolsa) {
        case 1:
            tipo = "Bolsa Basica";
            break;
        case 2:
            tipo = "Bolsa Luxo";
            break;
        default:
            tipo = "Bolsa Desconhecida";        
    }

    console.log("\n\n-----------------------------------------");
    console.log("Dados da Bolsa:");
    console.log("---------------------------------------------")
    console.log("Numero da Bolsa: " + this._numeroBolsa);
    console.log("Nome da Bolsa: " + this._nome);
    console.log("Preco: R$ " + this._preco.toFixed(2));
    console.log("Tipo da Bolsa: " + tipo);
    console.log("Estoque: " + this._estoque)

    } 

}