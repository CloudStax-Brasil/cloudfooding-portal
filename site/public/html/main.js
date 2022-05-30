                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro
                    dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento
                    dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                    dados.datasets[0].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de umidade

                    window.grafico_linha.update();

                    proximaAtualizacao = setTimeout(() => atualizarGrafico(idCPU, dados), 2000);