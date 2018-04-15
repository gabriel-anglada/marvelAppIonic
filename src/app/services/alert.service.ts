import {Injectable} from "@angular/core";
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertService {

    constructor(public alertCtrl: AlertController) {
    }

    show(message: string, title: string): Promise<any> {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        return alert.present();
    }
}