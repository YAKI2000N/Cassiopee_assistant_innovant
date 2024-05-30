# Projet_GlobeAssist
**Votre Assistant en ligne**

### 1. Théme de l'Application 

L'application permet aux francais à l'étranger et spécifiquement ceux qui sont à SriLanka (les résidents ou les touristes) de naviguer leur démarche en un seul clic. En effet, pour trouver des informations administratives telles que le type des visas, les procédures de renouvellements de visas, du passeport, procédures de mariage à l'étranger, déclaration de mort .. et toutes autres informations utiles touchant meme la localisation des services à proximité. Cette application, offre aussi la possibilité de siscuter avec la communauté, poser des questions aux autres personnes et avoir des recommandations. 

**Quelles dépendances ou technologies utilisées pour le développement ?**

1. Frontend : 

- Ionic 7+
- Angular 16+
- leaflet 1.7+
- chartjs 3.5+

2. Backend : 

- Node.JS
- fastify 4+ 
- mongoDB 

**Comment faire fonctionner l'application ?**

1. Frontend : 

ecrire dans le terminal les commandes suivantes : 

- cd frontend 
- npm install (installer les dependances) 
- ionic serve (afficher le fronted)

2. backend : 

ecrire dans le terminal les commandes suivantes : 

- cd backend-fastify/
- npm install (installer les dependances) 
- npm start (faire fonctionner le backend )

3. Base de données : 

ecrire dans le terminal les commandes suivantes : 

- npm run db:seeder

### 2. Modéle de données : 

L'application utilise un modéle de données composé des entités suivantes : 
1. **property**
   - Description : représente les services trouvées à proximité
   - Attributs Actuels :
     - property_id: String 
     - name: String : le nom du service trouvé (collége paul eluard, Auchan)
     - address: String : l'addresse du service
     - description: String : Description du service
     - type: String : c'est un type enuméré qui prend (Residential, gouvernemental, educational...)
     - position (lat, lg) : marque la position du service sur la map
     - Distance:  Number  : la distance du service par rapport à la localisation de l'utilisateur
     - profileImage: String : l'image du service
     - unite: String  : l'unité de la distance (km)
     - contactNumber: String : si besoin par exemple ambassade ou truc pareil
     - contactEmail: String  : si besoin selon le service
     - user_id: String 
    
2. **enquiry**
   - Description : représente les messages à poster dans la partie réseau social
   - Attributs Actuels :
     - enquiry_id: String 
     - content: String : contenu du message 
     - email: String : email de celui va envoyer ce message
     - title: String : titre du message
     - topic: String : sujet du message (par exemple inquiry about something.. )
     - read: Boolean : soit message lu soit non 
     - property: propertySchema : prend comme attribut le nom du service et son id 
     - replyTo: replyToSchema : attribut pour la réponse sur le message ou la demande (prend des informations sur le message telles que : son id, son sujet et son titre)
     - users: usersSchema : répondant à la question "le message est de qui vers qui ?"
3. **User (User)**
   - Description : Représente l'utilisateur authentifié. 
   - Attributs Actuels:
     - `id` 
     - `email` 
     - `Password`
     - `full name` 
 
   - Remarque utile sur les données d'authentification :
      fullName: "test tester",
      email: "test@email.com",
      password: "password"

4. **Appercu sur les routes si nécessaire** : 

En executant l'application, vous allez trouver les pages suivantes : 

- Map : /map : montrant la map aussi bien que les services montrées par un marqueur, aussi vous trouverez à coté les cartes des différentes services montrant des détails concernant ce service. Vous cliquez sur détail pour voir toutes les informations utiles.

- Nearest services: /properties: montre la liste des services à proximité avec des options de regroupement, d'affichage personnalisé selon certains critéres. Sur chaque service, vous pouvez envoyer un message au communauté pour demander des informations supplémentaires sur le service..

- Messages : /enquiries : contient les differents messages échangés entre les différents membres de la communauté. Cette page ne peut etre affichée que si l'utilisateur est authentifié. 

- Life Cost Calc : /cost :  nous avons pensé à guider l'utlisateur un peu plus en lui fournissant un calculateur qui lui permettra de calculer ces dépenses mensuelles, la tax, changer la devise..  (mais ceci n'a pas pu etre affiché en frontend vu des problémes de CSS)

