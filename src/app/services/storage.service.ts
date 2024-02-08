import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData(key: string): any {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  constructor() { }


}
