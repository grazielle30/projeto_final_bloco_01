import { Bolsa } from '../model/Bolsa';
import { BolsaRepository } from '../repository/BolsaRepository';
import { colors } from '../util/Colors';

export class BolsaController implements BolsaRepository {

    private  listaBolsas: Array<Bolsa> = new Array<Bolsa>();
    numero: number = 0

    
    procurarPorNumero(numero: number): void {
        let buscaBolsa = this.buscarNoArray(numero);

        if(buscaBolsa !== null) {
            buscaBolsa.visualizar();
        }else {
            console.log(colors.fg.red, "\nA bolsa numero: " + numero + "nao foi encontrada!", colors.reset);
        }
    }
    listarTodas(): void {
        for (let bolsa of this.listaBolsas) {
            bolsa.visualizar();
        }
    }
    cadastrar(bolsa: Bolsa): void {
        this.listaBolsas.push(bolsa);
        console.log(colors.fg.green, "\nBolsa numero: " + bolsa.numeroBolsa + "foi cadastrada com sucesso!", colors.reset);
    }
    atualizar(bolsa: Bolsa): void {
        throw new Error('Method not implemented.');
    }
    deletar(numero: number): void {
        throw new Error('Method not implemented.');
    }
    vender(numero: number, quantidade: number): void {
        throw new Error('Method not implemented.');
    }
    adicionarEstoque(numero: number, quantidade: number): void {
        throw new Error('Method not implemented.');
    }

    public gerarNumero(): number {
        return ++this.numero;
    }
    
    public buscarNoArray(numero: number): Bolsa | null{
        for (let bolsa of this.listaBolsas) {
            if (bolsa.numeroBolsa === numero) {
                return bolsa;
            }
        }
        return null;
    }
    
}