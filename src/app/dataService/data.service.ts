import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {DataContract} from "./data.contract";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()

export class DataService {
  constructor(private http:Http){}

  private dataUrl:string = 'app/dataService/data.json';
 // private headers = new Headers({'Content-Type': 'application/json'});

  getData():Observable <any>{

    return this.http.get(this.dataUrl);
  }

}
