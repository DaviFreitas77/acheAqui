-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03/10/2024 às 04:08
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
(248, 7, 12, 6, 1, '', 1, 1, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F3048ce07-5215-4f4d-9401-fe86ab7b2ac4.jpeg?alt=media&token=0644f474-450a-459d-9a1f-32d53ea305f3\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F0efbda5b-04b0-495d-bf81-8a46161588bf.jpeg?alt=media&token=e05c2ed9-a4bc-4bdc-a76e-7f67ea907b3b\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F127608f0-4a22-497c-b9a7-76a9c6917423.jpeg?alt=media&token=5dc41a6d-1a19-4a5d-9871-542ded2de53a\"]', 248, '2024-10-02'),
(255, 7, 12, 6, 1, '', 1, 3, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F6e209bea-5589-4403-a73a-8364f789c0a2.jpeg?alt=media&token=a2147303-59b3-4a08-b7be-6b6e4daa4519\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F200f2429-d4ed-486e-89fa-fb0d6c9a6814.jpeg?alt=media&token=e6b85a11-1649-48c7-b4f6-313022730041\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fdfb723aa-ec53-4897-8fb5-9ab5f6df110d.jpeg?alt=media&token=0cbe9201-7253-4e2a-8145-8994f8797e42\"]', 248, '2024-10-02'),
(263, 7, 12, 6, 2, '', 1, 2, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F234f64a7-4529-418b-a2c7-313babd941c0.jpeg?alt=media&token=44847dd4-acf8-4da0-b976-17fb0c102e1f\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F0e044c05-3a34-421b-9096-d29ce04b6a79.jpeg?alt=media&token=8fee0d20-6687-4c5e-9c43-c2630b9fc7ff\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fd66e9c85-8242-4eeb-ae32-b651d91fb63e.jpeg?alt=media&token=e2b2155e-cdff-491e-9e61-025e440ce8f2\"]', 248, '2024-10-02'),
(264, 8, 25, 5, 2, '', 104, 3, 14, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F4c1060c7-9c52-42d3-9671-d5a44db44d31.jpeg?alt=media&token=bb309278-58f5-4173-a717-a660836c1eba\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F0c880db5-ec7c-4d10-834c-b60e29294c83.jpeg?alt=media&token=85dbecbf-5c90-452a-a0b1-0f2092974b69\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F86ebf422-7150-44d9-99e3-258f92a62370.jpeg?alt=media&token=c5b68f08-c580-43fd-a1aa-90986596c50a\"]', 248, '2024-10-02'),
(265, 11, 46, 5, 2, '', 148, 3, 15, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fce5fb7ff-fce3-4a66-9d21-135e12727abe.jpeg?alt=media&token=0ea61530-a4d7-47ff-b3a8-2e5d8b3b98d4\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F399af22f-5f57-4cbd-857e-939840b92bf8.jpeg?alt=media&token=e8289eff-26cd-4fc9-b21d-0c70091b23d0\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fed9fc5bc-090b-46e0-a497-59c7bd78662c.jpeg?alt=media&token=be496d62-07a5-47cd-ac6a-3dd0206eeafb\"]', 248, '2024-10-02'),
(272, 9, 32, 5, 1, '', 130, 2, 8, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F4bfe3ebd-a450-4876-a363-df1d4acf6dcf.jpeg?alt=media&token=49cc669e-e2bc-4bc2-a819-f66b4c1afa2c\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F5b20ccdd-f952-4a06-bc09-07055edecc29.jpeg?alt=media&token=db15ef61-bde2-42fd-84e3-e6020631b4e5\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fe086d704-45d9-413b-a3a4-481c47d07435.jpeg?alt=media&token=e4acfe6a-40c8-4e57-906b-116beb65ccf6\"]', 248, '2024-10-02'),
(273, 8, 19, 5, 2, 'Boné encontrado jogado ', 76, 3, 4, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F96e066d9-be4b-4d43-9f41-b13b526f0a38.jpeg?alt=media&token=eb736118-6a73-49c7-8a60-6b1ea1201e36\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fbe30aaf5-30ba-44dc-8061-d48a89010c9a.jpeg?alt=media&token=a2b8c132-4a89-4cf0-865c-074a8dba7279\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F8e800049-c8d2-4e39-b132-54004a463857.jpeg?alt=media&token=a38d8b1c-4a9f-47c1-8ee2-3b13d4eeb12b\"]', 248, '2024-10-02');

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
(90, 248, 248, 3),
(91, 255, 248, 4),
(92, 263, 248, 4),
(93, 264, 248, 3),
(94, 265, 248, 3),
(95, 272, 248, 4),
(96, 273, 248, 4);

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
(10, 'vermelho e preto'),
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
(1, 'Sala de aula adm'),
(2, 'Sala de aula nutri'),
(3, 'Laboratório ds'),
(4, 'Laboratório nutri'),
(5, 'Auditório'),
(6, 'Cantina'),
(7, 'Refeitório'),
(8, 'Sala de aula Ds'),
(9, 'Outro');

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
(2, 'Samsung', 12),
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
(246, 'Sarah', 'freitaadavia20@etec.sp.gov.br', '$2y$10$mXQ5fA/ZpF6cfH3biouF9OSjzZk6XqhxHz/R7IRxVKEa5hYse/AK6', '11952041573', '2004-07-27 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-08-24 00:30:30', '2024-08-24 00:30:30'),
(248, 'Davi Freitas ', 'paulo.freitas74@etec.sp.gov.br', '$2y$10$hvcEmDO5s/WerPgu.294tOvEBAy/Ym6ZtIeIY0Z/8CAax/Cqm1tt2', '11942041574', '2004-08-25 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F2e6646c0-2954-4e1e-89f5-6f9fcb1f5cb3.jpeg?alt=media&token=874299c4-905c-43cf-937b-a60b24557618', '2024-08-24 05:28:19', '2024-08-24 05:28:19'),
(251, 'Carlens zika', 'carlens.romelus@etec.sp.gov.br', '$2y$10$7SjUz24bsgTow2/KikTlv.2CGRfLxgl4j76cJ2RMu1SZjescVVEVG', '11954783565', '2004-07-02 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F30db62fd-b44f-4149-8fa3-471a5ed970c1.jpeg?alt=media&token=a4bd3637-d317-4c2b-90eb-e7ac8967a758', '2024-09-26 18:43:35', '2024-09-26 18:43:35');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=274;

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

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
  MODIFY `idLocal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

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
