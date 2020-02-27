import { Observable } from 'rxjs';

export interface SayingListByAuthor {
    author: string;
    sayings: Array<SayingByAuthor>;
}

export interface SayingByAuthor {
    text: string;
    id: number;
}

export abstract class SayingData {
    abstract getData(): Observable<SayingListByAuthor>;
}
