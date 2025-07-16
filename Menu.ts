import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Bolsa } from './src/model/Bolsa';
import { BolsaBasica } from "./src/model/BolsaBasica";
import { BolsaLuxo } from "./src/model/BolsaLuxo";

export function main() {    

    let opcao: number;

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
                
                break;
            case 2:
                console.log(colors.fg.magenta, "\n\nListar Bolsa\n\n", colors.reset);
              
                break;
            case 3:
                console.log(colors.fg.magenta, "\n\nBuscar Bolsa por Nome\n\n", colors.reset);
              
                break;
            case 4:
                console.log(colors.fg.magenta, "\n\nAtualizar Bolsa\n\n", colors.reset);
                
                break;
            case 5:
                console.log(colors.fg.magenta, "\n\nRemover Bolsa\n\n", colors.reset);
                
                break;
            case 6:
                console.log(colors.fg.magenta, "\n\nAdicionar Estoque\n\n", colors.reset);
                
            case 7:
                console.log(colors.fg.magenta, "\n\nVender Bolsa\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.magenta, "\n\nVer Total em Estoque\n\n", colors.reset);

                break;
            default:
                console.log(colors.fg.magenta, "\nOpção Inválida!\n", colors.reset);

                break;
        }

    }

}

export function sobre(): void {
    console.log("                                            ");
    console.log("Projeto Desenvolvido por: Grazielle Gualter ");    
    console.log("github.com/grazielle30");
}    

main();