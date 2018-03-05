-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Mar-2018 às 21:01
-- Versão do servidor: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `compras`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(1000) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`, `descricao`) VALUES
(1, 'teste', 'teste'),
(2, 'okoko k', 'okoko'),
(3, 'adsda ad a', 'asd as');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feira`
--

CREATE TABLE `feira` (
  `id` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `id_mercado` int(11) NOT NULL,
  `preco` int(11) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) CHARACTER SET latin1 NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `marca` varchar(255) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `item`
--

INSERT INTO `item` (`id`, `nome`, `id_categoria`, `marca`) VALUES
(1, 'teste 02', 1, 'teste final update'),
(3, 'twwerwerw', 2, 'teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mercado`
--

CREATE TABLE `mercado` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) CHARACTER SET latin1 NOT NULL,
  `imagem` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `localizacao` varchar(255) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `mercado`
--

INSERT INTO `mercado` (`id`, `nome`, `imagem`, `localizacao`) VALUES
(1, 'Todo o dia', 'aaaa', 'são lourenço'),
(2, 'Atacadão 3', 'bbbb 3', 'camaragibe 3'),
(10, 'Teste', 'ww', '222'),
(11, 'novo valor', 'aaaaa', 'wwwww'),
(17, 'teste', '1eqwee', 'qweqwe'),
(18, 'teste', '1eqwee', 'qweqwe'),
(19, 'teste', 'wrerwer', 'werwerw'),
(20, 'sdsdfasds', 'wrerwer', 'werwerw'),
(21, 'sdsdfasds', 'wrerwer', 'werwerw'),
(22, 'sdsdfasds', 'wrerwer', 'werwerw'),
(23, 'coisa', '', ''),
(24, 'teste888787', 'eerterte', 'tetert'),
(25, 'aaaa', 'eerterte', 'tetert'),
(26, 'teste', 'dddd', 'dddd'),
(27, 'aasdsd', 'asdasdasd', 'asdasdasd'),
(28, 'asdasdasda', 'sdasdasd', 'adasda'),
(29, 'wewrwerwe', 'rwerwer', 'werwer'),
(30, 'qweqweq', 'weqweqwe', 'qweqeqw'),
(31, 'adriano', 'tetste', 'etet'),
(32, 'galego do sucesso', 'awdad', 'asdasd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feira`
--
ALTER TABLE `feira`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_item` (`id_item`),
  ADD KEY `fk_id_mercado_feira` (`id_mercado`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indexes for table `mercado`
--
ALTER TABLE `mercado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `feira`
--
ALTER TABLE `feira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mercado`
--
ALTER TABLE `mercado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `feira`
--
ALTER TABLE `feira`
  ADD CONSTRAINT `fk_id_item` FOREIGN KEY (`id_item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_mercado_feira` FOREIGN KEY (`id_mercado`) REFERENCES `mercado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `fk_id_item_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
