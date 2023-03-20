### consigne

Objectif: vendre de l'énergie sur plusieurs marchés, il y a 3 principaux marchés, celui de la Réserve Primaire, la Réserve Secondaire et la Réserve Rapide. Sur chacun de ces marchés Agregio peut placer une offre composée de plusieurs "blocs" horaires (une journée de 24h pourrait contenir 8 blocs de 3 heures). Chaque bloc horaire présente la quantité d'énergie (en MW) qui sera produite et un prix plancher au-dessous duquel on ne vendra pas.

Les parcs producteurs d'électricité, de différents types (solaires, éoliens ou hydrauliques), sont capables de fournir un certain nombre de MégaWatt pendant la durée d'un bloc horaire. Pour permettre la traçabilité de la production électrique (garantie d'origine), on doit pouvoir connaître le(s) parc(s) qui va(vont) produire l'électricité d'une offre.

Nous vous demandons d'implémenter les APIs permettant de créer une offre, de créer un parc, de lister les offres proposées par Agregio pour chaque marché et d'obtenir la liste des parcs qui vendent sur un marché.

Nous attendons comme livrable, le code source du service qui réalise ces APIs et de tous les éléments que vous pourriez considérer nécessaire via un repo git accessible depuis internet (github/gitlab ou équivalent). Vous avez carte blanche sur la partie technique tout en restant sur une technologie compatible avec la JVM ou Node.
Vous ne devez pas consacrer plus de 3h à cet exercice, ce qui est déjà, nous en avons conscience, un fort investissement personnel !
Nous savons aussi que la limite de temps ne vous permettra pas de terminer l'exercice, donc nous n'attendons rien de fini mais plutôt que cela reflète votre approche du développement.

## technologies sélectionnées :
Nest JS
PostgreSQL dockerisé

## conception exercice en amont du développement:
Question : MW est une donnée de puissance, et non une donnée d'énergie comme indiqué dans l'énoncé. Doit-on supposer qu'on parle en MWh, ou calcule-t-on sur une puissance ?
=> réponse supposée : on suppose qu'on gère de la puissance, et que "la quantité d'energie" veut plutot dire "quantité d'energie à l'heure (~= puissance)"
(N.B. : 1 MWh correspondant à l'énergie fournie par 1 MW durant 1 heure)

On a 3 marchés. ENUM MARKET_TYPE à prévoir sur réserve primaire, réserve secondaire, réserve rapide
On a des parcs producteurs d'électricité qui renseignent l'info de combien de MW de puissance est fournie. 
Enum à prévoir: ELEC_ORIGIN : solaire, éolien, ou hydraulique.

On va pouvoir créer des offres. Chaque offre est réliée aux producteurs d'electricité via des blocs horaires.
=> A priori 3 tables, offre, parc_producteur, et probablement bloc_horaire.

4 WebService:
- POST  Créer une offre
- POST créer un parc
- GET lister les offres proposées par Agregio pour chaque marché (c'est à dire en /:marketType (pathParam), ou ?marketType=réservePrimaire par exemple)
- GET lister les parcs qui vendent sur un marche


## Installation

```bash
$ npm install
```

## Running the app

```bash
# Pull image from docker hub
$ docker pull postgres

# Run image with postgres params
$ docker run --name ag_db -p 5432:5432 -e POSTGRES_DB=ag_db -e POSTGRES_USER=ag_db -e POSTGRES_PASSWORD=ag_db_pwd -d postgres
# and the next time `docker start ag_db`
# Initialisation Database
$ npm run initDb

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
