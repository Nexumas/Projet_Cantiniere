import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private notif: NotificationsService){}

  onSuccess(message: string){
    this.notif.success('Succès', message, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  onError(message: string){
    this.notif.error('Erreur', message, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }

  onWarning(message: string){
    this.notif.warn('Attention', message, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }
}
