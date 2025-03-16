-- DROP TABLEs  
DROP TABLE IF EXISTS frete_produto;
DROP TABLE IF EXISTS frete;
DROP TABLE IF EXISTS favoritos_produto;
DROP TABLE IF EXISTS favoritos;
DROP TABLE IF EXISTS carrinho_produto;
DROP TABLE IF EXISTS carrinho;
DROP TABLE IF EXISTS compra_produto;
DROP TABLE IF EXISTS compra;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS estoque;
DROP TABLE IF EXISTS produto;
DROP TABLE IF EXISTS categoria;
DROP TABLE IF EXISTS marca;


-- SELECTs
SELECT * FROM frete_produto;
SELECT * FROM frete;
SELECT * FROM favoritos_produto;
SELECT * FROM favoritos;
SELECT * FROM carrinho_produto;
SELECT * FROM carrinho;
SELECT * FROM compra_produto;
SELECT * FROM compra;
SELECT * FROM usuario;
SELECT * FROM estoque;
SELECT * FROM produto;
SELECT * FROM categoria;
SELECT * FROM marca;


-- TABLE marca
CREATE TABLE marca (
	id serial PRIMARY KEY,
	nome VARCHAR(100),
	cnpj CHAR(18) UNIQUE NOT NULL
);

INSERT INTO marca (nome, cnpj) VALUES 
('Imperial Leather', '12.345.678/0001-99'),
('Nobre Couros', '23.456.789/0001-88'),
('Estilo Natural', '34.567.890/0001-77'),
('Realeza Fashion', '45.678.901/0001-66'),
('Elite Couture', '56.789.012/0001-55'),
('Vanguard Leather', '67.890.123/0001-44'),
('Pioneira Skin', '78.901.234/0001-33'),
('Sublime Hide', '89.012.345/0001-22'),
('Noble Touch', '90.123.456/0001-11'),
('Couro Real', '01.234.567/0001-00');


-- TABLE categoria
CREATE TABLE categoria(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	genero VARCHAR(50)
);

INSERT INTO categoria (nome, genero) VALUES 
('Jaquetas Femininas PP', 'Feminino'),
('Jaquetas Femininas P', 'Feminino'),
('Jaquetas Femininas M', 'Feminino'),
('Jaquetas Femininas G', 'Feminino'),
('Jaquetas Femininas GG', 'Feminino'),
('Jaquetas Femininas G2', 'Feminino'),
('Jaquetas Masculinas PP', 'Masculino'),
('Jaquetas Masculinas P', 'Masculino'),
('Jaquetas Masculinas M', 'Masculino'),
('Jaquetas Masculinas G', 'Masculino'),
('Jaquetas Masculinas G2', 'Masculino'),
('Cintos Femininos Unissex', 'Feminino'),
('Cintos Masculinos Unissex', 'Masculino');


-- TABLE produto
CREATE TABLE produto (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255),
	foto TEXT,
	cor VARCHAR(50),
	cep_origem CHAR(8),
	preco DECIMAL(10,2),
	marca_id INT NOT NULL,
	categoria_id INT NOT NULL,
	FOREIGN KEY (marca_id) REFERENCES marca(id),
	FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

INSERT INTO produto (nome, foto, cor, cep_origem, preco, marca_id, categoria_id) VALUES 
('Bolsa Feminina Couro Preto', 'https://couribi.com.br/wp-content/uploads/2022/03/1930-PRETA-1080X1080.jpg', 'Preto', '12345678', 199.99, 1, 1),
('Jaqueta Feminina Couro Vermelha', 'https://i.pinimg.com/736x/f1/64/a5/f164a5b13a8a8191ab5b7947271343bc.jpg', 'Vermelho', '23456789', 399.99, 2, 3),
('Cinto Masculino Couro Marrom', 'https://i.pinimg.com/736x/87/1c/bc/871cbcf17012e6634a96fd3c155ca303.jpg', 'Marrom', '34567890', 79.99, 3, 13),
('Jaqueta Masculina Couro Azul', 'https://i.pinimg.com/736x/ba/89/71/ba8971f31ca50dde52d3e8c94d116ee2.jpg', 'Azul', '45678901', 499.99, 4, 10),
('Bolsa Masculina Couro Marrom', 'https://i.pinimg.com/736x/10/32/1a/10321a7629e49f58c6330fa829eab372.jpg', 'Marrom', '56789012', 249.99, 5, 2),
('Bolsa Feminina Couro Bege', 'https://i.pinimg.com/736x/fa/86/12/fa8612358fc2dc4928fe41b01b0aa02d.jpg', 'Bege', '67890123', 219.99, 6, 1),
('Jaqueta Feminina Couro Preta', 'https://i.pinimg.com/736x/27/d6/c4/27d6c460dda777b5df847144dcff1ce4.jpg', 'Preta', '78901234', 349.99, 7, 4),
('Cinto Feminino Couro Preto', 'https://i.pinimg.com/736x/3e/f8/39/3ef839ae0b26ce78ec353b68f390bed2.jpg', 'Preto', '89012345', 69.99, 8, 12),
('Jaqueta Masculina Couro Marrom', 'https://i.pinimg.com/736x/54/b9/ae/54b9ae594647b2d6a142fbeffd8fb6e4.jpg', 'Marrom', '90123456', 459.99, 9, 10),
('Bolsa Feminina Couro Vermelha', 'https://i.pinimg.com/736x/01/14/66/011466a3e5af6438d5d527301afeba4a.jpg', 'Vermelha', '01234567', 279.99, 10, 2);


