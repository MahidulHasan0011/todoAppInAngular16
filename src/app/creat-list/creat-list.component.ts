import { Component ,OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-creat-list',
  templateUrl: './creat-list.component.html',
  styleUrls: ['./creat-list.component.scss']
})
export class CreatListComponent  {
  items: any[] = [];



  constructor(private localStorageService: LocalStorageService) {}




  addItem(newItem: any): void {

    this.items.push(newItem);
    // Save the updated array to local storage
    this.localStorageService.saveList(this.items);
  }
}



