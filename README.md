
# Comment choisir le thème de départ

## Cibler des sujets concernés par beaucoup de monde (fan ou pas)

 - Sport
 - Fête
 - Musique
 - Voiture ...

## Réfléchir à un produit non-existant

Une fois que le sujet est choisi, et que nous pensons que le nombre de personnes potentiellement intéressé peut etre elevés, voyons voir comment se démarquer du lot par une idée innovante et qui n'existe pas. Pour se faire, regarder sur internet et sur les installateurs comme l'ApStore et Google Play pour avoir une idée des produits déjà existants. Une fois l'idée repérée, plus qu'a faire le contour de se projet, voir de cibler plusieurs projets.

L'idée peut etre aussi de débuter par quelque chose de déjà existant pour se former sur la manière de développer/ monétiser/ industrialiser/ et lancer l'application sur différentes plateformes.

## Choisir la manière qui touche le plus de monde

Et oui, afin de toucher un grand nombre de personnes, il faut s'assurer que le plus de personnes voudront et auront l'occasion de se procurer notre produit. Mais alors, comment faire ? Il existe plusieurs voies possibles.

 - La création d'un site internet simple
 - la création d'une application développer avec des outils android ou apple
 - la création d'une pwa, qui est une application web

 Dans notre cas, l'utilisation d'une pwa semble la meilleure option, car à la fois rapide et simple à utiliser. 

 ## Quels sont les langages qui permettent de développer des pwa

 Pour faire ce genre d'application web (Progressive Web App), il existe de nombre association.

 - Nextjs
 - Gatsbyjs
 - Vue + Vitejs
 - Svelte + vite
 - VanillaJS + vite
 - React + Vite

 Dans notre cas, React est notre langage de prédilection, et c'est donc celui la que nous utiliserons.
 Utiliser ce genre d'outils nous assure à la fois de faire installer notre application, de faire des pushs, d'avoir un accès direct à celle ci ainsi que de développer rapidement. Sur le long terme, une application native serait plus preferable, mais demande plus de ressource et de temps (maintenance, développpement...).

 Cependant, il est possible par le biais de plusieurs outils de convertir une pwa en une application native.

 - PWABuilder (https://www.pwabuilder.com) est la meilleure manière de faire car il créé les packages android à mettre sur Google Play (.aab) et un projet IOS à importer dans Xcode.

 C'est idéal pour aller plus vite, dans le lancement d'un nouveau produit. Une fois l'application native, les liens vers BDD fonctionnent toujours.

 ## Comment démarrer un projet pwa en React Vite JS

 1. Créer le projet

 `npm create vite@latest my-pwa-app -- --template react
cd my-pwa-app
npm install
`

2. Installer le plugin PWA

`npm install vite-plugin-pwa --save-dev`

3. Configurer un fichier vite.config.ts ou vite.config.js

`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Nom de ton app',
        short_name: 'AppShort',
        description: 'Description de ton app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
`

4. Ajouter les icones de l'application dans /public

5. Build et lance l'app

`npm run build
npm run preview
`

## Utilisation de l'application

### Sur mobile

+ application installé comme application native
+ notification push
+ accès gps, caméra, fichiers..
+ mode offline
+ icone sur l'écran d'accueil
+ comportement comme app classique

### Sur ordinateur

1. Navigation noramle d'un site

2. Création d'une app desktop native

Pour se faire utilisation d'un de ces outils.

- Electron (a tester)
- Tauri (plus leger qu'electron)
- Neutralinojs (minimaliste)

## Remunération

Pas de sous en fonction du nombre de téléchargement de ton application.
Mode courant de rémunération des applications.

- App gratuite + pub + achats intégrés
- App gratuite + abonnement

Afin de réfléchir à une rémunération, il faut aussi prévoir qu'il faut se créer des comptes personnalisés afin de passer des paiements. Cette étape est crucial est nécéssite donc un backend avec une base de données. Voici une architecture simple pour gérer ceci, sachant que pour la plupart des hébergeurs gratuits, il est compliqué d'associer son hébergement ainsi qu'une base de données.

- React ViteJS          => frontend
- Supabase              => auth + base de données + stockage
- Stripe                => checkout + paiement récurrent
- Netlify ou Vercel     => hébergement

## Mode Offline

Il existe plusieurs méthodes pour gérer les données en offline.

- utilisation du localstorage, IndexedDB, ou localForage
- synchronisation avec base de données une fois connexion rétablie
- utilisation d'outil tel que Redux Persist, SWR + cache

## API en ligne gratuite

Voici une liste non éxaustive des API gratuite et en temps réels dans différents thème

- RapidAPI (tout)
- public API (api public)
- API ninja (tout)
- OpenWeatherMap (météo)
- NewsAPI (résumé presse monde)         --> temps réel
- Football-data.org (résultats foot)

Il est possible d'automatiser des taches toutes les tant de temps, grace a cron job.

## Gérer l'affluence et le dépassement serveur

1. Utilisation intélligente du cache

Cela permet d'éviter le débordement mémoire et trop de requête innutile vers le serveur. Utilision du localstorage coté client ou un cache serveur (redis, superbase..).

2. Mettre en place un backend scalable et serverless

Utiliser des plateformes qui font déjà le travail. Elles gèrent les montées en charge.

- Firebase (RealTime DB, auth, cloud authentification)
- Superbase (Postgres + Edge functions)
- Cloudflare Workers/ Deno deploy/ vercel functions

3. Limitation des appels trop fréquents

Il faut limiter le nombre d'appel, pour des clics sur bouton par exemple, ou appela API. Un appel a API tous les tant de temps, sauf si changement.

4. Préparation d'un plan de montée en charge

Ajouter un reverse proxy (Cloudflare) pour gérer les DDos. Ce type de techno peut être amené à etre payant si dépassement.

5. Analyse et monitoring

Intégration d'outil tel que :

- Plausible ou google analytics         => voir affluence 
- Sentry ou Log Rocket                  => voir les erreurs
- Status page                           => informer si soucis

![Fonctionnement image](C:\Users\antoi\OneDrive - yncréa\Documents\Antoine\Bazar\Projets\img\fonction.png "Schéma de fonctionnement").

## Github commande

Voici quelques conseils de fonctionnement avec les commandes pour éviter tout problemes.

Créer 2 branches, une main (principale), et une developp (pour le développement).

La branche main est vide par defaut, et nous codereons sur developp avant de push vers main.

Dans le branche developp:

- git checkout developp
- git add .
- git commit - m "message"
- git push -u origin developp

Dans la branche main:

- git checkout main
- git merge developp
- git push -u origin main

Les données ont bien été push dans les 2 branches.

## Structure propre d'un projet react Typescript

```
src/
├── assets/            # Images, logos, polices, etc.
│   └── images/
├── components/        # Composants réutilisables
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   └── Navbar/
├── features/          # Fonctionnalités ou modules métiers (domaines)
│   └── user/
│       ├── components/
│       ├── api.ts     # appels API liés à user
│       ├── userSlice.ts (si Redux)
│       └── index.tsx
├── pages/             # Pages (souvent liées au routing)
│   ├── Home.tsx
│   └── About.tsx
├── routes/            # Configuration du routing (React Router par exemple)
│   └── AppRoutes.tsx
├── types/             # Types globaux TypeScript
│   └── index.d.ts
├── hooks/             # Hooks personnalisés
│   └── useAuth.ts
├── utils/             # Fonctions utilitaires ou helpers
│   └── formatDate.ts
├── context/           # React Contexts (AuthContext, ThemeContext, etc.)
├── services/          # Appels API, configuration axios, etc.
├── App.tsx
└── main.tsx           # (ou index.tsx)
```