-- TABLE estoque
CREATE TABLE estoque(
	id SERIAL PRIMARY KEY,
	produto_id INT UNIQUE NOT NULL,
	quantidade INT DEFAULT 0,
	FOREIGN KEY (produto_id) REFERENCES produto(id)
);

INSERT INTO estoque (quantidade, produto_id) VALUES 
(10, 1), (5, 2), (15, 3), (8, 4), (12, 5),
(20, 6), (10, 7), (25, 8), (6, 9), (18, 10);


-- TABLE usuario
CREATE TABLE usuario (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	nome VARCHAR(255) UNIQUE NOT NULL,
	cpf CHAR(11) UNIQUE NOT NULL,
	endereco TEXT NOT NULL,
	cep CHAR(8) NOT NULL,
	cedex BOOLEAN DEFAULT FALSE,
	cartao VARCHAR(16) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL
);


-- TABLE compra
CREATE TABLE compra(
	id SERIAL PRIMARY KEY,
	usuario_id INT NOT NULL,
	quantidade INT DEFAULT 1,
	cep_destino CHAR(8) NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


-- TABLE compra_produto
CREATE TABLE compra_produto(
	compra_id INT NOT NULL,
	produto_id INT NOT NULL,
	PRIMARY KEY (compra_id, produto_id),
	FOREIGN KEY (compra_id) REFERENCES compra(id),
	FOREIGN KEY (produto_id) REFERENCES produto(id)
);


-- TABLE carrinho 
CREATE TABLE carrinho(
	id SERIAL PRIMARY KEY,
	usuario_id INT NOT NULL,
	quantidade INT DEFAULT 1,
	valor_total DECIMAL(10, 2) DEFAULT 0,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id)	
);


-- TABLE carrinho_produto
CREATE TABLE carrinho_produto (
    carrinho_id INT NOT NULL,
    produto_id INT NOT NULL,
    PRIMARY KEY (carrinho_id, produto_id),
    FOREIGN KEY (carrinho_id) REFERENCES carrinho(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);


-- TABLE favoritos
CREATE TABLE favoritos (
	id SERIAL PRIMARY KEY,
	usuario_id INT NOT NULL,
	quantidade INT DEFAULT 1,
	FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


-- TABLE favoritos_produto
CREATE TABLE favoritos_produto (
    favorito_id INT NOT NULL,
    produto_id INT NOT NULL,
    PRIMARY KEY (favorito_id, produto_id),
    FOREIGN KEY (favorito_id) REFERENCES favoritos(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);


-- TABLE frete
CREATE TABLE frete(
	id SERIAL PRIMARY KEY,
	data_entrega DATE NOT NULL,
	tipo_transporte VARCHAR(50) NOT NULL,
	compra_id INT NOT NULL,
	FOREIGN KEY (compra_id) REFERENCES compra(id)
);


-- TABLE frete_produto
CREATE TABLE frete_produto (
    frete_id INT NOT NULL,
    produto_id INT NOT NULL,
    PRIMARY KEY (frete_id, produto_id),
    FOREIGN KEY (frete_id) REFERENCES frete(id),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);


-- ================================
-- SELECTS TESTE
-- ================================

-- 1) Produtos com estoque
SELECT p.nome, e.quantidade FROM produto p 
JOIN estoque e ON p.id = e.produto_id;

-- 2) Produtos por categoria
SELECT c.nome AS categoria, p.nome AS produto, p.preco FROM produto p
JOIN categoria c ON p.categoria_id = c.id
ORDER BY c.nome;

-- 3) Estoque baixo (menos que 10 unidades)
SELECT p.nome, e.quantidade FROM produto p
JOIN estoque e ON p.id = e.produto_id
WHERE e.quantidade < 10;

-- 4) Produtos por marca
SELECT m.nome AS marca, p.nome AS produto FROM produto p
JOIN marca m ON p.marca_id = m.id
ORDER BY m.nome;
