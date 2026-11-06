// DADOS SECRETOS (ficam só no servidor). Edite locais, IDs e histórias aqui.
const DB=[
{id:"198.192.107.1",cat:"Hospital",en:"baixa",sup:"50%",ext:"baixa",int:"média",dif:"baixa",items:[
 ["Hospital Santa Aurora","Último hospital a decretar quarentena. Médicos tentaram isolar a ala 3, mas os infectados já estavam dentro."],
 ["Pronto-Socorro Municipal","Lotado no primeiro dia do surto. Os prontuários ainda estão no andar térreo."]]},
{id:"202.191.199.2",cat:"Delegacia de Polícia",en:"sem energia",sup:"20%",ext:"baixa",int:"baixa",dif:"baixa",items:[
 ["1ª Delegacia Central","Os policiais fizeram a última resistência aqui. O arsenal foi quase todo levado."],
 ["Posto Policial do Bairro Norte","Pequeno e abandonado às pressas. Há celas trancadas que ninguém abriu."]]},
{id:"122.122.122.122",cat:"Portas",en:"média",sup:"0%",ext:"nula",int:"nula",dif:"fácil",items:[
 ["Portão Principal da Cidade","Controle eletrônico de acesso. Ainda responde a comandos remotos."],
 ["Porta Blindada do Metrô","Selada durante o surto. Ninguém sabe o que há do outro lado."]]},
{id:"305.102.555.1",cat:"Celular",en:"baixa",sup:"10%",ext:"nula",int:"nula",dif:"fácil",items:[
 ["Celular de Marcos Ribeiro","Último registro: mensagens de pânico para a família às 03:12."],
 ["Celular da Dra. Helena","Contém áudios sobre pacientes com comportamento estranho antes do surto."]]},
{id:"199.107.102.1",cat:"Computador",en:"média",sup:"15%",ext:"baixa",int:"baixa",dif:"baixa",items:[
 ["Terminal da Prefeitura","Guarda mapas de evacuação e rotas bloqueadas."],
 ["PC do Escritório 12","Pertencia a um funcionário que escondeu e-mails sobre experimentos."]]},
{id:"122.125.642.1",cat:"Câmeras",en:"baixa",sup:"0%",ext:"baixa",int:"baixa",dif:"baixa",items:[
 ["Câmeras da Praça Central","Mostram hordas se movendo em direção ao norte."],
 ["Câmeras do Estacionamento","Gravações de pessoas fugindo e um veículo militar entrando."]]},
{id:"197.122.075.2",cat:"Drone",en:"média",sup:"0%",ext:"média",int:"baixa",dif:"baixa",items:[
 ["Drone de Vigilância D-07","Sobrevoa a região em ciclo automático. Bateria em estado crítico."],
 ["Drone de Entrega X-3","Transporta uma caixa lacrada com suprimentos médicos."]]},
{id:"102.101.200.1",cat:"Bunker",en:"alta",sup:"100%",ext:"média",int:"alta",dif:"alta",items:[
 ["Bunker Esperança","Construído para a elite da cidade. Os moradores trancaram a porta por dentro."],
 ["Abrigo Subterrâneo 9","Foi planejado para 300 pessoas, mas ninguém sabe quantas entraram."]]},
{id:"201.122.022.1",cat:"Base do Exército",en:"média",sup:"80%",ext:"alta",int:"média",dif:"média",items:[
 ["Base Militar Alfa","Caiu em menos de 48 horas. Ainda há armamento nos depósitos."],
 ["Posto Avançado Delta","Soldados desertaram. O rádio ainda transmite um pedido de socorro."]]},
{id:"100.122.512.1",cat:"Empresas",en:"média",sup:"60%",ext:"média",int:"alta",dif:"difícil",items:[
 ["Torre Vértice Corp.","Empresa de logística. Os executivos fugiram de helicóptero."],
 ["Farmacêutica Biovida","Escondia pesquisas que nunca foram divulgadas."]]},
{id:"999.999.102.1",cat:"Usina Elétrica",en:"MUITO ALTA",sup:"50%",ext:"média",int:"média",dif:"média",items:[
 ["Usina Central Hélios","Abastece o que resta da cidade. Quem controlar a usina controla a luz."],
 ["Subestação Leste","Falhas frequentes. Há infectados presos entre os transformadores."]]},
{id:"192.400.122.1",cat:"Governo",en:"média",sup:"70%",ext:"alta",int:"alta",dif:"alta",items:[
 ["Palácio da Prefeitura","Abriga documentos do plano de contenção que falhou."],
 ["Secretaria de Segurança","Guarda ordens secretas emitidas nas primeiras horas do surto."]]},
{id:"197.192.500.1",cat:"Bancos",en:"alta",sup:"N/D",ext:"alta",int:"alta",dif:"muito alta",items:[
 ["Banco Nacional – Matriz","Cofres reforçados. Dizem que há algo mais valioso que dinheiro lá dentro."],
 ["Banco Cidade Segura","Sistema de segurança ainda ativo e muito agressivo."]]},
{id:"202.192.100.2",cat:"Prédio Jornalístico",en:"alta",sup:"80%",ext:"alta",int:"alta",dif:"alta",items:[
 ["Redação do Jornal da Manhã","Os jornalistas transmitiram até o fim. Tem gravações que foram censuradas."],
 ["Estúdio Canal 7","Estúdio de TV com equipamento de rádio intacto."]]},
{id:"691.129.612.2",cat:"Laboratório",en:"muito alta",sup:"90%",ext:"muito alta",int:"muito alta",dif:"muito alta",items:[
 ["Laboratório Genesis","Início oficial das pesquisas que podem ter causado o surto."],
 ["Centro de Pesquisa Biológica","Quarentena total. Ninguém saiu de lá."]]},
{id:"666.666.666.6",cat:"OSCP",en:"???",sup:"???",ext:"EXTREMA",int:"EXTREMA",dif:"quase impossível",oscp:true,items:[]}
];
const EXTRA={
"Hospital":[["Clínica São Lucas","Pequena clínica familiar. O estoque de remédios foi saqueado na primeira noite."],["Hospital Infantil Esperança","Evacuado às pressas. Desenhos de crianças ainda cobrem as paredes."],["Hospital Militar Regional","Recebeu soldados feridos antes do colapso. Ala restrita lacrada."],["Pronto Atendimento Zona Sul","Fila de espera nunca esvaziou. Corredores tomados por infectados."],["Hospital Universitário","Residentes tentaram criar uma cura improvisada no subsolo."],["Clínica Vida Nova","Atendia pacientes sem registro. Funcionários sumiram na mesma semana."]],
"Delegacia de Polícia":[["Delegacia da Zona Sul","Cela lotada de detidos quando o surto começou. Ninguém voltou."],["Batalhão da Polícia Militar","Veículos blindados ainda estacionados no pátio."],["Delegacia de Homicídios","Arquivos de casos estranhos de mordidas anteriores ao surto."],["Posto Policial da Rodoviária","Controlou a última tentativa de bloqueio da cidade."],["Delegacia da Mulher","Serviu de abrigo temporário nos primeiros dias."],["Central de Operações Policiais","Centro de rádio com registros das últimas chamadas."]],
"Portas":[["Porta do Cofre Municipal","Trancada com senha eletrônica. Dizem guardar suprimentos de emergência."],["Portão do Shopping Center","Fechado por dentro. Há sobreviventes ou algo pior lá."],["Porta do Estacionamento Subterrâneo","Abre para uma garagem escura e silenciosa."],["Porta Corta-Fogo do Hospital","Isolou a ala de infectados. Está sob pressão."],["Portão da Escola Estadual","Barricada improvisada por professores e alunos."],["Porta Blindada do Banco Leste","Sistema de travamento ainda ativo."]],
"Celular":[["Celular do Sgt. Almeida","Contém coordenadas de pontos de resgate abandonados."],["Celular de Júlia Mendes","Fotos de um grupo de sobreviventes escondido no norte."],["Celular do Padre Tomás","Mensagens de confissões e avisos sobre um local proibido."],["Celular de um Entregador","Rota gravada até um depósito de suprimentos."],["Celular de Pedro Lacerda","Vídeos do início do surto no bairro industrial."],["Celular Anônimo","Sem dono identificado. Mensagens criptografadas em loop."]],
"Computador":[["PC da Biblioteca Municipal","Arquivos históricos e plantas de túneis antigos."],["Servidor do Provedor Local","Registros de acesso de todos os moradores."],["PC da Delegacia Digital","Banco de dados de procurados e desaparecidos."],["Notebook do Dr. Cardoso","Anotações médicas sobre o comportamento dos infectados."],["Computador da Escola Técnica","Projetos de robótica e mapas internos da cidade."],["Terminal do Aeroporto","Lista de voos cancelados e cargas misteriosas."]],
"Câmeras":[["Câmeras do Hospital","Mostram corredores cheios de infectados em movimento."],["Câmeras da Estação de Trem","Registraram a fuga em massa da cidade."],["Câmeras do Banco Central","Imagens de homens armados no cofre."],["Câmeras da Rodovia","Mostram um comboio militar parado há dias."],["Câmeras do Shopping","Há luzes acesas e vultos nas lojas do segundo andar."],["Câmeras da Usina","Imagens de técnicos tentando religar os geradores."]],
"Drone":[["Drone de Resgate R-12","Programado para localizar sobreviventes. Carrega kit de primeiros socorros."],["Drone Militar M-5","Armado e em modo de patrulha. Perigoso de se aproximar."],["Drone Jornalístico J-2","Gravou imagens aéreas da cidade tomada."],["Drone de Mapeamento Topo-9","Contém um mapa 3D completo da região."],["Drone Agrícola A-4","Abandonado numa fazenda. Tanque ainda com combustível."],["Drone Fantasma","Sem registro oficial. Voa à noite para um destino desconhecido."]],
"Bunker":[["Bunker Prefeitura","Reservado para autoridades. Estoques de água e comida."],["Abrigo Antiaéreo Velho","Relíquia de guerra reativada às pressas."],["Bunker da Família Montenegro","Mansão sobre um bunker privado cheio de luxo."],["Abrigo do Metrô Central","Túneis fechados com centenas de pessoas dentro."],["Bunker Alfa-7","Instalação militar secreta. Sinais de vida irregulares."],["Refúgio da Montanha","Isolado e bem camuflado, difícil de localizar."]],
"Base do Exército":[["Base Militar Bravo","Centro de comunicações. Rádios ainda captam sinais."],["Quartel General Regional","Comando abandonado. Documentos secretos espalhados."],["Arsenal Charlie","Depósito de armas lacrado com sistema de segurança pesado."],["Heliporto Militar","Dois helicópteros ainda intactos na pista."],["Campo de Treinamento Eco","Foi usado como zona de triagem de civis."],["Posto de Comando Foxtrot","Última base a transmitir ordens. Silêncio total desde então."]],
"Empresas":[["Indústria Metalúrgica Aço Forte","Fábrica com maquinário pesado e galpões enormes."],["Supermercado Mega Preço","Estoque parcialmente intacto, disputado por saqueadores."],["Construtora Horizonte","Planta de túneis e abrigos subterrâneos secretos."],["Transportadora Rápida Log","Frota de caminhões estacionados com cargas desconhecidas."],["Tech Nova Sistemas","Servidores com dados sensíveis de milhares de pessoas."],["Petrolífera Delta Energia","Reservatórios de combustível ainda cheios."]],
"Usina Elétrica":[["Usina Solar Aurora","Painéis ainda funcionando em modo automático."],["Hidrelétrica Rio Claro","Comportas travadas. Risco de inundação."],["Usina Termelétrica Norte","Gera calor e energia. Infectados se aglomeram ao redor."],["Central de Distribuição Sigma","Controla toda a rede elétrica da região."],["Subestação Oeste","Danificada, mas pode ser reativada com reparos."],["Gerador Reserva do Governo","Alimenta instalações oficiais em segredo."]],
"Governo":[["Câmara Municipal","Atas de reuniões de emergência desapareceram."],["Tribunal de Justiça","Processos secretos sobre experimentos ilegais."],["Ministério da Saúde Local","Relatórios do primeiro caso confirmado do surto."],["Quartel dos Bombeiros","Equipe tentou resgatar civis até o fim."],["Centro de Comando de Crise","Sala de guerra com mapas e protocolos de evacuação."],["Arquivo Público Central","Documentos confidenciais sobre a OSCP."]],
"Bancos":[["Banco Mercantil Sul","Caixas eletrônicos intactos e cofre trancado."],["Banco do Povo","Agência pequena, mas com cofre inviolado."],["Banco Federal – Agência Centro","Segurança automatizada ainda ativa."],["Banco Internacional Delta","Registros de transferências suspeitas para a OSCP."],["Cooperativa Financeira União","Dinheiro e documentos de moradores guardados."],["Banco Digital Nexus","Servidores com contas e senhas de toda a cidade."]],
"Prédio Jornalístico":[["Rádio Cidade FM","Última transmissão pediu que ninguém saísse de casa."],["Jornal Diário da Capital","Reportagens engavetadas sobre a OSCP."],["Portal Notícias 24h","Servidor com vídeos do início do surto."],["Agência de Comunicação Alfa","Fabricava propagandas oficiais do governo."],["Estúdio de Podcast Sombra","Teorias da conspiração que se provaram verdadeiras."],["Central de Imprensa Municipal","Arquivo de comunicados oficiais censurados."]],
"Laboratório":[["Laboratório Nova Era","Pesquisava vacinas experimentais antes do surto."],["Instituto de Virologia","Amostras do vírus original em câmara fria."],["Laboratório Subterrâneo B-12","Local oculto, com registros de testes em humanos."],["Centro de Biotecnologia Helix","Parceiro privado da OSCP. Equipe desaparecida."],["Laboratório Móvel Epsilon","Caminhão abandonado cheio de amostras."],["Faculdade de Ciências Biológicas","Estudantes fizeram as primeiras observações do vírus."]]
};
DB.forEach(d=>{if(EXTRA[d.cat])d.items.push(...EXTRA[d.cat])});
module.exports=DB;
