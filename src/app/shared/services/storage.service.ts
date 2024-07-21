import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  setData(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getData(key: string) {
    const data = JSON.parse(localStorage.getItem(key) || 'null');

    return data;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
  clearData() {
    localStorage.clear();
  }
}
