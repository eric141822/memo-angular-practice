import { Injectable } from '@angular/core';
import { Memo } from '../Memo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
}

@Injectable({
    providedIn: 'root'
})
export class MemoService {

    private dbAPI: string = "http://localhost:3000/memos";

    constructor(private http: HttpClient) { }

    getMemos(): Observable<Memo[]> {
        return this.http.get<Memo[]>(this.dbAPI);
    }

    deleteMemo(memo: Memo): Observable<Memo> {
        var url = `${this.dbAPI}/${memo.id}`;
        return this.http.delete<Memo>(url);
    }

    addMemo(memo: Memo): Observable<Memo> {
        return this.http.post<Memo>(this.dbAPI, memo, httpOptions);
    }

    updateMemoPriority(memo: Memo): Observable<Memo> {
        var url = `${this.dbAPI}/${memo.id}`;
        return this.http.put<Memo>(url, memo, httpOptions);
    }



    /*
    updateMemo(): Observable<Memo>{

    }
    */
}
