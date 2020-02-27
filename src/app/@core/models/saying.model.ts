import { Observable } from 'rxjs';

export interface Saying {
    author: string;
    text: string;
    id: number;
}

export interface SayingListByAuthor {
    author: string;
    sayings: Array<SayingByAuthor>;
}

export interface SayingByAuthor {
    text: string;
    id: number;
}

export abstract class SayingData {
    abstract getDataByAuthor(): Observable<Array<SayingListByAuthor>>;
    abstract getData(): Observable<Array<Saying>>;
}
