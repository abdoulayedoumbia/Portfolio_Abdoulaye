/* ==================================================
   DONNÉES DES PROJETS
================================================== */

const projets = {

    /* ==================================================
       1. CAISSE ENREGISTREUSE
    ================================================== */
    caisse: {
        titre: "Caisse enregistreuse",
        technologies: "Excel • VBA",

        description:
            "Outil automatisé permettant de gérer les ventes, calculer les montants, générer les reçus, suivre le stock et archiver les opérations.",

        images: [
            "images/projets/caise_enregistreuse.png",
            "images/projets/caisse_dashboard.png",
            "images/projets/caisse_vente.png",
            "images/projets/caisse_recu.png"
        ],

        fonctionnalites: [
            "Gestion des ventes",
            "Gestion du stock",
            "Création automatique des reçus",
            "Calcul automatique des montants",
            "Numérotation des reçus",
            "Archivage des opérations",
            "Impression automatique"
        ],

        fichier:
            "fichiers/caise_enregistreuse.xlsm"
    },


    /* ==================================================
       2. STOCK PHARMACIE
    ================================================== */
    stock: {
        titre: "Gestion de stock pharmacie",
        technologies: "Excel • VBA",

        description:
            "Solution de suivi des stocks, mouvements, lots et dates d'expiration destinée à faciliter la gestion des produits pharmaceutiques.",

        images: [
            "images/projets/stock-pharmacie.png",
            "images/projets/stock_produits.png",
            "images/projets/stock_entrees.png",
            "images/projets/stock_ventes.png",
            "images/projets/stock_dashboard.png"
        ],

        fonctionnalites: [
            "Suivi des entrées",
            "Suivi des ventes",
            "Gestion des lots",
            "Suivi des dates d'expiration",
            "Analyse des ventes",
            "Suivi du stock",
            "Tableau de bord"
        ],

        fichier:
            "fichiers/pharmacie.xlsm"
    },


    /* ==================================================
       3. CRÉANCES
    ================================================== */
    creances: {
        titre: "Recouvrement de créances clients",
        technologies: "Excel • VBA",

        description:
            "Outil permettant de suivre les clients, les créances, les paiements, les échéances et les montants restant à recouvrer.",

        images: [
            "images/projets/dash_créances.png",
            "images/projets/creances_clients.png",
            "images/projets/creances_paiements.png",
            "images/projets/creances_dashboard.png"
        ],

        fonctionnalites: [
            "Gestion des clients",
            "Enregistrement des créances",
            "Suivi des paiements",
            "Suivi des échéances",
            "Calcul des soldes",
            "Suivi du recouvrement",
            "Tableau de bord"
        ],

        fichier:
            "fichiers/creances.xlsm"
    },


    /* ==================================================
       4. GESTION DES EMPLOYÉS
    ================================================== */
    employer: {
        titre: "Gestion des employés",
        technologies: "Microsoft Access",

        description:
            "Outil de gestion administrative permettant d'organiser les informations des employés, départements, postes et contrats.",

        images: [
            "images/projets/employer.png",
            "images/projets/employer_formulaire.png",
            "images/projets/employer_dashboard.png"
        ],

        fonctionnalites: [
            "Gestion des employés",
            "Gestion des départements",
            "Gestion des postes",
            "Gestion des contrats",
            "Suivi des informations administratives",
            "Formulaires de saisie",
            "Requêtes de recherche"
        ],

        fichier:
            "fichiers/Gestion_employer.accdb"
    },


    /* ==================================================
       5. CREADette PRO
    ================================================== */
    creadette: {
        titre: "CreaDette_Pro",
        technologies: "Excel",

        description:
            "Un outil Excel simple et pratique pour suivre les créances et les dettes de vos clients depuis un smartphone ou un ordinateur, sans VBA.",

        images: [
            "images/projets/CreaDette_Pro.png",
            "images/projets/creaDette_dash.png",
            "images/projets/creaDettes_opera.png",
            "images/projets/creaDette_clients.png",
            "images/projets/creaDette_synthèse.png"
        ],

        fonctionnalites: [
            "Recherche rapide d’un client",
            "Affichage automatique de ses créances et dettes",
            "Calcul automatique des montants restants",
            "Gestion des paiements partiels",
            "Historique détaillé des opérations",
            "Listes déroulantes pour faciliter la saisie",
            "Mise à jour automatique des cumuls de créances et dettes",
            "Analyse des écarts",
            "Guide d’utilisation intégré",
            "Compatible avec Excel Mobile",
            "Total des créances clients",
            "Total des dettes envers les clients",
            "Solde net global",
            "Statut automatique des clients",
            "Suivi de la situation globale"
        ],

        fichier:
            "fichiers/CreaDette_Pro.xlsx"
    },


    /* ==================================================
       6. CONSULTATEUR DE PRIX
    ================================================== */
    consultateur: {
        titre: "Consultateur de prix",
        technologies: "Excel",

        description:
            "Un mini-outil Excel conçu pour faciliter la consultation rapide des produits et de leurs prix directement sur smartphone.",

        images: [
            "images/projets/consulateur_prix.png",
            "images/projets/consulat_recherche.png",
            "images/projets/consulat_base_produit.png"
        ],

        fonctionnalites: [
            "Recherche rapide d’un produit en saisissant ses premières lettres",
            "Liste déroulante automatiquement filtrée",
            "Consultation instantanée du prix unitaire",
            "Consultation du prix par carton",
            "Accès rapide aux informations du produit",
            "Fonctionnement sans VBA ni script",
            "Compatible avec Excel Mobile",
            "Utilisation simple et rapide sur smartphone"
        ],

        fichier:
            "fichiers/consulateur_Prix.xlsx"
    },


    /* ==================================================
       7. SITE WEB IMMOBILIER
    ================================================== */
    immobilier: {
        titre: "Site web immobilier",
        technologies: "HTML • CSS • JavaScript",

        description:
            "Site web complet pour agences immobilières et courtiers. Une solution élégante et sur-mesure pour présenter vos biens, attirer des acheteurs ou locataires et gérer vos prises de rendez-vous.",

        images: [
            "images/projets/site_web_immobilier.png",
            "images/projets/immo_accueille.png",
            "images/projets/immo_bien.png",
            "images/projets/immo_propos.png",
            "images/projets/immo_contact.png"
        ],

        fonctionnalites: [
            "Vitrine d'accueil avec mise en valeur des biens en vedette",
            "Galerie de biens avec filtrage par type",
            "Maisons, appartements et bureaux",
            "Classification par localisation",
            "Bamako, Koulikoro et Gao",
            "Affichage clair des prix moyens par catégorie",
            "Page À propos pour présenter l'expertise et l'histoire de l'agence",
            "Formulaire de réservation et de prise de rendez-vous en ligne",
            "Menu de navigation latéral clair et épuré"
        ],

        fichier: null
    },


    /* ==================================================
       8. SITE WEB PRESTATION DE SERVICE
    ================================================== */
    prestation: {
        titre: "Site web prestation de service",
        technologies: "HTML • CSS • JavaScript",

        description:
            "Site web professionnel pour accélérer la transformation numérique des entreprises. Une solution simple, rapide et efficace pour présenter vos services et vendre en ligne.",

        images: [
            "images/projets/site_web_prestation_service.png",
            "images/projets/prestation_accueille.png",
            "images/projets/prestation_service.png",
            "images/projets/prestation_propos.png",
            "images/projets/prestation_contact.png"
        ],

        fonctionnalites: [
            "Développements web sur-mesure",
            "Création de sites vitrines",
            "Délai de création : 2 semaines",
            "Création de sites e-commerce",
            "Délai de création : 1 mois",
            "Formulaire de contact fonctionnel intégré",
            "Maintenance et sécurité informatique",
            "Formation et assistance technique",
            "Support client 24h/24 et 7j/7"
        ],

        fichier: null
    },


    /* ==================================================
       9. FACTURATIONS
    ================================================== */
    facturations: {
        titre: "Facturations",
        technologies: "Excel • VBA",

        description:
            "Un outil Excel simple et pratique pour générer vos factures automatiquement.",

        images: [
            "images/projets/facturations.png",
            "images/projets/fact_formulaire.png",
            "images/projets/fact_model.png",
            "images/projets/fact_base_données.png"
        ],

        fonctionnalites: [
            "Génération de facture",
            "Gestion de la date",
            "Numéro de facture",
            "Impression instantanée"
        ],

        fichier:
            "fichiers/facturations.xlsm"
    },


    /* ==================================================
       10. MON PORTFOLIO
    ================================================== */
    portfolio: {
        titre: "Mon portfolio",
        technologies: "HTML • CSS • JavaScript",

        description:
            "Projet personnel",

        images: [
            "images/projets/Mon_portfolio.png"
        ],

        fonctionnalites: [
            "Présentation personnelle",
            "Présentation des compétences",
            "Présentation des projets",
            "Galerie des réalisations",
            "Mode sombre",
            "Design responsive"
        ],

        fichier: null
    }

};


