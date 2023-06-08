-- SQLBook: Code

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS works;

DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS techniques;

CREATE TABLE
    techniques (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    categories (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    works (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        summary_title VARCHAR(255),
        date VARCHAR (255) NOT NULL,
        image_src VARCHAR(255) NOT NULL,
        image_alt VARCHAR(255) NOT NULL,
        reference VARCHAR(255) NOT NULL,
        summary LONGTEXT NOT NULL,
        format VARCHAR(255) NOT NULL,
        created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        article_link VARCHAR(255),
        techniques_id INT,
        categories_id INT,
        CONSTRAINT techniques_id_fk FOREIGN KEY (techniques_id) REFERENCES techniques(id),
        CONSTRAINT categories_id_fk FOREIGN KEY (categories_id) REFERENCES categories(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    users (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        firstname VARCHAR(255),
        created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        hashed_password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    user_favourites (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        users_id INT,
        works_id INT,
        CONSTRAINT users_id_fk FOREIGN KEY (users_id) REFERENCES users(id),
        CONSTRAINT works_id_fk FOREIGN KEY (works_id) REFERENCES works(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO techniques (name)
VALUES ('Aquarelle'), ('Dessin à la mine de plomb'), ('Dessin');

INSERT INTO categories (name)
VALUES ('Usines'), ('Travailleurs'), ('Lieux'), ('Animaux');

INSERT INTO
    works (
        title,
        summary_title,
        date,
        image_src,
        image_alt,
        reference,
        summary,
        format,
        article_link,
        techniques_id,
        categories_id
    )
VALUES (
        "Effet de nuit sur la Cheminée usine du Tampon",
        "Cheminée du Tampon",
        "1866",
        "./public/assets/images/AFAC_974_1.jpg",
        "",
        "40FI79",
        'Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?',
        "20 X 14",
        "",
        1,
        1
    ), (
        "Arrivée à l'établissement du Tampon",
        "L'Établissement",
        "1866",
        "./public/assets/images/AFAC_974_2.jpg",
        "",
        "40FI78",
        'Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les "tables" pour le séchage du sucre? ',
        "15 X 13.5",
        "",
        1,
        1
    ), (
        "Tampon- Une usine",
        "Usine du Tampon",
        "10 février 1866",
        "./public/assets/images/AFAC_974_3.jpg",
        "",
        "40FI80",
        'Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)',
        "11.5 X 20.5",
        "https://view.genial.ly/5fb636d03636f40d7f883f24",
        2,
        1
    ), (
        "Quartier St Pierre. Etablissement de la Rivière, montagnes de l'Entre Deux",
        "Établissement de la Rivière",
        "1861 ou 1866",
        "./public/assets/images/AFAC_974_4.jpg",
        "",
        "40FI106",
        'L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une "bande") de travailleurs engagés effectue la "trouaison", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit. ',
        "19.5 X 16.5",
        "",
        1,
        1
    ), (
        "Boutchiana- Indien",
        "",
        "juillet 1871",
        "./public/assets/images/AFAC_974_5.jpg",
        "",
        "40FI",
        'Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.',
        "",
        "",
        1,
        2
    ), (
        "Boutchiana- Casernes",
        "",
        "24 août 1865",
        "./public/assets/images/AFAC_974_6.jpg",
        "",
        "40FI91",
        'Travailleur engagé depuis l\'Inde à l\'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur',
        "19.5 X 11",
        "",
        1,
        2
    ), (
        "Boutchiana-Casernes, de face",
        "",
        "1865",
        "./public/assets/images/AFAC_974_7.jpg",
        "",
        "40FI90",
        'Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans',
        "19.5 X 8.5",
        "",
        1,
        2
    ), (
        "Cafrine et son petit au Tampon",
        "",
        "1861",
        "./public/assets/images/AFAC_974_8.jpg",
        "",
        "40FI76",
        'C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le "Code noir" de 1723. ',
        "18 X 13",
        "",
        1,
        2
    ), (
        "La vieille (Victorine) Mme Samsi Casernes",
        "",
        "15 décembre 1865",
        "./public/assets/images/AFAC_974_9.jpg",
        "",
        "40FI52",
        'La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l\'employeur. Son foulard noué sur la tête est taillé dans la même toile. ',
        "18 X 12",
        "https://belair.hypotheses.org/389",
        1,
        2
    ), (
        "Elise",
        "",
        "août 1861",
        "",
        "",
        "40FI66",
        'Elise est une petite fille de Victorine, issue de sa fille Coralie',
        "",
        "",
        3,
        2
    ), (
        "Lucie le ventre plein de cari",
        "",
        "1866",
        "",
        "",
        "40Fi75",
        'Une autre petite fille de Victorine, sans doute dans la maison des Casernes.',
        "",
        "",
        3,
        2
    ), (
        "La belle Tina",
        "",
        "1866",
        "",
        "",
        "40Fi74",
        'Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.',
        "",
        "",
        3,
        2
    ), (
        "Jamali, Cafre, Gardien",
        "",
        "1861",
        "",
        "",
        "40Fi60",
        '"Cafre" veut dire que Jamali n\'est pas né sur l\'Habitation, mais qu\'il a vraisemblablement été recruté comme engagé. Il est armé d\'une lance, et surveille l\'orée des champs, ou les abords du camp des travailleurs.',
        "26 X 16.5",
        "https://forgetmenot.objettemoin.org/index.php/fr/actus/36-jamali-gardien-de-cannes",
        1,
        2
    ), (
        "Le parapluie du pauvre Citoyen",
        "",
        "1861",
        "",
        "",
        "40FI55",
        'Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d\'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la "boutique". Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l\'arrière-plan, sur la droite, la silhouette d\'une cheminée d\'usine, peut-être celle de Bel-Air, au Tampon.',
        "19 X 11.5",
        "",
        1,
        2
    ), (
        "La pli y fait pas rien, ça ! Tampon",
        "",
        "27 janvier 1866",
        "",
        "",
        "40FI53.2",
        'La suite du commentaire est: "Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !...." Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici? ',
        "30 X 20",
        "",
        3,
        2
    ), (
        "Monsieur Bourrayne dans le jardin des Casernes",
        "",
        "1861",
        "",
        "",
        "40FI59",
        'la suite du commentaire est: "Allons, Virasami, vivement mettre la racine de ce plant (?) comme à Madras!"  ',
        "20 X 12.5",
        "",
        3,
        2
    ), (
        " Chanvert descend le chemin de la Plaine, Golo est à ses côtés",
        "Golo et Chanvert",
        "1861",
        "",
        "",
        "40Fi72",
        'Chanvert est peut-etre un ami de la famille. Golo est un domestique qui l\'accompagne. A l\'arrière du tilbury, il semble qu\'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L\'Etablissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre. ',
        "8 X 15.5",
        "https://belair.hypotheses.org/1351",
        3,
        2
    ), (
        "Sortie du Bras de Jean Payet en allant vers le Tampon",
        "Sortie du Bras de Jean Payet",
        "29 janvier 1865",
        "",
        "",
        "40Fi83",
        'Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd\'hui, reliait les chmps de canne situés entre la ravin e Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. au sommet de ces champs, une scierie fournissait le bois et les planches pour les Etablissements K/Véguen',
        "30 X 22.5",
        "",
        3,
        3
    ), (
        "Le bassin rouge au Tampon, la ravine descend",
        "Bassin rouge",
        "10 février 1866",
        "",
        "",
        "40Fi77",
        'La cascade alimente un bassin à proximité d\'un affluent de la rivière d\'Abord',
        "15 X 9,5",
        "",
        1,
        3
    ), (
        "Excursion au volcan de Bourbon",
        "Caverne des lataniers",
        "août 1861",
        "",
        "",
        "40Fi104",
        'Mortier de Trévise et sa belle-famille sont ne excursion au volcan. Il n\'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l\'abolition de l\'escalvage de 1848',
        "24,5 X 32",
        "https://view.genial.ly/6432b64851cad10018f64868/interactive-image-caverne-lataniers",
        3,
        3
    ), (
        "Le volcan de Bourbon vu du Pas de Bellecombre",
        "Pas de Bellecombe",
        "août 1861",
        "",
        "",
        "40Fi105bis",
        'Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c\'est un esclave, Jacob, qui l\'a découvert, en réalité. Bellecombe avait commandité l\'expédition.',
        "18 X 24",
        "",
        1,
        3
    ), (
        "Mamzelle",
        "",
        "14 avril 1866",
        "",
        "",
        "40Fi108",
        'Les chevaux sont rares sur les établissements: ils font l\'objet de soins attentifs, et ne sont montés que par les propriétaires des Etablissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l\'Etablissement du Tampon.',
        "14.5 X 19.5",
        "",
        3,
        4
    ), (
        "Charrette tirée par des mulets",
        "",
        "1861",
        "",
        "",
        "40FI73",
        '4 mulets tirent une charrette apportant des cannes frâichement coupées à l\'usine. Les mulets sont nombreux dans l\'île à l\'époque de l\'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des boeufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l\'Etablissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.',
        "6.5 X 15.5",
        "",
        3,
        4
    ), (
        "Caille de Bourbon",
        "",
        "21 septembre 1861",
        "",
        "",
        "40FI53.1",
        'En réalité, la caille fut introduite d\'Asie, Inde ou chine, vers 1850. C\'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l\'époque de Mortier de Trévise, c\'est donc une curiosité, un peu en disparition, à cause de l\'extension des champs cultivés en cannes à sucre.',
        "19 X 23",
        "https://www.seor.fr/oiseau-25-caille-peinte.html",
        1,
        4
    );