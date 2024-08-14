-- CreateTable
CREATE TABLE `Music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) NOT NULL,
    `artists` VARCHAR(191) NOT NULL,
    `album` VARCHAR(50) NULL,
    `genres` VARCHAR(191) NOT NULL,
    `single` BOOLEAN NOT NULL,
    `release_year` DATE NOT NULL,
    `duration` TIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `user` VARCHAR(20) NOT NULL,
    `type` ENUM('User', 'Admin') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(8) NOT NULL,
    `date_birth` DATE NOT NULL,
    `date_register` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `estoque` SMALLINT NOT NULL,
    `assessment` DECIMAL(3, 2) NOT NULL,
    `date_register` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
