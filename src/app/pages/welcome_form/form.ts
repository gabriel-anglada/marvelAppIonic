import {Component, ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {AlertService} from "../../services/alert.service";

@Component({
    selector: 'page-welcome-form',
    templateUrl: 'form.html'
})
export class FormPage {

    @ViewChild(Slides) slides: Slides;

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private dataService: DataService,
                private alertService: AlertService) {
        this._createForm();
    }

    ionViewDidEnter() {
        // this.slides.lockSwipes(true);
    }


    onBackClick() {
        this.slides.slidePrev();
    }

    onForwardClick() {
        this.slides.slideNext();
    }

    onSubmitClick() {
        const data = {
            name: this.form.value['step0']['name'],
            age: this.form.value['step1']['age']
        };
        this.dataService.saveData(data)
            .then(result => {
                console.log(result);
                this.alertService.show(`Tus datos se han guardado satisfactoriamente: Nombre ${result.name}, Edad: ${result.age}`, '¡Genial!')
            }, error => {
                this.alertService.show(error.message, 'Error');
            });
    }

    private _createForm() {
        this.form = this.formBuilder.group({
            step0: this.formBuilder.group({
                name: ['', Validators.required],
            }),
            step1: this.formBuilder.group({
                age: ['', Validators.required],
            })
        });
    }
}
