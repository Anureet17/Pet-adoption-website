CREATE DATABASE  IF NOT EXISTS `petadoption` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `petadoption`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: petadoption
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `fullName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (9,'admin@gmail.com','123','Admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adoption_form`
--

DROP TABLE IF EXISTS `adoption_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adoption_form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `age` int NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `postal` varchar(20) NOT NULL,
  `phone1` varchar(30) NOT NULL,
  `phone2` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `livingIn` varchar(50) NOT NULL,
  `fencedYard` varchar(10) NOT NULL,
  `anotherPet` varchar(10) NOT NULL,
  `veterinarian` varchar(10) NOT NULL,
  `hours_spends_by_pet_alone` varchar(20) NOT NULL,
  `home_activity_level` varchar(50) NOT NULL,
  `household_have_allergies_to_animals` varchar(10) NOT NULL,
  `family_agreeable_to_adopt` varchar(10) NOT NULL,
  `fullName1` varchar(100) NOT NULL,
  `email1` varchar(100) NOT NULL,
  `phone3` varchar(30) NOT NULL,
  `Address3` varchar(255) NOT NULL,
  `fullName2` varchar(100) NOT NULL,
  `email2` varchar(100) NOT NULL,
  `phone4` varchar(30) NOT NULL,
  `Address4` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `pet_id` int DEFAULT NULL,
  `adoption_status` varchar(100) DEFAULT 'Pending',
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  KEY `pet_id_idx` (`pet_id`),
  CONSTRAINT `pet_id` FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user_signup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adoption_form`
--

