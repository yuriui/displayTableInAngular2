import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {DataService} from "../dataService/data.service";
import {DataContract} from "../dataService/data.contract";

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{

  mockData: DataContract[];

  constructor(private dataService:DataService){
  }


  ngOnInit():void{
    this.getMockData();
  }

  getMockData():void{
    this.dataService.getData()
      .subscribe(response => {
      this.mockData = response.json().data
      });

  }

}