- Assistance :/assistant : là où on va poser les questions, cette page contient des données statiques 

Pages Typiques de l'application : 

-Settings : /settings : contient des préférences sur le théme de l'application.

-About : /about : decrit ce que fait l'application avec une possibilité d'envoi de formulaire de questions vers nous. 

- Account : /account : contient les informations sur le profil si l'utilisateur voudra changer quelque chose, contient la possibilité de changer le mot de passe et une page de notification. 

- SignOut : emmene à la page de signin dont la route est /user/signin


  ### 3. Nomenclature du code :

- **backend/controllers** : 

Dans cette partie, on va détailler le role de chaque code et pour plus d'informations, veuillez voir le code qui est ben commenté. 

- le dossier auth (controllers/auth) : 

  - fichier change-password.js : Le code effectue des vérifications et des validations de base sur les mots de passe avant de procéder à des opérations plus complexes comme la recherche dans la base de données et le hachage des mots de passe.
  - fichier register.js : Ce code permet d'enregistrer un nouvel utilisateur en vérifiant que le mot de passe est valide, en hachant le mot de passe, en créant un nouvel utilisateur avec un identifiant unique, et en renvoyant les informations de l'utilisateur ainsi qu'un token JWT pour l'authentification.

  - fichier signin.js : Ce code permet à un utilisateur de se connecter en vérifiant son email et son mot de passe, et en générant un token JWT pour l'authentification. Si les informations d'identification sont correctes, les informations de l'utilisateur et le token sont renvoyés dans la réponse.

- le dossier enquiries et properties(controllers/enquiries et controllers/properties) :

Ces dossiers contiennent des fichiers des CRUD qui sont typiques. 

- le dossier users (controllers/users) : 

 - get-users.js : implémente une fonction getUsers est destinée à être utilisée comme un contrôleur dans une route d'API. Lorsque cette route est appelée, la fonction récupère tous les utilisateurs de la base de données et renvoie une réponse contenant ces utilisateurs. Elle est utilisée pour afficher une liste d'utilisateurs.

 - get-user.js : pour afficher un utilisateur 
 - get-me.js : implémnte la fonction getMe qui est destinée à être utilisée comme un contrôleur dans une route d'API. Lorsque cette route est appelée, la fonction extrait le token Bearer de la requête, utilise ce token pour récupérer l'ID de l'utilisateur, recherche l'utilisateur correspondant dans la base de données, et renvoie les informations de cet utilisateur.

 - **backend/database-seeder** :

 - On trouver le dosier dummy-data : ce dossier contient des fichiers où on trouve des scripts utilisé pour peupler une base de données avec des données initiales. Ces données, servent comme des données de test nécessaires pour démarrer l'application et voir les fonctionnalités du backend. On trouve alors des données de test des utilisateurs, des services et des messages. 

- Aussi, on trouve un dossier enums qui contient la déclaration des attributs de type enumerée comme le type de service (gouvernemental, eductaionnel, ..), aussi les sujets des messages ..

- Il y a un dossier routes qui, pour chaque fichier de fonctionnalité et de modéle, donne un code qui  symbolise la création d'options de route pour une requête HTTP dans une application Fastify. Les options incluent des étapes de pré-validation, un schéma de validation des réponses, et un gestionnaire de requêtes. Donc on trouve le contenu d'une requete ou une réponse HTTP typique dont les champs sont : ( statut :200, 201 .. / le message : par exemple pour une requete de création d'un message le contenu d'un message HTTP est "Enquiry created", et un autre champ data qui contient toutes les informations utiles )

- **frontend/src/app** :

Ce dossier contient des pages (qui modélise les vraies pages qu'on trouve dans notre appli), chaque page ionic, contient des composants Angular. Le code n'est pas assez complexe, c'est du HTML, SCSS et des fichier typeScript soit pour la logique présentation ou pour déclarer les routes.

### 4. Fonctionnalités à ajouter à l'application 
:
→ Integrer en vrai une API chatgpt pour que l'assistant répond correctement.

→ rectifier la page du calculateur.

→ Rendre la map plus interactive avec la localisation.

→ Rendre les données dynamiques.




