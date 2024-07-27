import { Author } from "./author.model";
import { PriceChannel } from "./pricechannel.model";
import { Subject } from "./subject.model";

export class Book {
    codL?: string;
    title?: string; 
    publishingCompany?: string; 
    edition?: number; 
    releaseYear?: string; 
    authors?: Author[]; 
    subjects?: Subject[]; 
    priceByChannels?: PriceChannel[]; 
  }