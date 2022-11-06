import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://dot-product-django.herokuapp.com/'
  constructor(private http:HttpClient) { }

  getCardList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'card/');
  }

  addCard(val:any) {
    return this.http.post(this.APIUrl + 'card/', val);
  }

  updateCard(val: any) {
    return this.http.put(this.APIUrl + 'card/', val);
  }

  deleteCard(val: any) {
    return this.http.delete(this.APIUrl + 'card/' + val);
  }
}
