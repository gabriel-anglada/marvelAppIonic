import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {FormPage} from './pages/welcome_form/form';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {HttpService} from "./services/http.service";
import {AlertService} from "./services/alert.service";

@NgModule({
    declarations: [
        MyApp,
        FormPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        FormPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DataService,
        HttpService,
        AlertService
    ]
})
export class AppModule {
}