LOCK TABLES `adoption_form` WRITE;
/*!40000 ALTER TABLE `adoption_form` DISABLE KEYS */;
INSERT INTO `adoption_form` VALUES (5,'Idola','Lambert',637,'nowic@mailinator.com','hiwohowep@mailinator.com','Karnataka','Bangalore','388','+1 (972) 803-8119','+1 (223) 472-8427','qekurywom@mailinator.com','Apartment','Yes','Yes','Yes','1','Busy/ Noisy','Yes','Yes','bevet@mailinator.com','gymojef@mailinator.com','+1 (167) 718-4941','joxipy@mailinator.com','tijuk@mailinator.com','xapeha@mailinator.com','+1 (178) 281-2432','sohu@mailinator.com',7,40,'Pending'),(6,'Anureet','Kaur',22,'abc','abc1','Punjab','Amritsar','143101','1234567890','1234567890','abc@gmail.com','Apartment','Yes','Yes','Yes','1','Moderate Comings/Goings','Yes','Yes','abc','abc1@gmail.com','1234567890','abc1','abc2','abc2@gmail.com','1234567890','abc2',8,31,'Approved'),(7,'Priya','Sharma',22,'abc','abc2','Punjab','Amritsar','143101','1234567890','1234567890','abc@gmail.com','Single Family Homer','Yes','Yes','Yes','4','Busy/ Noisy','Yes','Yes','abc','abc1@gmail.com','1234567890','abc1','abc2','abc2@gmail.com','1234567890','abc2',8,37,'Rejected'),(8,'priya','sharma',22,'abc1','abc2','Haryana','Faridabad','12345','1234567890','1234567890','abc123@gmail.com','Single Family Homer','Yes','Yes','Yes','1','Busy/ Noisy','Yes','Yes','abc1','abc1@gmail.com','1234567890','abc1','abc2','abc2@gmail.com','1234567890','abc2',7,38,'Pending');
/*!40000 ALTER TABLE `adoption_form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (40,'Dogs'),(41,'Cats');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `website` varchar(45) NOT NULL,
  `message` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'abc','abc@gmail.com','abc.in','asdfghnjm'),(2,'abcd','abc@gmail.com','abc.in','sdfghjukituyrsfdxcg'),(3,'abcd','abcd@gmail.com','abcd.com','asertyuikjhbvc'),(4,'Priya','priya123@gmail.com','abc.com','dfghjkjhgfghj');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `color` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `weight` varchar(100) NOT NULL,
  `subcategory_id` int DEFAULT NULL,
  `vaccinated` varchar(45) NOT NULL,
  `friendly_to_other_pets` varchar(45) NOT NULL,
  `children_friendly` varchar(45) NOT NULL,
  `isAvailable` varchar(45) DEFAULT 'Available',
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pets_ibfk_1` (`subcategory_id`),
  CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`subcategory_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (20,'Kitty','black','female','5 ',86,'Yes','yes','yes','Available','/images/pets/bombay cat.jpeg'),(21,'Tom',' golden','male','4.5',87,'Yes','yes','yes','Available','/images/pets/American Curl.jpg'),(22,'Misty','White','male','3.2',88,'Yes','yes','yes','Available','/images/pets/Persian Cat.jpeg'),(23,'Diana','Grey','male','4.1',89,'Yes','yes','yes','Available','/images/pets/British shorthair.jpeg'),(25,'Anya','Grey','male','6.8 ',91,'Yes','yes','yes','Available','/images/pets/Russian blue.jpeg'),(27,'Bunny','White','male','4.5',90,'Yes','yes','yes','Adopted','/images/pets/Ragdoll.jpeg'),(28,'Alex',' golden','female','4.1',92,'Yes','yes','yes','Available','/images/pets/Munchkin Cat.jpg'),(29,'Hunter','grey','male','3.2',93,'Yes','yes','yes','Available','/images/pets/American Bobtail.jpeg'),(30,'Nyan','white','male','4.5',94,'Yes','yes','yes','Available','/images/pets/Japanese Bobtail.jpeg'),(31,'Bella','white','female','3.2',95,'Yes','yes','yes','Adopted','/images/pets/Khao Manee.jpeg'),(32,'Chikki','White','male','15',81,'Yes','yes','yes','Adopted','/images/pets/indian spitz.jpeg'),(33,'Honey','Light golden','male','30',79,'Yes','yes','yes','Available','/images/pets/golden retriever.jpeg'),(35,'Daisy','white','male','30',96,'Yes','yes','yes','Available','/images/pets/poodle.jpeg'),(36,'Adonis','Golden','male','5',105,'Yes','yes','yes','Available','/images/pets/papillon.jpeg'),(37,'Bella','white','male','4',104,'Yes','yes','yes','Available','/images/pets/american eskimo.jpeg'),(38,'Jojo','White','female','3',103,'Yes','yes','yes','Adopted','/images/pets/maltese.jpeg'),(39,'Coco','brown','male','5 ',106,'Yes','yes','yes','Available','/images/pets/Shih Tzu.jpeg'),(40,'Rosie','Cream','female','6',97,'Yes','yes','yes','Adopted','/images/pets/Maltipoo.jpeg'),(41,'Rudy','brown','male','20',82,'Yes','yes','yes','Available','/images/pets/Pit Bull.jpeg'),(42,'Max','golden','male','20',109,'Yes','yes','yes','Available','/images/pets/gull terrier.jpeg'),(44,'Daisy',' golden','female','4.5',92,'Yes','yes','yes','Available','/images/pets/Munchkin Cat.jpg'),(45,'nancy','white','female','4',94,'Yes','yes','yes','Available','/images/pets/Persian Cat.jpeg');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `subcategory_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`subcategory_id`),
  KEY `subcategory_ibfk_1` (`id`),
  CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (75,'German Shephered',40),(76,'Bulldog',40),(78,'Labrador Retriever',40),(79,'Golden Retriever',40),(81,'Indian spitz',40),(82,'Pit Bulls',40),(86,'Bombay cat',41),(87,'American Curl',41),(88,'Persian cat',41),(89,'British Shorthair',41),(90,'Ragdoll',41),(91,'Russian Blue',41),(92,'Munchkin cat',41),(93,'American Bobtail',41),(94,'Japanese Bobtail',41),(95,'Khao Manee',41),(96,'Poodles',40),(97,'Maltipoo',40),(101,'Pomeranian',40),(103,'Maltese',40),(104,'American Eskimo',40),(105,'Papillon',40),(106,'Shih Tzu',40),(107,'Yorkshire Terrier',40),(109,'gull terrier',40);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_signup`
--

DROP TABLE IF EXISTS `user_signup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_signup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `full_name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_signup`
--

LOCK TABLES `user_signup` WRITE;
/*!40000 ALTER TABLE `user_signup` DISABLE KEYS */;
INSERT INTO `user_signup` VALUES (7,'john@gmail.com','123','John DOe','0123456789','male','Mall Road','Punjab','Amritsar'),(8,'abc@gmail.com','123','abc','1234567890','male','abc, street no.123','Punjab','Amritsar');
/*!40000 ALTER TABLE `user_signup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-25 18:43:14