/* ==================================================
   MENU MOBILE
================================================== */

const menuMobile =
    document.getElementById("menu-mobile");

const navLinks =
    document.getElementById("nav-links");

if (menuMobile && navLinks) {

    menuMobile.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

}


/* Fermer le menu après clic */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks) {
                navLinks.classList.remove("open");
            }

        });

    });


/* ==================================================
   MODE SOMBRE
================================================== */

const themeToggle =
    document.getElementById("theme-toggle");

const themeSauvegarde =
    localStorage.getItem("theme");

if (themeSauvegarde === "dark") {

    document.body.classList.add("dark");

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const modeSombre =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "theme",
            modeSombre ? "dark" : "light"
        );

    });

}


/* ==================================================
   FILTRES PROJETS
================================================== */

const filtres =
    document.querySelectorAll(".filter");

const cartesProjets =
    document.querySelectorAll(".project-card");

const aucunProjet =
    document.getElementById("aucun-projet");


filtres.forEach(filtre => {

    filtre.addEventListener("click", () => {

        /* Retirer active de tous les filtres */

        filtres.forEach(f => {
            f.classList.remove("active");
        });

        /* Activer le filtre sélectionné */

        filtre.classList.add("active");

        const filtreChoisi =
            filtre.dataset.filter;

        let nombreVisible = 0;


        cartesProjets.forEach(carte => {

            const technologies =
                carte.dataset.technologies
                    .toLowerCase()
                    .split(" ");

            const afficher =
                filtreChoisi === "tous" ||
                technologies.includes(filtreChoisi);


            if (afficher) {

                carte.style.display = "";

                nombreVisible++;

            } else {

                carte.style.display = "none";

            }

        });


        if (aucunProjet) {

            aucunProjet.style.display =
                nombreVisible === 0
                    ? "block"
                    : "none";

        }

    });

});


