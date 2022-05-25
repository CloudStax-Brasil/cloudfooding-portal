CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nomeEmpresa VARCHAR(45),
	cnpjEmpresa VARCHAR(45),
	emailEmpresa VARCHAR(45),
	senhaEmpresa VARCHAR(45)
);

CREATE TABLE gerente (
	idGerente INT PRIMARY KEY AUTO_INCREMENT,
	nomeGerente VARCHAR(45),
	emailGerente VARCHAR(45),
	senhaGerente VARCHAR(45),
	fkEmpresa INT,
	FOREIGN KEY (idEmpresa) REFERENCES (fkEmpresa)
);

CREATE TABLE funcionario (
	idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
	nomeFuncionario VARCHAR(45),
	emailFuncionario VARCHAR(45),
	senhaFuncionario VARCHAR(45),
	fkGerente INT,
	FOREIGN KEY (idGerente) REFERENCES (fkGerente)
);

CREATE TABLE franquias(
	idFranquias INT PRIMARY KEY AUTO_INCREMENT,
	nomeFraquia VARCHAR(45),
	local VARCHAR(45),
	fkEmpresa INT,
	FOREIGN KEY (idEmpresa) REFERENCES (fkEmpresa)

);

CREATE TABLE maquina (
	idMaquina INT PRIMARY KEY AUTO_INCREMENT,
	nomeMaquina VARCHAR(45),
	fkFranquias INT,
	FOREIGN KEY (idFranquias) REFERENCES (fkFranquias)
);

CREATE TABLE cpu (
	idCPU INT PRIMARY KEY AUTO_INCREMENT,
	temperatura INT,
	uso INT,
	hora DATETIME,
	fkMaquina INT,
	FOREIGN KEY (idMaquina) REFERENCES (fkMaquina)
);

CREATE TABLE memoriaRam (
	idmemoriaRam INT PRIMARY KEY AUTO_INCREMENT,
	uso INT,
	horario DATETIME,
	fkMaquina,
	FOREIGN KEY (idMaquina) REFERENCES (fkMaquina)
);