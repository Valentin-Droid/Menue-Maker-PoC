# Documentation de la Preuve de Concept - Menu Maker

## 1. Vue d'ensemble

### 1.1 Objectif
Cette preuve de concept démontre l'intégration d'un système de création de menus pour restaurants utilisant Tally.so comme solution de formulaire. Le PoC valide la faisabilité technique de la création et personnalisation de menus via une interface web.

### 1.2 Technologies utilisées
- Next.js 14 (Framework React)
- Tailwind CSS (Styling)
- shadcn/ui (Composants UI)
- Tally.so (Système de formulaire)

## 2. Configuration technique

### 2.1 Structure du projet
```
menu-maker-poc/
├── app/
│   ├── layout.js        # Layout principal
│   └── page.js          # Page d'accueil
├── components/
│   ├── menu-builder.js  # Composant d'intégration Tally
│   └── ui/              # Composants shadcn/ui
├── public/
└── package.json
```

### 2.2 Configuration du formulaire Tally
Le formulaire Tally est structuré en sections :
- Informations Restaurant
  - Nom du restaurant
  - Logo
  - Description
- Menu
  - Catégories de plats
  - Détails des plats (nom, description, prix, image)

## 3. Implémentation

### 3.1 Intégration Tally
```javascript
// Exemple d'intégration de l'iframe Tally
<iframe
  src="https://tally.so/embed/3XRAvY"
  width="100%"
  height="600"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Créateur de menu"
  style={{ border: "none" }}
/>
```

### 3.2 Gestion du chargement
Le composant gère trois états :
- Chargement initial
- Erreur de chargement
- Affichage du formulaire

### 3.3 Sécurité
- L'intégration est sécurisée via l'iframe Tally
- Les données sont stockées sur les serveurs Tally
- L'accès est limité aux domaines autorisés

## 4. Fonctionnalités démontrées

### 4.1 Création de menu
- Ajout d'informations de restaurant
- Création de sections de menu
- Ajout de plats avec détails
- Upload d'images

### 4.2 Interface utilisateur
- Design responsive
- Feedback utilisateur lors du chargement
- Gestion des erreurs
- Interface cohérente avec shadcn/ui

## 5. Limitations et considérations

### 5.1 Limitations actuelles
- Formulaire hébergé sur Tally.so
- Personnalisation limitée de l'interface du formulaire
- Dépendance à la disponibilité des serveurs Tally

### 5.2 Améliorations possibles
- Intégration de webhooks pour traitement post-soumission
- Prévisualisation en temps réel du menu
- Système de templates de menu
- Export PDF personnalisé

## 6. Tests

### 6.1 Tests effectués
- Chargement du formulaire
- Soumission de données
- Comportement responsive
- Gestion des erreurs

### 6.2 Résultats
- Le formulaire se charge correctement
- Les données sont correctement envoyées à Tally
- L'interface s'adapte aux différents écrans
- Les erreurs sont gérées et affichées clairement

## 7. Procédure d'installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Configuration des variables d'environnement
cp .env.example .env

# Lancer le serveur de développement
npm run dev
```

## 8. Déploiement

### 8.1 Prérequis
- Node.js 18+
- Compte Tally.so
- Formulaire Tally configuré

### 8.2 Étapes de déploiement
1. Build du projet : `npm run build`
2. Configuration des variables d'environnement
3. Déploiement sur la plateforme choisie

## 9. Conclusion

Cette preuve de concept démontre la faisabilité d'une solution de création de menus utilisant Tally.so. Les principales fonctionnalités sont opérationnelles et l'intégration est stable. Le système peut être étendu pour inclure des fonctionnalités additionnelles selon les besoins du projet.
