//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
 process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3334;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var dashboardRouter = require("./src/routes/dashboard");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/dashboard", dashboardRouter);


app.listen(PORTA, function () {
    console.log(`Servidor do site est� rodando: http://localhost:${PORTA} \n
    Voc� est� rodando sua aplica��o em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});