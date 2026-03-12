
CREATE DATABASE IF NOT EXISTS techstore;
USE techstore;

CREATE TABLE client (
    id_client INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone VARCHAR(20),
    adresse VARCHAR(255)
);

CREATE TABLE categorie (
    id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(100) NOT NULL
);

CREATE TABLE produit (
    id_produit INT AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(150) NOT NULL,
    description TEXT,
    prix DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    image VARCHAR(255),
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
);

CREATE TABLE commande (
    id_commande INT AUTO_INCREMENT PRIMARY KEY,
    date_commande DATETIME NOT NULL,
    statut VARCHAR(50) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    id_client INT NOT NULL,
    FOREIGN KEY (id_client) REFERENCES client(id_client)
);

CREATE TABLE ligne_commande (
    id_ligne INT AUTO_INCREMENT PRIMARY KEY,
    quantite INT NOT NULL,
    prix_unitaire DECIMAL(10,2) NOT NULL,
    id_commande INT NOT NULL,
    id_produit INT NOT NULL,
    FOREIGN KEY (id_commande) REFERENCES commande(id_commande),
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
);