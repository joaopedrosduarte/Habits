# Habits 

Basicamente é um aplicativo que tem como objetivo praticar alguns conceitos novos que aprendi nesse final de 2022 e início de 2023, é uma aplicação fullstack que é basicamente um gerenciador de tasks teve como principais ferramentas o React no front justamente com o axios para requisições e o tailwind como principal responsável pela estilização, e para back foi utilizado o NodeJS com uma framework web chamada de fastify para a construção de uma API REST, e para auxiliar usei uma biblioteca chamada Zod para validar e ter certeza dos parâmetros enviados pelos endpoints.

## Planejado vs Realizado 

Primeiramente o planejado era fazer uma aplicação com 3 funcionalidades principais, um CRUD para gerenciamento das tasks, uma aba para conta do usuário analisar as tasks num todo e também ter uma escolha mais reservada de quais tasks ele prefere cancelar do que só não fazer, pra não ficar feio na tela principal né, e a última feature era fazer uma mapa mostrando todas as tasks realizadas no mês delimitando grupos para cada mês e cada mês com suas tasks. 

Porém o realizado na real me deixou satisfeito pois estava fora da zona de conforto com algumas tecnologias, porém quando se tem ideia de uma parecida você acaba pegando a lógica sem dificuldade, além de minha internet ter caído essa semana toda desde de o dia 4 deste mês de Fevereiro. 

Realizado : 
Criação da API REST sem problemas 
Criação do CRUD no front sem problemas
Criação da tela de Usar sem problemas 
Criação do map incompleta 
Autenticação sem libs externas sem problemas
Aplicação de protected components junto a autenticação
E Ui caprichada ( Na real foi oque me custou mais tempo, algo que me complicou um pouco. )

Plus : 
Tinha planos de adicionar uma API de um site de fotos para incrementar na Ui mas como iria custar muito tempo, preferi deixar isso como planos futuros.
Pensar um pouco mais na responsividade, sempre tem como melhorar!

## How to use ? :gear:

Some of the requirements to run and compile this process on your machine :

* Have a development environment to do this project
    * NodeJS
    * React
    * Vscode
    * MySQL
    * And other libs
* If you want to contribute and try this code on your computer use this comands
    * Run the command below in the two folders, on the web and on the server
    * And obviasly, run the MySQL server on your pc

```bash
~$ npm run dev
```