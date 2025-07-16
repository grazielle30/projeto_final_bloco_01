import readlinesync = require("readline-sync");

export function main() {
    
    let opcao: number;

    while (true) {

        console.log("=====================================================");
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
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nSe não for pra causar, nem saio com ela!");
            sobre();
            process.exit(0);

    }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Bolsa\n\n");

                break;
            case 2:
                console.log("\n\nListar Bolsa\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Bolsa por Nome\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Bolsa\n\n");

                break;
            case 5:
                console.log("\n\nRemover Bolsa\n\n");

                break;
            case 6:
                console.log("\n\nAdicionar Estoque\n\n");

                break;
            case 7:
                console.log("\n\nVender Bolsa\n\n");

                break;
            case 8:
                console.log("\n\nVer Total em Estoque\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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