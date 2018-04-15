import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private _headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this._headers = new HttpHeaders();
        this._headers.set('Content-Type', 'application/json')
    }

    post(url: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http
                .post(url, body, this._headers)
                .toPromise()
                .then((response: any) => {
                    resolve(response.json);
                }, error => {
                    reject(error)
                });
        });
    }
}