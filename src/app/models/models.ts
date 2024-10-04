export interface Cathegorie{
    id : number,
    nomCategorie : string ,
    description : string ,
    image : string 
}

export interface Client{
    nom : string ,
    prenoms : string ,
    adresse : string ,
    region : string ,
    telephone : string ,
    photos : string 
}

export interface Commande{
    dateCommande : string ,
    qteCommander : number,
    typePayment : string,
    photosPayement : string ,
    codeProduit :string,
    nomClient : string ,
    prenoms : string ,
    telephoneClient : string ,
    adresseClient: string ,
    regionClient : string ,
    photos : string ,
    email : string
}

export enum PaymentType {
    TELMA=0 , AIRTEL=1 , ORANGE=2 , CARTES_BANCAIRE=3
}