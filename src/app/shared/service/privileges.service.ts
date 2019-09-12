import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Privileges } from '../model/privileges.model';
import { urls } from './urls';

@Injectable({providedIn: 'root'})
export class PrivilegesService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addPrivileges(privileges: Privileges): Observable<Privileges> {
        return this._httpClient.post<Privileges>(urls.addPrivileges, privileges, {headers: this.headers});
    }

    getAllPrivileges(): Observable<Privileges[]> {
        return this._httpClient.get<Privileges[]>(urls.getAllPrivileges, {headers: this.headers})
    }

    // addShipper(shipper): Observable<Shipper_master>{
    //     return this._httpClient.post<Shipper_master>(urlRegistry.addShipper, shipper, {headers: this.headers})
    // }

    // deleteCommudity(id): Observable<Commudity>{
    //     let params = new HttpParams().set('id', id);
    //     return this._httpClient.delete<Commudity>(urlRegistry.deleteCommudity, {params: params})
    // }

}