import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Bolsa } from './src/model/Bolsa';
import { BolsaBasica } from "./src/model/BolsaBasica";
import { BolsaLuxo } from "./src/model/BolsaLuxo";
import { BolsaController } from "./src/controller/BolsaController";
import { compileFunction } from "vm";

export function main() {    

    let bolsas: BolsaController = new BolsaController(); 

    let opcao: number;
    let numero: number;
    let preco: number;
    let estoque: number;
    let tipoBolsa: number;
    let nome: string;
  

    const bolsaBasica: BolsaBasica = new BolsaBasica(2, "Bolsa Jeans", 200.00, 5, "Jeans");
    bolsaBasica.visualizar();
    bolsaBasica.vender(1);
    bolsaBasica.visualizar();
    bolsaBasica.adicionarEstoque(2);
    bolsaBasica.visualizar();

    const bolsaLuxo: BolsaLuxo = new BolsaLuxo(3, "Bolsa Swarovski", 2000.00, 3, "Pedraria");
    bolsaLuxo.visualizar();
    bolsaLuxo.vender(1);
    bolsaLuxo.visualizar();
    bolsaLuxo.adicionarEstoque(3);
    bolsaLuxo.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
                    "=====================================================");
        console.log("                                                     ");
        console.log("-------------------BOLSA DO PODER--------------------");
        console.log("                                                     ");
        console.log("                                                     ");
        console.log("             1 - Cadastrar Bolsa                     ");
        console.log("             2 - Listar Bolsa                        ");
        console.log("             3 - Buscar Bolsa por Nome               ");
        console.log("             4 - Atualizar Bolsa                     ");
        console.log("             5 - Remover Bolsa                       ");
        console.log("             6 - Adicionar Estoque                   ");
        console.log("             7 - Vender Bolsa                        ");
        console.log("             8 - Ver Total em Estoque                ");
        console.log("             9 - Sair                                ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.cyan,
                "\nSe não for pra causar, nem saio com ela!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);

    }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magenta, "\n\nCadastrar Bolsa\n\n", colors.reset);

                console.log("Digite o nome da Bolsa: ");
                nome = readlinesync.question("");

                console.log("Digite o preco da Bolsa: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite o estoque Inicial: ");
                estoque = readlinesync.questionInt("");

                console.log("Digite o tipo de Bolsa: ");
                tipoBolsa = readlinesync.keyInSelect(["Comum", "Luxo"],"", {cancel: false}) + 1;

                console.log("Digite o material da bolsa: ");
                let material = readlinesync.question("");

                switch (tipoBolsa) {
                    case 1:                        
                        let material: string = readlinesync.question("");
                        bolsas.cadastrar(
                            new BolsaBasica(bolsas.gerarNumero(), nome, preco,estoque, material));
                            

                        break;    
                    case 2:
                        let designer: string = readlinesync.question("");                        
                        bolsas.cadastrar(
                            new BolsaLuxo(bolsas.gerarNumero(), nome, preco, estoque, designer));                            
                        
                        break;  
                               
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta, "\n\nListar Bolsa\n\n", colors.reset);
                bolsas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta, "\n\nBuscar Bolsa por Nome\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta, "\n\nAtualizar Bolsa\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta, "\n\nRemover Bolsa\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.magenta, "\n\nAdicionar Estoque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.magenta, "\n\nVender Bolsa\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.magenta, "\n\nVer Total em Estoque\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.magenta, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }

    }

}

export function sobre(): void {
    console.log("                                            ");
    console.log("Projeto Desenvolvido por: Grazielle Gualter ");    
    console.log("github.com/grazielle30");
}    

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

function gerarNumero(): string {
    throw new Error("Function not implemented.");
}
