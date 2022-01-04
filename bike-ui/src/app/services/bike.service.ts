import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes(){
    return this.http.get('/server/api/v1/bikes');
    // let token= localStorage.getItem('access_token');
    // return this.http.get('/server/api/v1/bikes',
    //   {headers: new HttpHeaders().set('Authorization','Bearer'+token)}
    // );
  }

  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/'+ id);
    // let token= localStorage.getItem('access_token');
    // return this.http.get('/server/api/v1/bikes/'+ id,      
    // {headers: new HttpHeaders().set('Authorization','Bearer'+token)}
    // );
  }

  createBikeRegistration(bike:any){
    let body=JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes',body,httpOptions)
  }
}
