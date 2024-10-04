export interface Cathegorie{
    id : number,
    nomCategorie : string ,
    description : string ,
    image : string 
}

export interface Client{
    id : number,
    nom : string ,
    prenoms : string ,
    adresse : string ,
    email : string ,
    region : string ,
    telephone : string ,
    photos : string 
}

export interface Commande{
    id : number,
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