/* ==================================================
   MODAL
================================================== */

const modal =
    document.getElementById("modal-projet");

const fermerModal =
    document.getElementById("fermer-modal");

const boutonsProjet =
    document.querySelectorAll(".project-link");

const modalImage =
    document.getElementById("modal-image");

const modalTitre =
    document.getElementById("modal-titre");

const modalTechnologies =
    document.getElementById("modal-technologies");

const modalDescription =
    document.getElementById("modal-description");

const modalFonctionnalites =
    document.getElementById("modal-fonctionnalites");

const modalTelechargement =
    document.getElementById("modal-telechargement");

const precedent =
    document.getElementById("precedent");

const suivant =
    document.getElementById("suivant");

const compteurImages =
    document.getElementById("compteur-images");

const miniatures =
    document.getElementById("miniatures");


/* ==================================================
   VARIABLES GALERIE
================================================== */

let imagesProjet = [];

let imageActuelle = 0;


/* ==================================================
   OUVRIR UN PROJET
================================================== */

boutonsProjet.forEach(bouton => {

    bouton.addEventListener("click", () => {

        const nomProjet =
            bouton.dataset.projet;

        const projet =
            projets[nomProjet];


        /* Vérification */

        if (!projet) {

            console.error(
                "Projet introuvable :",
                nomProjet
            );

            return;

        }


        /* Titre */

        if (modalTitre) {
            modalTitre.textContent =
                projet.titre;
        }


        /* Technologies */

        if (modalTechnologies) {
            modalTechnologies.textContent =
                projet.technologies;
        }


        /* Description */

        if (modalDescription) {
            modalDescription.textContent =
                projet.description;
        }


        /* ==================================================
           FONCTIONNALITÉS
        ================================================== */

        if (modalFonctionnalites) {

            modalFonctionnalites.innerHTML = "";

            projet.fonctionnalites.forEach(
                fonctionnalite => {

                    const li =
                        document.createElement("li");

                    li.textContent =
                        fonctionnalite;

                    modalFonctionnalites
                        .appendChild(li);

                }
            );

        }


        /* ==================================================
           TÉLÉCHARGEMENT
        ================================================== */

        if (modalTelechargement) {

            if (projet.fichier) {

                modalTelechargement.href =
                    projet.fichier;

                modalTelechargement.style.display =
                    "inline-flex";

            } else {

                modalTelechargement.removeAttribute(
                    "href"
                );

                modalTelechargement.style.display =
                    "none";

            }

        }


        /* ==================================================
           GALERIE
        ================================================== */

        imagesProjet =
            projet.images || [];

        imageActuelle = 0;

        afficherImage();


        /* ==================================================
           OUVRIR LE MODAL
        ================================================== */

        if (modal) {

            modal.classList.add("active");

            document.body.classList.add(
                "no-scroll"
            );

        }

    });

});


