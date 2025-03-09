-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/10/2024 às 03:44
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
(16, 251, 248, 'Ola Davi', 0, '2024-10-17 00:44:40'),
(17, 254, 253, 'Oii! Essa blusa é minha!!', 0, '2024-10-17 13:31:47'),
(18, 251, 248, 'Oii', 0, '2024-10-17 17:00:20'),
(19, 251, 248, 'Esse boné é meu', 0, '2024-10-17 17:00:28'),
(20, 251, 248, 'Devolve ladrão', 0, '2024-10-17 17:00:34'),
(21, 248, 251, 'Que isso', 0, '2024-10-17 17:00:42'),
(22, 248, 251, 'Opa', 0, '2024-10-17 17:00:55'),
(23, 251, 248, 'Boa', 0, '2024-10-17 17:01:01'),
(24, 258, 256, 'Eii!! Essa blusa é minha', 0, '2024-10-17 19:50:06'),
(25, 251, 248, 'Ola Davi', 0, '2024-10-28 02:40:31');

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
  `dataRegistro` date DEFAULT curdate(),
  `caractAdicional` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `objeto`
--

INSERT INTO `objeto` (`idObjeto`, `categoriaObjeto`, `nomeObjeto`, `tamanhoObjeto`, `localidadeObjeto`, `descObjeto`, `marcaObjeto`, `andar`, `corObjeto`, `images`, `usuario`, `dataRegistro`, `caractAdicional`) VALUES
(361, 8, 19, 5, 1, '', 76, 1, 4, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F44555b66-46d0-4228-a256-2040389f725f.jpeg?alt=media&token=e1e9cf8d-af2e-47a3-8cae-fd08b4a3241b\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F6d48f603-ab86-4d79-ac6a-727a472b7d18.jpeg?alt=media&token=93caf48e-1882-4df1-a7be-2a7208ab63f3\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fef9e9d9a-81ad-4be6-80c8-97020d0b3868.jpeg?alt=media&token=1259adbc-ee49-4275-b8be-a020c9b631e0\"]', 248, '2024-10-24', 35),
(362, 8, 19, 5, 1, '', 76, 1, 4, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F5cb71f34-f268-4991-9f50-b7ee6efa0432.jpeg?alt=media&token=5951d81e-85ba-404d-9158-5b7a9051c9e1\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F70c4fb4f-17fd-452d-9eb0-fbb198605c60.jpeg?alt=media&token=db5b9a8c-fc6b-450b-b467-9e09b6ccb981\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F8bdbdbf5-9d6c-4ba0-8b0a-3cfc14f895d4.jpeg?alt=media&token=53fe5ea1-f92b-4a26-a6fe-81394f017630\"]', 248, '2024-10-24', 35),
(363, 7, 12, 6, 1, '', 1, 1, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fe7c0e377-2188-4495-91da-3d9ad226cef7.jpeg?alt=media&token=523a9f0a-0c4d-4994-af9d-145552bc201d\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F80f42c4c-8c14-4a2a-8ed7-50896572e831.jpeg?alt=media&token=672b9ff0-6213-4e08-a046-6090d4347a19\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F7756b8ef-42b5-44f5-8e03-766aa1d66794.jpeg?alt=media&token=25a7ff65-2a2c-418f-9e52-0c99e795bd5d\"]', 248, '2024-10-24', 2),
(364, 8, 19, 5, 1, '', 76, 1, 4, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fec9e4c0e-1281-4af0-be79-902a2add033f.jpeg?alt=media&token=1bb906cf-02ba-4cf6-86a0-aaf2ff456f6c\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fb7dde691-a970-48be-bd4f-3c074d5583ef.jpeg?alt=media&token=d5d8b331-1434-4800-afd7-11b60b171d27\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fd60fc856-fe14-4390-af73-619915c9e53f.jpeg?alt=media&token=7ca7c02e-6c82-4c7d-8eb0-2de44168f8ee\"]', 248, '2024-10-24', 34),
(365, 7, 5, 6, 1, '', 11, 1, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F0a91126f-cca2-4dac-af7d-b5f52bd0519e.jpeg?alt=media&token=174c666d-1f49-4ae2-9286-fa0c0b15f036\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F7acf986a-209f-4ab2-96d5-46859a8e165a.png?alt=media&token=51dad038-1ba2-40eb-878d-e6a0ee58bccd\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F1c7e4917-296e-42ca-9200-f4780ef73a73.png?alt=media&token=9c384990-aa7c-4c39-b3ea-4d6b0cb9fb34\"]', 248, '2024-10-24', 8),
(366, 9, 33, 6, 1, '', 131, 1, 8, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fa7f8cdbb-0a2e-45be-b634-c32b51774531.jpeg?alt=media&token=7d6c56f4-dfe3-437b-97aa-4e9142d4bb78\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F49d44fc5-c05b-4437-8735-3b9c2c5ce0c1.jpeg?alt=media&token=935cdbc2-be30-4cc0-828f-e9e0fce002f6\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fef62a116-76fc-44e4-b7a1-f7dc20fb40d4.jpeg?alt=media&token=233752ba-fa38-407e-abe8-99655cabe4a9\"]', 248, '2024-10-24', 64),
(367, 10, 38, 5, 1, '', 136, 1, 14, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fbf60b9df-f72e-4ad2-9974-8e572ff11e6b.png?alt=media&token=b42517e9-8804-45d9-9d7d-1e253a5e8d98\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F9d0ccd16-3aed-4881-976d-98e85eea3dbf.png?alt=media&token=e5d88153-b4f8-4330-b393-53311b4ff530\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F022ca46b-272b-4405-be0c-e7009dda63a5.png?alt=media&token=df1361a1-06ca-4283-a79d-6532ecdae9c4\"]', 248, '2024-10-27', 71),
(368, 11, 46, 5, 5, 'Rg jogado', 148, 2, 15, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F2ef9986a-00bf-4d22-bfaa-86171222d3d3.png?alt=media&token=738623ac-332e-4756-8d51-8d47e104098d\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F4994e850-5760-417d-9a64-935b68cd3083.png?alt=media&token=993fd567-438a-4294-ab47-5d9ea4dad23a\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F9e5ebbc2-a741-4fe6-91a9-46e25abde4ea.png?alt=media&token=0f50319f-80af-4054-9777-b98f44a7b50e\"]', 248, '2024-10-27', 79),
(369, 12, 48, 5, 5, '', 158, 2, 14, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fda90fb01-7f1f-4d2c-9a06-d2e5c0ff203c.png?alt=media&token=8769788d-2699-4a66-af7f-5dd49cbc2b1a\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fca238f33-48e0-478b-8620-6f12394553b1.png?alt=media&token=ce82d40d-dcff-4d51-b322-0311be8c1f7f\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F9294b554-fc02-4b48-babe-35373b266dd2.png?alt=media&token=c665edad-463a-4732-a6db-5ddf6c3b2fea\"]', 248, '2024-10-27', 81),
(370, 7, 12, 6, 1, 'Pendrive bonito ', 1, 1, 10, '[\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fece30074-87ba-4d71-b655-7454f01500e0.png?alt=media&token=b198e181-56b0-41e6-a95f-e46c4a300cd6\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2F70f06393-e8d3-429b-8b1a-3f4558db4ea0.png?alt=media&token=6a2cbca5-c5aa-46b2-8fc9-5afc9103b4ba\",\"https:\\/\\/firebasestorage.googleapis.com\\/v0\\/b\\/acheaqui-2bc44.appspot.com\\/o\\/objetos%2Fc0c9f719-558c-41cb-b022-a3f0c37daa18.png?alt=media&token=c3952308-f844-4bea-baf0-70419ef190c5\"]', 248, '2024-10-27', 2);

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
(135, 361, 248, 4),
(136, 362, 248, 4),
(137, 363, 248, 4),
(138, 364, 248, 4),
(139, 365, 248, 4),
(140, 366, 248, 4),
(141, 367, 248, 4),
(142, 368, 248, 4),
(143, 369, 248, 4),
(144, 370, 248, 4);

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
-- Estrutura para tabela `tbcapacidadependrive`
--

CREATE TABLE `tbcapacidadependrive` (
  `idCapacidade` int(11) NOT NULL,
  `descCapacidade` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbcapacidadependrive`
--

INSERT INTO `tbcapacidadependrive` (`idCapacidade`, `descCapacidade`) VALUES
(1, '4GB'),
(2, '8GB'),
(3, '16gb'),
(4, '32GB'),
(5, 'Outro'),
(6, 'com fio'),
(7, 'sem fio'),
(8, 'Intel'),
(9, 'Ryzem'),
(10, '64Gb +'),
(11, '130GB +'),
(12, 'Mecanico'),
(13, 'semi mecanino'),
(14, 'normal'),
(15, '1Metro +'),
(16, 'Padrão'),
(17, 'potência alta'),
(18, 'potência baixa'),
(19, 'Jeans'),
(20, 'Moletom'),
(21, 'Tectel'),
(22, 'Com touca'),
(23, 'Sem touca'),
(24, 'Aba reta'),
(25, 'Aba torta'),
(26, 'Couro'),
(27, 'Corta vento'),
(28, 'Longo'),
(29, 'Curto'),
(30, '34 ao 38'),
(31, '39 ao 44'),
(32, 'Soquete'),
(33, 'Com foto'),
(34, 'Sem foto'),
(36, 'Platinum'),
(37, 'Black'),
(38, 'chave/carro'),
(39, 'chave/casa'),
(40, 'Ouro'),
(41, 'Prata'),
(42, 'Grau'),
(43, 'Sol/escuro'),
(44, 'Anel'),
(45, 'Aliança'),
(46, '10 Matéria +'),
(47, '1 Matéria'),
(48, 'Ponta grossa'),
(49, 'Ponta fina'),
(50, '2 a 4 bolso'),
(51, '1 bolso'),
(52, 'Com cpf'),
(53, 'Sem cpf'),
(54, 'Prótese Braço'),
(55, 'Prótese Perna');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbcaracteristicas`
--

CREATE TABLE `tbcaracteristicas` (
  `idCaractestica` int(11) NOT NULL,
  `fkItem` int(11) NOT NULL,
  `fkCaracterisca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbcaracteristicas`
--

INSERT INTO `tbcaracteristicas` (`idCaractestica`, `fkItem`, `fkCaracterisca`) VALUES
(1, 12, 1),
(2, 12, 2),
(3, 12, 3),
(4, 12, 4),
(5, 12, 5),
(6, 11, 6),
(7, 11, 7),
(8, 5, 6),
(9, 5, 7),
(10, 1, 8),
(11, 1, 9),
(12, 7, 4),
(13, 7, 10),
(14, 7, 11),
(15, 10, 12),
(16, 10, 13),
(17, 10, 14),
(18, 13, 15),
(19, 13, 14),
(20, 14, 17),
(21, 14, 18),
(22, 2, 4),
(23, 2, 4),
(24, 2, 11),
(25, 16, 19),
(26, 16, 20),
(27, 16, 5),
(28, 16, 21),
(29, 17, 19),
(30, 17, 20),
(31, 17, 5),
(32, 18, 22),
(33, 18, 23),
(34, 19, 24),
(35, 19, 25),
(36, 20, 19),
(37, 20, 26),
(38, 20, 27),
(39, 20, 5),
(40, 21, 19),
(41, 21, 20),
(42, 21, 5),
(43, 22, 28),
(44, 22, 29),
(45, 23, 30),
(46, 23, 31),
(47, 23, 5),
(48, 24, 30),
(49, 24, 31),
(50, 25, 30),
(51, 25, 31),
(52, 26, 32),
(53, 26, 14),
(54, 27, 33),
(55, 27, 34),
(57, 28, 36),
(58, 28, 37),
(59, 30, 38),
(60, 30, 39),
(61, 32, 40),
(62, 32, 41),
(63, 33, 40),
(64, 33, 41),
(65, 34, 42),
(66, 34, 43),
(67, 35, 40),
(68, 35, 41),
(69, 36, 44),
(70, 36, 45),
(71, 38, 46),
(72, 38, 47),
(73, 39, 48),
(74, 39, 49),
(75, 40, 48),
(76, 40, 49),
(77, 42, 50),
(78, 42, 51),
(79, 46, 52),
(80, 46, 53),
(81, 48, 54),
(82, 48, 55);

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
-- Estrutura para tabela `tbdenuncia`
--

CREATE TABLE `tbdenuncia` (
  `idDenuncia` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idPost` int(11) NOT NULL,
  `idDescDenuncia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbdenuncia`
--

INSERT INTO `tbdenuncia` (`idDenuncia`, `idUsuario`, `idPost`, `idDescDenuncia`) VALUES
(116, 248, 100, 2),
(117, 251, 144, 1);

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
(125, 'Sem marca', 30),
(130, 'Sem marca', 32),
(131, 'Sem marca', 33),
(132, 'Sem marca', 34),
(133, 'Sem marca', 35),
(134, 'Sem marca', 36),
(136, 'Jandaia', 38),
(137, 'Tilibra', 38),
(138, 'Outro', 38),
(139, 'Bic', 39),
(140, 'Outro', 39),
(141, 'Bic', 40),
(142, 'Outro', 40),
(144, 'Sem marca', 42),
(148, 'Sem marca', 46),
(149, 'Sem marca', 47),
(152, 'Calvin klein', 16),
(153, 'Dudalina', 16),
(154, 'Outro', 16),
(155, 'Invicta', 32),
(156, 'Rolex', 32),
(157, 'Outro', 32),
(158, 'Sem marca', 48);

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
(5, 'Fone de ouvido', 7),
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
(30, 'Chave', 9),
(32, 'Relógio', 9),
(33, 'Brinco', 9),
(34, 'Óculos', 9),
(35, 'Colar', 9),
(36, 'Anel', 9),
(38, 'Caderno', 10),
(39, 'Caneta', 10),
(40, 'Lápis', 10),
(42, 'Mochila', 10),
(46, 'RG', 11),
(47, 'CNH', 11),
(48, 'Prótese', 12);

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
-- Estrutura para tabela `tbtipodenuncia`
--

CREATE TABLE `tbtipodenuncia` (
  `idTipoDenuncia` int(11) NOT NULL,
  `tipoDenunicia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbtipodenuncia`
--

INSERT INTO `tbtipodenuncia` (`idTipoDenuncia`, `tipoDenunicia`) VALUES
(1, 'Imagens não condiz com as característica do objeto'),
(2, 'Descrição imprópria'),
(3, 'Usuário praticando suborno');

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
(246, 'Sarah', 'freitaadavia20@etec.sp.gov.br', '$2y$10$mXQ5fA/ZpF6cfH3biouF9OSjzZk6XqhxHz/R7IRxVKEa5hYse/AK6', '11952041573', '2004-07-27 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F5081a806-4a68-492b-9fd1-08e988445ba4.jpeg?alt=media&token=fb82a7a4-6b65-4b69-a3d8-494796f0d2a3', '2024-08-24 00:30:30', '2024-08-24 00:30:30'),
(248, 'Davi Freitasz', 'paulo.freitas74@etec.sp.gov.br', '$2y$10$hvcEmDO5s/WerPgu.294tOvEBAy/Ym6ZtIeIY0Z/8CAax/Cqm1tt2', '11942041574', '2004-08-25 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F3b7d8591-93df-48fa-b407-0596b9d9d389.png?alt=media&token=9bdc71c8-2972-4d18-a107-ba7b7e28768a', '2024-08-24 05:28:19', '2024-08-24 05:28:19'),
(251, 'Carlens zika', 'carlens.romelus@etec.sp.gov.br', '$2y$10$7SjUz24bsgTow2/KikTlv.2CGRfLxgl4j76cJ2RMu1SZjescVVEVG', '11954783565', '2004-07-02 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F30db62fd-b44f-4149-8fa3-471a5ed970c1.jpeg?alt=media&token=a4bd3637-d317-4c2b-90eb-e7ac8967a758', '2024-09-26 18:43:35', '2024-09-26 18:43:35'),
(252, 'Faixa', 'Silva@etec.sp.gov.br', '$2y$10$hfb2DbEBo9Esl/IAEcddseF3P60e50QB1vselfADUkaRTl9QpQLwe', '11952041573', '2024-10-17 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-10-17 14:59:11', '2024-10-17 14:59:11'),
(253, 'Lucas Silva Moura', 'lucassilva@etec.sp.gov.br', '$2y$10$Z1ayxY59RfaNCjlBtuP5peR8DiPvP/swVtuxzR8E68B0DUiBXSIfK', '11966668888', '2024-10-05 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Fd1a505fa-6358-4cf9-8144-673eb97e9f28.jpeg?alt=media&token=375d83de-53bc-4a71-adc1-f11a8d2286ac', '2024-10-17 15:21:27', '2024-10-17 15:21:27'),
(254, 'Silvana Eloisa Cardoso', 'silvaeloisa@etec.sp.gov.br', '$2y$10$Loa2J.W/U2fxNVWtZlZAJOnwFVrNlt6ke3hxU76QmLAemkD6IGTg.', '11944443333', '2024-10-29 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2F5cade532-25c3-4c28-ba2e-c97b049814d5.png?alt=media&token=d371af76-6c3b-43d7-af16-d522de8bb3af', '2024-10-17 15:28:58', '2024-10-17 15:28:58'),
(255, 'Pedro Moura', 'pedro.moura@etec.sp.gov.br', '$2y$10$3DaL1OLM6qKisCQDEOKa6uqinMiJkAzT6j37/NRFvD3o29iUlHyNO', '119258936548', '2024-10-12 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-10-17 15:37:02', '2024-10-17 15:37:02'),
(256, 'Lucas Cardoso silva', 'lucascardoso@etec.sp.gov.br', '$2y$10$QM4xl6z2i4.tyjWEoxiwEegTOxo7Cx3SHThYZIuqo421rHBKlFbbi', '11944447777', '2024-10-31 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Fa7d46ce9-7490-4750-8ab3-6f9445471811.jpeg?alt=media&token=8f2c95e6-19d0-41d9-aa7e-ddfe5c0625c0', '2024-10-17 21:44:03', '2024-10-17 21:44:03'),
(257, 'Lucas Cardoso', 'lucascardoso@etec.sp.gov.br', '$2y$10$5LVDrNQjWH5K/SHekkhVr.zeaGNZqwpJdsnYjzzOsH16iyd3LB2zG', '11955556666', '2024-10-31 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0', '2024-10-17 21:44:03', '2024-10-17 21:44:03'),
(258, 'Silvana Maia Silva', 'silvanacatdoso@etec.sp.gov.br', '$2y$10$zZU5wOgIoh4OJe1ikwL8PejZ4W8n/akcmq7ivnKvgI57CGuqDvgyS', '11934562345', '2024-10-17 00:00:00', 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Fa3871c9b-b2cc-4cf5-8346-dccb51d17530.png?alt=media&token=1d117ba3-e63a-4497-aaf4-4732dd666e4d', '2024-10-17 21:47:46', '2024-10-17 21:47:46');

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
  ADD KEY `tamanhoObjeto` (`tamanhoObjeto`),
  ADD KEY `caractAdicional` (`caractAdicional`);

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
-- Índices de tabela `tbcapacidadependrive`
--
ALTER TABLE `tbcapacidadependrive`
  ADD PRIMARY KEY (`idCapacidade`);

--
-- Índices de tabela `tbcaracteristicas`
--
ALTER TABLE `tbcaracteristicas`
  ADD PRIMARY KEY (`idCaractestica`),
  ADD KEY `fkItem` (`fkItem`),
  ADD KEY `fkCaracterisca` (`fkCaracterisca`);

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
-- Índices de tabela `tbdenuncia`
--
ALTER TABLE `tbdenuncia`
  ADD PRIMARY KEY (`idDenuncia`),
  ADD KEY `idDescDenuncia` (`idDescDenuncia`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idPost` (`idPost`);

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
-- Índices de tabela `tbtipodenuncia`
--
ALTER TABLE `tbtipodenuncia`
  ADD PRIMARY KEY (`idTipoDenuncia`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `objeto`
--
ALTER TABLE `objeto`
  MODIFY `idObjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=371;

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT de tabela `tbandar`
--
ALTER TABLE `tbandar`
  MODIFY `idAndar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tbcapacidadependrive`
--
ALTER TABLE `tbcapacidadependrive`
  MODIFY `idCapacidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `tbcaracteristicas`
--
ALTER TABLE `tbcaracteristicas`
  MODIFY `idCaractestica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

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
-- AUTO_INCREMENT de tabela `tbdenuncia`
--
ALTER TABLE `tbdenuncia`
  MODIFY `idDenuncia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT de tabela `tblocal`
--
ALTER TABLE `tblocal`
  MODIFY `idLocal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `tbmarca`
--
ALTER TABLE `tbmarca`
  MODIFY `idMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

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
-- AUTO_INCREMENT de tabela `tbtipodenuncia`
--
ALTER TABLE `tbtipodenuncia`
  MODIFY `idTipoDenuncia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=259;

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
  ADD CONSTRAINT `objeto_ibfk_7` FOREIGN KEY (`tamanhoObjeto`) REFERENCES `tbtamanho` (`idTamanho`),
  ADD CONSTRAINT `objeto_ibfk_8` FOREIGN KEY (`caractAdicional`) REFERENCES `tbcaracteristicas` (`idCaractestica`);

--
-- Restrições para tabelas `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `fk_objeto` FOREIGN KEY (`idObjeto`) REFERENCES `objeto` (`idObjeto`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`statusPost`) REFERENCES `tbstatus` (`idStatus`);

--
-- Restrições para tabelas `tbcaracteristicas`
--
ALTER TABLE `tbcaracteristicas`
  ADD CONSTRAINT `tbcaracteristicas_ibfk_1` FOREIGN KEY (`fkItem`) REFERENCES `tbsubcategoria` (`idSubCategoria`),
  ADD CONSTRAINT `tbcaracteristicas_ibfk_2` FOREIGN KEY (`fkCaracterisca`) REFERENCES `tbcapacidadependrive` (`idCapacidade`);

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
