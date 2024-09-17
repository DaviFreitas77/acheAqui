-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/09/2024 às 04:57
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_acheaqui`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `adm`
--

CREATE TABLE `adm` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(120) NOT NULL,
  `senha` varchar(80) NOT NULL,
  `token` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `adm`
--

INSERT INTO `adm` (`id`, `nome`, `email`, `senha`, `token`) VALUES
(1, 'Admin01', 'adm01@gmail.com', 'original123', '123456');

-- --------------------------------------------------------

--
-- Estrutura para tabela `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `recipient_id` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `item_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `messages`
--

INSERT INTO `messages` (`id`, `sender_id`, `recipient_id`, `mensagem`, `item_id`, `created_at`) VALUES
(1, 245, 246, 'Jk', 240, '2024-09-17 00:51:29'),
(2, 245, 246, 'K', 240, '2024-09-17 00:55:47'),
(3, 245, 246, 'V', 240, '2024-09-17 01:37:24'),
(4, 245, 246, 'N', 240, '2024-09-17 01:40:37'),
(5, 245, 246, 'J', 240, '2024-09-17 01:40:41'),
(6, 245, 246, 'Aaa', 240, '2024-09-17 01:47:50'),
(7, 246, 245, 'Aaa', 238, '2024-09-17 01:48:22');

-- --------------------------------------------------------

--
-- Estrutura para tabela `objeto`
--

CREATE TABLE `objeto` (
  `idObjeto` int(11) NOT NULL,
  `categoriaObjeto` int(11) NOT NULL,
  `nomeObjeto` int(11) NOT NULL,
  `tamanhoObjeto` int(11) NOT NULL,
  `localidadeObjeto` int(20) NOT NULL,
  `descObjeto` varchar(250) NOT NULL,
  `marcaObjeto` int(11) NOT NULL,
  `andar` int(11) NOT NULL,
  `corObjeto` int(11) NOT NULL,
  `images` varchar(900) NOT NULL,
  `usuario` int(11) NOT NULL,
  `dataRegistro` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `objeto`
--

INSERT INTO `objeto` (`idObjeto`, `categoriaObjeto`, `nomeObjeto`, `tamanhoObjeto`, `localidadeObjeto`, `descObjeto`, `marcaObjeto`, `andar`, `corObjeto`, `images`, `usuario`, `dataRegistro`) VALUES
(242, 7, 10, 5, 1, '', 51, 2, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fe9b04a7e-1ffc-4f0a-ac6f-1c44dce2b22c.png?alt=media&token=6d4dfeca-30d3-473d-837e-ce07e0c50d2d\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F0b2ef197-0685-41c7-a01d-8d05086c2eeb.png?alt=media&token=1014082e-fa46-4d04-a311-f3e9ede2c8cc\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fb2dee19a-078e-47aa-a518-389e5197c659.png?alt=media&token=7e724f6e-f67d-4623-9532-238ea981d92e\"]', 245, '2024-09-16');

-- --------------------------------------------------------

--
-- Estrutura para tabela `post`
--

CREATE TABLE `post` (
  `idPost` int(11) NOT NULL,
  `idObjeto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `statusPost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `post`
--

INSERT INTO `post` (`idPost`, `idObjeto`, `idUsuario`, `statusPost`) VALUES
(85, 242, 245, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbandar`
--

