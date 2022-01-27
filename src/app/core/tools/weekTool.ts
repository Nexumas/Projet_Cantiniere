import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekTool {

  constructor() {
  }

  getWeekNumber(d) {
    let date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    let dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    // @ts-ignore
    return Math.ceil((((date - yearStart) / 86400000) + 1)/7)
  }

}

