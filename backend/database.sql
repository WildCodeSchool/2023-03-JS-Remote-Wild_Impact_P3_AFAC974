-- SQLBook: Code

-- Active: 1684940650999@@127.0.0.1@3306@afac974

-- SQLBook: Code

DROP TABLE IF EXISTS biography;

DROP TABLE IF EXISTS user_favourites;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS articles;

DROP TABLE IF EXISTS works;

DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS techniques;

DROP TABLE IF EXISTS about;

CREATE TABLE
    techniques (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    about (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        summary LONGTEXT NOT NULL,
        image_src VARCHAR(255) NOT NULL,
        image_alt VARCHAR(255) NOT NULL,
        url varchar(255)
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
        summary1 LONGTEXT NOT NULL,
        summary2 LONGTEXT,
        summary3 LONGTEXT,
        summary4 LONGTEXT,
        format VARCHAR(255) NOT NULL,
        created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        techniques_id INT,
        categories_id INT,
        CONSTRAINT techniques_id_fk FOREIGN KEY (techniques_id) REFERENCES techniques(id),
        CONSTRAINT categories_id_fk FOREIGN KEY (categories_id) REFERENCES categories(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    articles (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        src VARCHAR(255) NOT NULL,
        works_id INTEGER NOT NULL,
        CONSTRAINT articles_fk FOREIGN KEY (works_id) REFERENCES works(id)
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
        users_id INT,
        works_id INT,
        CONSTRAINT users_id_fk FOREIGN KEY (users_id) REFERENCES users(id),
        CONSTRAINT works_id_forkey FOREIGN KEY (works_id) REFERENCES works(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    biography (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        title1 VARCHAR(255) NOT NULL,
        image1_src VARCHAR(255) NOT NULL,
        image1_alt VARCHAR(255) NOT NULL,
        text1 LONGTEXT NOT NULL,
        title2 VARCHAR(255),
        image2_src VARCHAR(255),
        image2_alt VARCHAR(255),
        text2 LONGTEXT,
        title3 VARCHAR(255),
        image3_src VARCHAR(255),
        image3_alt VARCHAR(255),
        text3 LONGTEXT
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    biography (
        name,
        title1,
        image1_src,
        image1_alt,
        text1,
        title2,
        image2_src,
        image2_alt,
        text2,
        title3,
        image3_src,
        image3_alt,
        text3
    )
VALUES (
        "Biographie d'Hippolyte Mortier, Duc De Trévise",
        "Hippolyte Mortier, Duc De Trévise",
        "AFAC_974_7.jpg",
        "Autoportrait du jeune Mortier, en tenue de peintre aquarelliste",
        "Hippolyte Charles Napoléon Mortier, Duc de Trévise, est né le 4 mai 1835 à Paris, issu d'une famille de noblesse acquise grâce à Napoléon 1er.
        Il a eu une carrière prestigieuse, servant comme secrétaire d'ambassade sous Napoléon III, et occupant les postes de pair de France et sénateur.
        En 1860, il a épousé Emma, la fille de Gabriel Le Coat de K / véguen, un riche commerçant et industriel de l'île de La Réunion.
        Le couple a effectué deux voyages importants à La Réunion en 1860-1861 et 1865-1866, durant lesquels Hippolyte a réalisé de nombreuses aquarelles, un genre artistique en plein essor au 19e siècle.
        Ses œuvres capturent de façon délicate et fraîche les différentes scènes et personnes rencontrées au cours de ces voyages.
        Hippolyte a aussi montré un talent pour les affaires en s'associant à son beau - frère, Denis - André Le Coat de K / véguen, pour gérer un vaste empire foncier à La Réunion, laissé par son beau - père.
        Bien qu'il ait passé plus de temps à Paris qu'à La Réunion, il faisait partie de l'entourage immédiat du couple impérial jusqu'en 1870.
        L'arrivée de la IIIe République l'a éloigné du pouvoir politique, mais il a continué à exercer une certaine influence dans les cercles économiques.
        Le couple Mortier n'a pas eu d'enfants.",
        "Les Oeuvres",
        "AFAC_974_3.jpg ",
        "Illustration de travailleurs dans les champs",
        "Il y a des indications que Mortier a peut - être effectué plus de deux voyages à La Réunion, puisque certaines de ses œuvres d'art sont datées de différentes années.
        Il a laissé une collection remarquable d'œuvres d 'art, en particulier des scènes de l'usine du Tampon et des travailleurs du sud de l'île ainsi que des dessins de Géricault, qu'il admirait particulièrement.",
        "L’Héritage",
        "Château_de_Coupvray.png",
        "Lettre de la main de Hippolyte Ch.N.Mortier, Duc de Trévise, rédigée en 1891.",
        "Il a également passé du temps au château de Coupvray, en Seine - et - Marne, à partir de 1869.
        Après la guerre de 1870, il s'est investi dans la vie du village local, ouvrant une école privée pour jeunes filles et une classe maternelle.
        Après sa mort en 1892, son épouse Emma a géré le domaine, avant de le confier à son neveu Emmanuel. Il a continué à participer activement à la vie du village.
        Le vaste réseau de relations que Mortier avait établi durant sa vie est bien documenté dans ses souvenirs, témoignant de son engagement dans la communauté."
    );

INSERT INTO
    about (name, summary, image_src, image_alt, url)
VALUES (
        'AFAC 974',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu posuere nisi. Aenean rhoncus lorem sit amet nisi vehicula, id placerat tellus placerat pellentesque. Proin quis arcu ut metus mattis commodo ut eu massa. Morbi porta at elit sed tempor. \r\n
        In viverra mollis sem, eu accumsan leo pulvinar eu. Sed eu est pretium, pulvinar libero quis, egestas lectus. Mauris eget ligula ex. Mauris hendrerit erat tortor, non porttitor ex facilisis dictum. Proin dapibus a justo nec rhoncus. Cras nec felis at turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu posuere nisi. Aenean rhoncus lorem sit amet nisi vehicula, id placerat tellus placerat pellentesque. Proin quis arcu ut metus mattis commodo ut eu massa. Morbi porta at elit sed tempor. In viverra mollis sem, eu accumsan leo pulvinar eu. Sed eu est pretium, pulvinar libero quis, egestas lectus. Mauris eget ligula ex. Mauris hendrerit erat tortor, non porttitor ex facilisis dictum. Proin dapibus a justo nec rhoncus. Cras nec felis at turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu posuere nisi. Aenean rhoncus lorem sit amet nisi vehicula, id placerat tellus placerat pellentesque. Proin quis arcu ut metus mattis commodo ut eu massa. Morbi porta at elit sed tempor. In viverra mollis sem, eu accumsan leo pulvinar eu. Sed eu est pretium, pulvinar libero quis, egestas lectus. \r\n
        Mauris eget ligula ex. Mauris hendrerit erat tortor, non porttitor ex facilisis dictum. Proin dapibus a justo nec rhoncus. Cras nec felis at turpis.',
        'islandAbout.jpg',
        'AFAC 974 logo',
        ''
    ), (
        'Objet témoin',
        'Donec fringilla ipsum libero, quis fermentum mi gravida sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed semper mi. Fusce euismod orci mi, in suscipit est semper.',
        'ObjetTemoin_Logo.png',
        'Objet témoin logo',
        'https://museo.vandanjon.com/index.php/en/'
    ), (
        'Département de la réunion',
        'Curabitur pulvinar massa sed risus fringilla, ac tincidunt orci vulputate. Maecenas vitae mi risus. Curabitur gravida eros ac tortor suscipit, et ornare.',
        'Reunion_Logo .png',
        'Département de la réunion logo',
        'https://www.departement974.fr'
    ), (
        "Iconothèque historique de l'océan Indien",
        'Nam varius blandit eros, nec tempor lacus varius et. Aliquam dolor lectus, sodales sed neque ac, tincidunt consequat ex. Etiam pellentesque urna ex, a mollis libero venenatis vitae.',
        'Ihoi_Logo.png',
        "Iconothèque historique de l'océan Indien logo",
        'https://www.ihoi.org/app/photopro.sk/ihoi_icono/?'
    );

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
        summary1,
        summary2,
        summary3,
        summary4,
        format,
        techniques_id,
        categories_id
    )
VALUES (
        "Effet de nuit sur la Cheminée usine du Tampon",
        "Cheminée du Tampon",
        "1866",
        "AFAC_974_1.jpg",
        "Lorem Ipsum",
        "40FI79",
        'Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?',
        "",
        "",
        "",
        "20 X 14",
        1,
        1
    ), (
        "Arrivée à l'établissement du Tampon",
        "L'Établissement",
        "1866",
        "AFAC_974_2.jpg",
        "Lorem Ipsum",
        "40FI78",
        'Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les "tables" pour le séchage du sucre? ',
        "",
        "",
        "",
        "15 X 13.5",
        1,
        1
    ), (
        "Tampon- Une usine",
        "Usine du Tampon",
        "10 février 1866",
        "AFAC_974_3.jpg",
        "Lorem Ipsum",
        "40FI80",
        'Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)',
        "",
        "",
        "",
        "11.5 X 20.5",
        2,
        1
    ), (
        "Quartier St Pierre. Etablissement de la Rivière, montagnes de l'Entre Deux",
        "Établissement de la Rivière",
        "1861 ou 1866",
        "AFAC_974_4.jpg",
        "Lorem Ipsum",
        "40FI106",
        'L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une "bande") de travailleurs engagés effectue la "trouaison", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit. ',
        "",
        "",
        "",
        "19.5 X 16.5",
        1,
        1
    ), (
        "Boutchiana- Indien",
        "Lorem Ipsum",
        "juillet 1871",
        "AFAC_974_5.jpg",
        "Lorem Ipsum",
        "40FI",
        'Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.',
        "",
        "",
        "",
        "Lorem Ipsum x Lorem Ipsum",
        1,
        2
    ), (
        "Boutchiana- Casernes",
        "Lorem Ipsum",
        "24 août 1865",
        "AFAC_974_6.jpg",
        "Lorem Ipsum",
        "40FI91",
        'Travailleur engagé depuis l\'Inde à l\'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur',
        "",
        "",
        "",
        "19.5 X 11",
        1,
        2
    ), (
        "Boutchiana-Casernes, de face",
        "Lorem Ipsum",
        "1865",
        "AFAC_974_7.jpg",
        "Lorem Ipsum",
        "40FI90",
        'Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans',
        "",
        "",
        "",
        "19.5 X 8.5",
        1,
        2
    ), (
        "Cafrine et son petit au Tampon",
        "Lorem Ipsum",
        "1861",
        "AFAC_974_8.jpg",
        "Lorem Ipsum",
        "40FI76",
        'C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le "Code noir" de 1723. ',
        "",
        "",
        "",
        "18 X 13",
        1,
        2
    ), (
        "La vieille (Victorine) Mme Samsi Casernes",
        "Lorem Ipsum",
        "15 décembre 1865",
        "AFAC_974_9.jpg",
        "Lorem Ipsum",
        "40FI52",
        'La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l\'employeur. Son foulard noué sur la tête est taillé dans la même toile. ',
        "",
        "",
        "",
        "18 X 12",
        1,
        2
    ), (
        "Elise",
        "Lorem Ipsum",
        "août 1861",
        "",
        "Lorem Ipsum",
        "40FI66",
        'Elise est une petite fille de Victorine, issue de sa fille Coralie',
        "",
        "",
        "",
        "Lorem Ipsum x Lorem Ipsum",
        3,
        2
    ), (
        "Lucie le ventre plein de cari",
        "Lorem Ipsum",
        "1866",
        "",
        "Lorem Ipsum",
        "40Fi75",
        'Une autre petite fille de Victorine, sans doute dans la maison des Casernes.',
        "",
        "",
        "",
        "Lorem Ipsum x Lorem Ipsum",
        3,
        2
    ), (
        "La belle Tina",
        "Lorem Ipsum",
        "1866",
        "",
        "Lorem Ipsum",
        "40Fi74",
        'Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.',
        "",
        "",
        "",
        "Lorem Ipsum x Lorem Ipsum",
        3,
        2
    ), (
        "Jamali, Cafre, Gardien",
        "Lorem Ipsum",
        "1861",
        "",
        "Lorem Ipsum",
        "40Fi60",
        '"Cafre" veut dire que Jamali n\'est pas né sur l\'Habitation, mais qu\'il a vraisemblablement été recruté comme engagé. Il est armé d\'une lance, et surveille l\'orée des champs, ou les abords du camp des travailleurs.',
        "",
        "",
        "",
        "26 X 16.5",
        1,
        2
    ), (
        "Le parapluie du pauvre Citoyen",
        "Lorem Ipsum",
        "1861",
        "",
        "Lorem Ipsum",
        "40FI55",
        'Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d\'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la "boutique". Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l\'arrière-plan, sur la droite, la silhouette d\'une cheminée d\'usine, peut-être celle de Bel-Air, au Tampon.',
        "",
        "",
        "",
        "19 X 11.5",
        1,
        2
    ), (
        "La pli y fait pas rien, ça ! Tampon",
        "Lorem Ipsum",
        "27 janvier 1866",
        "",
        "Lorem Ipsum",
        "40FI53.2",
        'La suite du commentaire est: "Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !...." Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici? ',
        "",
        "",
        "",
        "30 X 20",
        3,
        2
    ), (
        "Monsieur Bourrayne dans le jardin des Casernes",
        "Lorem Ipsum",
        "1861",
        "",
        "Lorem Ipsum",
        "40FI59",
        'la suite du commentaire est: "Allons, Virasami, vivement mettre la racine de ce plant (?) comme à Madras!"  ',
        "",
        "",
        "",
        "20 X 12.5",
        3,
        2
    ), (
        " Chanvert descend le chemin de la Plaine, Golo est à ses côtés",
        "Golo et Chanvert",
        "1861",
        "",
        "Lorem Ipsum",
        "40Fi72",
        'Chanvert est peut-etre un ami de la famille. Golo est un domestique qui l\'accompagne. A l\'arrière du tilbury, il semble qu\'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L\'Etablissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre. ',
        "",
        "",
        "",
        "8 X 15.5",
        3,
        2
    ), (
        "Sortie du Bras de Jean Payet en allant vers le Tampon",
        "Sortie du Bras de Jean Payet",
        "29 janvier 1865",
        "",
        "Lorem Ipsum",
        "40Fi83",
        'Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd\'hui, reliait les chmps de canne situés entre la ravin e Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. au sommet de ces champs, une scierie fournissait le bois et les planches pour les Etablissements K/Véguen',
        "",
        "",
        "",
        "30 X 22.5",
        3,
        3
    ), (
        "Le bassin rouge au Tampon, la ravine descend",
        "Bassin rouge",
        "10 février 1866",
        "",
        "Lorem Ipsum",
        "40Fi77",
        'La cascade alimente un bassin à proximité d\'un affluent de la rivière d\'Abord',
        "",
        "",
        "",
        "15 X 9,5",
        1,
        3
    ), (
        "Excursion au volcan de Bourbon",
        "Caverne des lataniers",
        "août 1861",
        "",
        "Lorem Ipsum",
        "40Fi104",
        'Mortier de Trévise et sa belle-famille sont ne excursion au volcan. Il n\'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l\'abolition de l\'escalvage de 1848',
        "",
        "",
        "",
        "24,5 X 32",
        3,
        3
    ), (
        "Le volcan de Bourbon vu du Pas de Bellecombre",
        "Pas de Bellecombe",
        "août 1861",
        "",
        "Lorem Ipsum",
        "40Fi105bis",
        'Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c\'est un esclave, Jacob, qui l\'a découvert, en réalité. Bellecombe avait commandité l\'expédition.',
        "",
        "",
        "",
        "18 X 24",
        1,
        3
    ), (
        "Mamzelle",
        "Lorem Ipsum",
        "14 avril 1866",
        "",
        "Lorem Ipsum",
        "40Fi108",
        'Les chevaux sont rares sur les établissements: ils font l\'objet de soins attentifs, et ne sont montés que par les propriétaires des Etablissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l\'Etablissement du Tampon.',
        "",
        "",
        "",
        "14.5 X 19.5",
        3,
        4
    ), (
        "Charrette tirée par des mulets",
        "Lorem Ipsum",
        "1861",
        "",
        "Lorem Ipsum",
        "40FI73",
        '4 mulets tirent une charrette apportant des cannes frâichement coupées à l\'usine. Les mulets sont nombreux dans l\'île à l\'époque de l\'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des boeufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l\'Etablissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.',
        "",
        "",
        "",
        "6.5 X 15.5",
        3,
        4
    ), (
        "Caille de Bourbon",
        "Lorem Ipsum",
        "21 septembre 1861",
        "",
        "Lorem Ipsum",
        "40FI53.1",
        'En réalité, la caille fut introduite d\'Asie, Inde ou chine, vers 1850. C\'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l\'époque de Mortier de Trévise, c\'est donc une curiosité, un peu en disparition, à cause de l\'extension des champs cultivés en cannes à sucre.',
        "",
        "",
        "",
        "19 X 23",
        1,
        4
    );

INSERT INTO
    articles (name, src, works_id)
VALUES (
        "La sucrerie de Bel Air",
        "https://view.genial.ly/5fb636d03636f40d7f883f24",
        3
    ), (
        "Victorine Samsi",
        "https://belair.hypotheses.org/389",
        9
    ), (
        "Jamali",
        "https://forgetmenot.objettemoin.org/index.php/fr/actus/36-jamali-gardien-de-cannes",
        13
    ), (
        "Golo",
        "https://belair.hypotheses.org/1351",
        17
    ), (
        "La caverne des Lataniers",
        "https://view.genial.ly/6432b64851cad10018f64868/interactive-image-caverne-lataniers",
        20
    ), (
        "Caille Peinte",
        "https://www.seor.fr/oiseau-25-caille-peinte.html",
        24
    );

INSERT INTO
    users (
        email,
        hashed_password,
        is_admin
    )
VALUES (
        "admin@admin.com",
        "$argon2id$v=19$m=65536,t=3,p=1$/CzR6UY8uiZYTaxJuv96vA$88z7x2E/HDrlbib+XWrj2EpgUPtoGioj3KtkZRFeAzY",
        1
    ), (
        "user@users.com",
        "$argon2id$v=19$m=65536,t=3,p=1$2On/bpEHz9AobMjjOuMxiA$IjDynbhQCWrFNVwyL1FquDH1y6Ym1ZjlwmqUFKdShxY",
        0
    );