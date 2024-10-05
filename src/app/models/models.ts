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

export interface Livreur {
    id : number,
    nom : string ,
    prenoms : string;
    adresse : string ,
    telephone : string ,
    photos : string ,
    email : string ,
    disponibilite : boolean
}

export interface Livraison {
    id : number,
    dateLivraison : string ,
    commandes : Commande,
    livreur : Livreur,
    livrer : boolean 
}

export interface Produit{
    code : string ,
    designation : string ,
    quantite : number,
    prix : number,
    type : string ,
    description : string , 
    couleur : string ,
    photos : string ,
    nomCathegorie : string  
}


