import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: any[] = [];
  dataTest!:string;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {

    // Retrieve the array from local storage when the component initializes
    this.localStorageService.getDataObservable().subscribe(updatedData=>{
      this.items = updatedData;
    });
    console.log("items",this.items);


  }
  editList(i:any,event:any){

    console.log(i,event);

    this.items[i] = event.target.value
    this.localStorageService.saveList(this.items)


  }

  deleteList(i:number){
    console.log(i);
    this.items.splice(i,1)
    this.localStorageService.saveList(this.items)

  }

}
