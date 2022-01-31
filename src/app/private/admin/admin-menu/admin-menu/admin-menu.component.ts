import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConstraintService} from '../../../../core/services/constraint/constraint.service';
import {LtConstraint} from '../../../../core/models/constraint/constraint';
import {AlertService} from '../../../../core/services/alert/alert.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  configForm: FormGroup;
  currentConfig: LtConstraint;
  loadingStatus = false;

  constructor(private config: ConstraintService, private notif: AlertService) { }

  async ngOnInit(): Promise<void> {

    this.configForm = new FormGroup({
      limit: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
    });

    await this.config.getConstraint().then(value => value.subscribe(subValue => {
      this.currentConfig = subValue;
    }));

    this.setValues();

    this.loadingStatus = true;
  }

  setValues(){
    console.log(this.currentConfig)
    this.configForm.controls['limit'].setValue(this.currentConfig.maxPayOrder);
    this.configForm.controls['time'].setValue(this.currentConfig.orderTimeLimit);
  }

  onSubmit(): void {
    if(this.configForm.valid){
      if(confirm('Voulez-vous vraiment modifier la configuration ?')){
        let timeValue = this.configForm.controls['time'].value + ':00';
        this.config.updateConstraint(this.currentConfig.id, timeValue, this.configForm.controls['limit'].value);

        this.notif.onSuccess('Configuration Mise à jour !');
        this.notif.onInfo('Le nombre limite de commande est passé à ' + this.configForm.controls['limit'].value + ' plats.');
        this.notif.onInfo('Heure limite de commande est passé à ' + this.configForm.controls['time'].value + '.');
      }
    }
  }

}
