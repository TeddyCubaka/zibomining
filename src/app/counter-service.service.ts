import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getCounter() : Observable<HttpApiReponse<CounterData>>{
    return this.httpClient.get<HttpApiReponse<CounterData>>('https://brainbyte.one:40033/counter-visitor.php');
  }

  initCounter() : Observable<HttpApiReponse<CounterData>>{
    return this.httpClient.post<HttpApiReponse<CounterData>>('https://brainbyte.one:40033/counter-visitor.php',{});
  }


}

export interface HttpApiReponse<T>{
  status : string,
  message :string,
  data : T
}
export interface CounterData{
  counter : number
}