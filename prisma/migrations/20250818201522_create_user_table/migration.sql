-- CreateTable
CREATE TABLE `User` (
    `kode` VARCHAR(20) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,
    `jabatan` VARCHAR(100) NOT NULL,
    `role` ENUM('ADMIN', 'OPERASIONAL', 'LAPANGAN', 'PILOT') NOT NULL,
    `token` VARCHAR(255) NULL,

    UNIQUE INDEX `User_kode_key`(`kode`),
    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_token_key`(`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
