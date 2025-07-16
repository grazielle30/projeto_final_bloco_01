import { Bolsa } from "../model/Bolsa";

export interface BolsaRepository {
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(bolsa: Bolsa): void;
    atualizar(bolsa: Bolsa): void;
    deletar(numero:number): void;

    vender(numero: number, quantidade:number): void;
    adicionarEstoque(numero: number, quantidade: number): void;
    
}