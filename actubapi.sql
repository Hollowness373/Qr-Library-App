-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2021 at 06:09 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `actubapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `registeredlist`
--

CREATE TABLE `registeredlist` (
  `ID` int(255) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Course` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeredlist`
--

INSERT INTO `registeredlist` (`ID`, `FullName`, `Course`, `Email`) VALUES
(1, 'Bryan Yj Actub', 'BSCPE', 'nirvy.actub@gmail.com'),
(2, 'Kyle Allan T. Lico', 'BSCPE', 'trial.email1@gmail.com'),
(3, 'Eduardo G. Lagbo Jr', 'BSCPE', 'trial.email2@gmail.com'),
(4, 'AdminLibrary', 'Admin', 'PUPBNAdmin2021'),
(5, 'Russell Caile T. Tayag', 'BSCPE', 'trial.email3@gmail.com'),
(7, 'Joshua I. Aborde', 'DCIT', 'trial.email4@gmail.com'),
(8, 'Patrick Ramon P. Baligod', 'BSCPE', 'trial.email5@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `timeinandoutdb`
--

CREATE TABLE `timeinandoutdb` (
  `ID` int(255) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Course` varchar(255) NOT NULL,
  `TimeIn` varchar(255) NOT NULL,
  `TimeOut` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timeinandoutdb`
--

INSERT INTO `timeinandoutdb` (`ID`, `FullName`, `Course`, `TimeIn`, `TimeOut`) VALUES
(5, 'Bryan Yj Actub', 'BSCPE', '2021-07-14 02:39:26', '2021-07-14 02:40:13'),
(6, 'Eduardo G. Lagbo Jr', 'BSCPE', '2021-07-14 02:39:36', '2021-07-14 02:40:17'),
(7, 'Kyle Allan T. Lico', 'BSCPE', '2021-07-14 02:39:43', '2021-07-14 02:40:29'),
(8, 'Russell Caile T. Tayag', 'BSCPE', '2021-07-14 02:39:54', ''),
(9, 'Joshua I. Aborde', 'DCIT', '2021-07-14 02:40:01', '2021-07-14 02:40:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registeredlist`
--
ALTER TABLE `registeredlist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `timeinandoutdb`
--
ALTER TABLE `timeinandoutdb`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registeredlist`
--
ALTER TABLE `registeredlist`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `timeinandoutdb`
--
ALTER TABLE `timeinandoutdb`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
