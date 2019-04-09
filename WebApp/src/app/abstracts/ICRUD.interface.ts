import { Observable } from 'rxjs';

export namespace ICRUD {
    export interface Service {
        Items(): Observable<Array<IMember>>;

        ItemById(id: number): Observable<IMember>;

        Create(value: IMember): Observable<IMember>;

        Update(id: number, value: IMember): Observable<IMember>;

        Delete(id: number): Observable<void>;
    }

    export interface IMember {
        Id?: number;
        Firstname: string;
        Lastname: string;
        Old: number;
        Created?: string;
        Updated?: string;
    }
}