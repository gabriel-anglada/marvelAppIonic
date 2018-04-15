import {Injectable, Injector} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable()
export class DataService {
    private httpService: HttpService;
    constructor(public injector: Injector) {
        this.httpService = injector.get(HttpService);
    }

    saveData(data: any) {
        return new Promise((resolve, reject) => {
            this.httpService.post('http://httpbin.org/post', data)
                .then(result => {
                    resolve(result);
                }, error => {
                    reject(error);
                })
        });
    }
}