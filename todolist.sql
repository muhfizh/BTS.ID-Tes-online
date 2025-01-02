-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2025 at 03:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `list_todo_tabs`
--

CREATE TABLE `list_todo_tabs` (
  `name` varchar(255) NOT NULL,
  `itemname` varchar(255) NOT NULL,
  `checklistId` int(100) NOT NULL,
  `checklistItemId` int(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `list_todo_tabs`
--

INSERT INTO `list_todo_tabs` (`name`, `itemname`, `checklistId`, `checklistItemId`, `username`, `password`, `email`, `status`) VALUES
('Checklist Baru lagi aja', '', 4, 0, 'muhfizh', 'satuduatiga', 'muhfizhufi@gmail.com', 0),
('Checklist Baru lagi aja', 'nama lain', 4, 1, 'muhfizh', 'satuduatiga', 'muhfizhufi@gmail.com', 0),
('Checklist Baru lagi aja', 'Nama baru lagi', 4, 2, 'muhfizh', 'satuduatiga', 'muhfizhufi@gmail.com', 1),
('Checklist Baru lagi aja', 'Nama baru lagi', 4, 3, 'muhfizh', 'satuduatiga', 'muhfizhufi@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list_todo_tabs`
--
ALTER TABLE `list_todo_tabs`
  ADD PRIMARY KEY (`checklistId`,`checklistItemId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
