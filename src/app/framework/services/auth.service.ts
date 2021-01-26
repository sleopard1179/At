import { HttpRequest, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    cachedRequests = Array<HttpRequest<any>> = [];
    rootApi = 'http://localhost:5000/api/auth';
    rootApi =
}