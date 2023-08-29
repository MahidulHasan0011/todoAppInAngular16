import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'myData';
  private dataSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    const storedData = localStorage.getItem(this.storageKey);

    if (storedData) {
      this.dataSubject.next(JSON.parse(storedData));
    }
  }

  // Save an array to local storage
  saveList(data: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.dataSubject.next(data);
  }
  updateList(index:number,value:string){
    // const data
    
  }

  // Retrieve an array from local storage
  getDataObservable() {
    return this.dataSubject.asObservable();
  }
}