CREATE TABLE `tbandar` (
  `idAndar` int(11) NOT NULL,
  `descAndar` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbandar`
--

INSERT INTO `tbandar` (`idAndar`, `descAndar`) VALUES
(1, '1 andar'),
(2, '2 andar'),
(3, 'Subsolo Refeitó');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbcategoria`
--

CREATE TABLE `tbcategoria` (
  `idCategoria` int(11) NOT NULL,
  `descCategoria` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbcategoria`
--

INSERT INTO `tbcategoria` (`idCategoria`, `descCategoria`) VALUES
(7, 'Eletronico'),
(8, 'Roupas'),
(9, 'Acessorio Pessoal'),
(10, 'Material Escolar'),
(11, 'Documentos'),
(12, 'Outros');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbcor`
--

CREATE TABLE `tbcor` (
  `idCor` int(11) NOT NULL,
  `descCor` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbcor`
--

INSERT INTO `tbcor` (`idCor`, `descCor`) VALUES
(1, 'Marrom'),
(2, 'Rosa'),
(3, 'Verde'),
(4, 'Azul'),
(5, 'Amarelo'),
(6, 'Bronze'),
(7, 'Dourado'),
(8, 'Prata'),
(9, 'Vermelho'),
(10, 'vermelhor e preto'),
(11, 'Preto e Branco'),
(12, 'cinza'),
(13, 'Preto'),
(14, 'Branco'),
(15, 'Outra');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tblocal`
--

CREATE TABLE `tblocal` (
  `idLocal` int(11) NOT NULL,
  `descLocal` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tblocal`
--

INSERT INTO `tblocal` (`idLocal`, `descLocal`) VALUES
(1, 'Sala de Aula de adm'),
(2, 'Sala de Aula de nutr');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbmarca`
--

CREATE TABLE `tbmarca` (
  `idMarca` int(11) NOT NULL,
  `descMarca` varchar(20) NOT NULL,
  `idSubcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbmarca`
--

INSERT INTO `tbmarca` (`idMarca`, `descMarca`, `idSubcategoria`) VALUES
(1, 'Sandisk', 12),
(2, 'Samsuns', 12),
(3, 'Corsair', 12),
(4, 'HP', 12),
(5, 'Outro', 12),
(6, 'Samsung', 7),
(7, 'Motorola', 7),
(8, 'Iphone', 7),
(9, 'Xiaomi', 7),
(10, 'Outro', 7),
(11, 'Apple', 5),
(12, 'Sony', 5),
(13, 'Multilaser', 5),
(14, 'Philco', 5),
(15, 'Positivo', 5),
(16, 'Outro', 5),
(17, 'Motorla', 13),
(18, 'Samsung', 13),
(19, 'Apple', 13),
(20, 'Xiaomi', 13),
(21, 'Multilaser', 13),
(22, 'Outro', 13),
(23, 'Apple', 1),
(24, 'Dell', 1),
(25, 'HP ', 1),
(26, 'Lenovo ', 1),
(27, 'Asus', 1),
(28, 'Acer', 1),
(29, 'MSI', 1),
(30, 'Razer', 1),
(31, 'Positivo', 1),
(32, 'Outro', 1),
(33, 'Nike', 8),
(34, 'Adidas', 8),
(35, 'Umbro', 8),
(36, 'Mizuno', 8),
(37, 'Outro', 8),
(38, 'Samsung', 2),
(39, 'Apple', 2),
(40, 'Multilaser', 2),
(41, 'Outro', 2),
(42, 'Epson', 3),
(43, 'BenQ', 3),
(44, 'Sony', 3),
(45, 'LG', 3),
(46, 'Outro', 3),
(47, 'Hp', 9),
(48, 'Canon', 9),
(49, 'Samsung', 9),
(50, 'Outro', 9),
(51, 'raze', 10),
(52, 'Corsair', 10),
(53, 'Apple', 10),
(54, 'Multilaser', 10),
(55, 'Outro', 10),
(56, 'raze', 11),
(57, 'Corsair', 11),
(58, 'Apple', 11),
(59, 'Multilaser', 11),
(60, 'Outro', 11),
(61, 'Bose', 14),
(62, 'JBL', 14),
(63, 'Sony', 14),
(64, 'Ultimate ', 14),
(65, 'Outro', 14),
(66, 'Zara', 17),
(67, 'H&M', 17),
(68, 'Maria Filó', 17),
(69, 'TNG ', 17),
(70, 'Outro', 17),
(71, 'Nike', 18),
(72, 'Adidas', 18),
(73, 'Champion', 18),
(74, 'TNG ', 18),
(75, 'Outro', 18),
(76, 'Nike', 19),
(77, 'Adidas', 19),
(78, 'Champion', 19),
(79, 'Lacoste ', 19),
(80, 'Outro', 19),
(81, 'C&A', 20),
(82, 'Riachuelo', 20),
(83, 'Hering', 20),
(84, 'Outro', 20),
(85, 'Nike', 21),
(86, 'Adidas', 21),
(87, 'Champion', 21),
(88, 'Outro', 21),
(89, 'Zara', 22),
(90, 'TNG', 22),
(91, 'Colcci', 22),
(92, 'Outro', 22),
(93, 'Clarks', 23),
(94, 'Frye', 23),
(95, 'Duzani', 23),
(96, 'Outro', 23),
(97, 'Nike', 24),
(98, 'Adidas', 24),
(99, 'Mizuno', 24),
(100, 'Outro', 24),
(101, 'nike', 25),
(102, 'Adidas', 25),
(103, 'Mizuno', 25),
(104, 'Outro', 25),
(105, 'Puma', 26),
(106, 'Nike', 26),
(107, 'Adidas', 26),
(108, 'Outro', 26),
(109, 'BOM', 27),
(110, 'SPTrans', 27),
(111, 'Top', 27),
(112, 'Outro', 27),
(113, 'Nubank', 28),
(114, 'banco Brasil', 28),
(115, 'Bradesco', 28),
(116, 'Outro', 28),
(117, 'Nubank', 29),
(118, 'banco Brasil', 29),
(119, 'Bradesco', 29),
(120, 'Outro', 29),
(121, 'Nubank', 29),
(122, 'banco Brasil', 29),
(123, 'Bradesco', 29),
(124, 'Outro', 29),
(125, 'Sem marca', 30),
(126, 'Invicta', 31),
(127, 'Condor', 31),
(128, 'Rolex', 31),
(129, 'Outro', 31),
(130, 'Sem marca', 32),
(131, 'Sem marca', 33),
(132, 'Sem marca', 34),
(133, 'Sem marca', 35),
(134, 'Sem marca', 36),
(135, 'Sem marca', 37),
(136, 'Jandaia', 38),
(137, 'Tilibra', 38),
(138, 'Outro', 38),
(139, 'Bic', 39),
(140, 'Outro', 39),
(141, 'Bic', 40),
(142, 'Outro', 40),
(143, 'Sem marca', 41),
(144, 'Sem marca', 42),
(145, 'Sem marca', 43),
(146, 'Sem marca', 44),
(147, 'Sem marca', 45),
(148, 'Sem marca', 46),
(149, 'Sem marca', 47),
(150, 'Sem marca', 48),
(151, 'Sem marca', 49);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbstatus`
--

CREATE TABLE `tbstatus` (
  `idStatus` int(11) NOT NULL,
  `nomeStatus` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbstatus`
--

INSERT INTO `tbstatus` (`idStatus`, `nomeStatus`) VALUES
(3, 'ativado'),
(4, 'desativado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbsubcategoria`
--

CREATE TABLE `tbsubcategoria` (
  `idSubCategoria` int(11) NOT NULL,
  `descSubCategoria` varchar(20) NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbsubcategoria`
--

INSERT INTO `tbsubcategoria` (`idSubCategoria`, `descSubCategoria`, `idCategoria`) VALUES
(1, 'Notebook', 7),
(2, 'Tablet', 7),
(3, 'Projetor', 7),
(4, 'Data Show', 7),
(5, 'Fone de Ouvido com f', 7),
(6, 'Fone de Ouvido sem f', 7),
(7, 'Smartphone', 7),
(8, 'Câmera Digital', 7),
(9, 'Impressora', 7),
(10, 'Teclado', 7),
(11, 'Mouse', 7),
(12, 'Pen Drive', 7),
(13, 'Carregador', 7),
(14, 'Caixa de som', 7),
(15, 'Camiseta', 8),
(16, 'Calça', 8),
(17, 'Saia', 8),
(18, 'Moletom', 8),
(19, 'Boné', 8),
(20, 'jaqueta', 8),
(21, 'Shorts', 8),
(22, 'Vestido', 8),
(23, 'Sandalha', 8),
(24, 'Bota', 8),
(25, 'Tênis', 8),
(26, 'Meia', 8),
(27, 'Bilhete Unico', 9),
(28, 'Cartão de Crédito', 9),
(29, 'Cartão de Débito', 9),
(30, 'Chave de Casa', 9),
(31, 'Chave do Carro', 9),
(32, 'Relógio', 9),
(33, 'Brinco', 9),
(34, 'Óculos', 9),
(35, 'Colar', 9),
(36, 'Anel', 9),
(37, 'Máscara de Proteção', 9),
(38, 'Caderno', 10),
(39, 'Caneta', 10),
(40, 'Lápis', 10),
(41, 'Borracha', 10),
(42, 'Mochila', 10),
(43, 'Apontador', 10),
(44, 'Régua', 10),
(45, 'Pasta de Arquivo', 10),
(46, 'RG', 11),
(47, 'CNH', 11),
(48, 'CPF', 11),
(49, 'Certidão de Nascimen', 11);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbtamanho`
--

CREATE TABLE `tbtamanho` (
  `idTamanho` int(11) NOT NULL,
  `descTamanho` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbtamanho`
--

INSERT INTO `tbtamanho` (`idTamanho`, `descTamanho`) VALUES
(4, 'Grande'),
(5, 'Médio'),
(6, 'Pequeno');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `numeroCelular` varchar(255) DEFAULT NULL,
  `dataNascimento` datetime DEFAULT NULL,
  `imagem` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `numeroCelular`, `dataNascimento`, `imagem`, `createdAt`, `updatedAt`) VALUES
(245, 'Davi Freitasz', 'davifreitaz999@gmail.com', '$2y$10$HO3QI.QpDwchMFh9r1RnMuehtn/gNKwIpK20WYv0JkA3gUBlhtl/i', '11952041573', '2004-07-27 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F621569ed-ed05-4598-acc6-7f88ce898525.jpeg?alt=media&token=cd3c99bd-402d-4a59-9d11-1d5b4d6870de', '2024-08-24 00:28:46', '2024-08-24 00:28:46'),
(246, 'Sarah', 'freitaadavia20@etec.sp.gov.br', '$2y$10$mXQ5fA/ZpF6cfH3biouF9OSjzZk6XqhxHz/R7IRxVKEa5hYse/AK6', '11952041573', '2004-07-27 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-08-24 00:30:30', '2024-08-24 00:30:30'),
(247, 'Davi Freitas ', 'freitaadavi20@gmail.com', '$2y$10$Aww0lzE.5k97DhEYXpyrQO1vVc0eNOiE4Jaev.txwaOIu82ttpydu', '11952041573', '2004-08-23 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F26d4e672-c479-4d38-8b1e-3f6f35155c78.jpeg?alt=media&token=9e91987c-617b-4322-ac28-397efba2d0a1', '2024-08-24 01:58:46', '2024-08-24 01:58:46'),
(248, 'Davi Freitas ', 'paulo.freitas74@etec.sp.gov.br', '$2y$10$hvcEmDO5s/WerPgu.294tOvEBAy/Ym6ZtIeIY0Z/8CAax/Cqm1tt2', '11942041574', '2004-08-25 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F24854126-bf06-4d39-a423-e329792d8795.jpeg?alt=media&token=33842ed4-ef36-4f4e-a0d7-bd6be76bb367', '2024-08-24 05:28:19', '2024-08-24 05:28:19'),
(249, 'joao freitas', 'joao123@gmail.com', '$2y$10$SIAXg5SWXU96GsluK5v2Q.B29wChsehMXlwT6dknwWrliEtuxD6Qy', '11848559343', '2024-08-31 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F995234bd-4cfa-4796-91c2-7b43b7390f33.jpeg?alt=media&token=2cd8be0d-c16e-4440-ab1e-8cf0043e9d56', '2024-08-31 23:02:12', '2024-08-31 23:02:12'),
(250, 'Faixa', 'davifreitaz999@gmail.comm', '$2y$10$M8yBb9mtDSWubTRje1ygEeuMD9zuO5hRchS66gEiEqRzKjYSdBZc.', '11952041573', '2004-09-03 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-09-03 04:02:01', '2024-09-03 04:02:01');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `adm`
--
ALTER TABLE `adm`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `recipient_id` (`recipient_id`);

--
-- Índices de tabela `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`idObjeto`),
  ADD KEY `fk_usuario` (`usuario`),
  ADD KEY `categoriaObjeto` (`categoriaObjeto`),
  ADD KEY `corObjeto` (`corObjeto`),
  ADD KEY `nomeObjeto` (`nomeObjeto`),
  ADD KEY `marcaObjeto` (`marcaObjeto`),
  ADD KEY `andar` (`andar`),
  ADD KEY `localidadeObjeto` (`localidadeObjeto`),
  ADD KEY `tamanhoObjeto` (`tamanhoObjeto`);

--
-- Índices de tabela `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `fk_objeto` (`idObjeto`),
  ADD KEY `fk_user` (`idUsuario`),
  ADD KEY `post_ibfk_1` (`statusPost`);

--
-- Índices de tabela `tbandar`
--
ALTER TABLE `tbandar`
  ADD PRIMARY KEY (`idAndar`);

--
-- Índices de tabela `tbcategoria`
--
ALTER TABLE `tbcategoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Índices de tabela `tbcor`
--
ALTER TABLE `tbcor`
  ADD PRIMARY KEY (`idCor`);

--
-- Índices de tabela `tblocal`
--
ALTER TABLE `tblocal`
  ADD PRIMARY KEY (`idLocal`);

--
-- Índices de tabela `tbmarca`
--
ALTER TABLE `tbmarca`
  ADD PRIMARY KEY (`idMarca`),
  ADD KEY `idSubcategoria` (`idSubcategoria`);

--
-- Índices de tabela `tbstatus`
--
ALTER TABLE `tbstatus`
  ADD PRIMARY KEY (`idStatus`);

--
-- Índices de tabela `tbsubcategoria`
--
ALTER TABLE `tbsubcategoria`
  ADD PRIMARY KEY (`idSubCategoria`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Índices de tabela `tbtamanho`
--
ALTER TABLE `tbtamanho`
  ADD PRIMARY KEY (`idTamanho`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adm`
--
ALTER TABLE `adm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de tabela `tbandar`
--
ALTER TABLE `tbandar`
  MODIFY `idAndar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tbcategoria`
--
ALTER TABLE `tbcategoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tbcor`
--
ALTER TABLE `tbcor`
  MODIFY `idCor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `tblocal`
--
ALTER TABLE `tblocal`
  MODIFY `idLocal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tbmarca`
--
ALTER TABLE `tbmarca`
  MODIFY `idMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT de tabela `tbstatus`
--
ALTER TABLE `tbstatus`
  MODIFY `idStatus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tbsubcategoria`
--
ALTER TABLE `tbsubcategoria`
  MODIFY `idSubCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de tabela `tbtamanho`
--
ALTER TABLE `tbtamanho`
  MODIFY `idTamanho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipient_id`) REFERENCES `users` (`id`);

--
-- Restrições para tabelas `objeto`
--
ALTER TABLE `objeto`
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`usuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `objeto_ibfk_1` FOREIGN KEY (`categoriaObjeto`) REFERENCES `tbcategoria` (`idCategoria`),
  ADD CONSTRAINT `objeto_ibfk_2` FOREIGN KEY (`corObjeto`) REFERENCES `tbcor` (`idCor`),
  ADD CONSTRAINT `objeto_ibfk_3` FOREIGN KEY (`nomeObjeto`) REFERENCES `tbsubcategoria` (`idSubCategoria`),
  ADD CONSTRAINT `objeto_ibfk_4` FOREIGN KEY (`marcaObjeto`) REFERENCES `tbmarca` (`idMarca`),
  ADD CONSTRAINT `objeto_ibfk_5` FOREIGN KEY (`andar`) REFERENCES `tbandar` (`idAndar`),
  ADD CONSTRAINT `objeto_ibfk_6` FOREIGN KEY (`localidadeObjeto`) REFERENCES `tblocal` (`idLocal`),
  ADD CONSTRAINT `objeto_ibfk_7` FOREIGN KEY (`tamanhoObjeto`) REFERENCES `tbtamanho` (`idTamanho`);

--
-- Restrições para tabelas `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `fk_objeto` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`statusPost`) REFERENCES `tbstatus` (`idStatus`);

--
-- Restrições para tabelas `tbmarca`
--
ALTER TABLE `tbmarca`
  ADD CONSTRAINT `tbmarca_ibfk_1` FOREIGN KEY (`idSubcategoria`) REFERENCES `tbsubcategoria` (`idSubCategoria`);

--
-- Restrições para tabelas `tbsubcategoria`
--
ALTER TABLE `tbsubcategoria`
  ADD CONSTRAINT `tbsubcategoria_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `tbcategoria` (`idCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