/* ==================================================
   AFFICHER IMAGE
================================================== */

function afficherImage() {

    if (!modalImage) {
        return;
    }


    /* Aucune image */

    if (imagesProjet.length === 0) {

        modalImage.src = "";

        if (compteurImages) {
            compteurImages.textContent =
                "0 / 0";
        }

        if (miniatures) {
            miniatures.innerHTML = "";
        }

        if (precedent) {
            precedent.style.display = "none";
        }

        if (suivant) {
            suivant.style.display = "none";
        }

        return;

    }


    /* Image actuelle */

    modalImage.src =
        imagesProjet[imageActuelle];

    modalImage.alt =
        `Aperçu ${imageActuelle + 1}`;


    /* Compteur */

    if (compteurImages) {

        compteurImages.textContent =
            `${imageActuelle + 1} / ${imagesProjet.length}`;

    }


    /* ==================================================
       MINIATURES
    ================================================== */

    if (miniatures) {

        miniatures.innerHTML = "";

        imagesProjet.forEach(
            (image, index) => {

                const miniature =
                    document.createElement("img");

                miniature.src = image;

                miniature.alt =
                    `Aperçu ${index + 1}`;

                miniature.classList.add(
                    "thumbnail"
                );


                if (index === imageActuelle) {

                    miniature.classList.add(
                        "active"
                    );

                }


                miniature.addEventListener(
                    "click",
                    () => {

                        imageActuelle = index;

                        afficherImage();

                    }
                );


                miniatures.appendChild(
                    miniature
                );

            }
        );

    }


    /* ==================================================
       FLÈCHES
    ================================================== */

    if (imagesProjet.length <= 1) {

        if (precedent) {
            precedent.style.display = "none";
        }

        if (suivant) {
            suivant.style.display = "none";
        }

    } else {

        if (precedent) {
            precedent.style.display = "flex";
        }

        if (suivant) {
            suivant.style.display = "flex";
        }

    }

}


/* ==================================================
   IMAGE PRÉCÉDENTE
================================================== */

if (precedent) {

    precedent.addEventListener("click", () => {

        if (imagesProjet.length <= 1) {
            return;
        }


        imageActuelle--;


        if (imageActuelle < 0) {

            imageActuelle =
                imagesProjet.length - 1;

        }


        afficherImage();

    });

}


/* ==================================================
   IMAGE SUIVANTE
================================================== */

if (suivant) {

    suivant.addEventListener("click", () => {

        if (imagesProjet.length <= 1) {
            return;
        }


        imageActuelle++;


        if (
            imageActuelle >=
            imagesProjet.length
        ) {

            imageActuelle = 0;

        }


        afficherImage();

    });

}


/* ==================================================
   FERMER MODAL
================================================== */

function fermer() {

    if (modal) {

        modal.classList.remove("active");

    }

    document.body.classList.remove(
        "no-scroll"
    );

}


if (fermerModal) {

    fermerModal.addEventListener(
        "click",
        fermer
    );

}


/* ==================================================
   CLIQUER HORS DE LA FENÊTRE
================================================== */

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            fermer();

        }

    });

}


/* ==================================================
   CLAVIER
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !modal ||
            !modal.classList.contains("active")
        ) {

            return;

        }


        /* Échap */

        if (event.key === "Escape") {

            fermer();

        }


        /* Flèche gauche */

        if (event.key === "ArrowLeft") {

            if (precedent) {
                precedent.click();
            }

        }


        /* Flèche droite */

        if (event.key === "ArrowRight") {

            if (suivant) {
                suivant.click();
            }

        }

    }
);


/* ==================================================
   ANIMATION AU DÉFILEMENT
================================================== */

const elementsReveal =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elementsReveal.forEach(element => {

        observer.observe(element);

    });

} else {

    /* Compatibilité anciens navigateurs */

    elementsReveal.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==================================================
   RETOUR EN HAUT
================================================== */

const backToTop =
    document.getElementById("back-to-top");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}
