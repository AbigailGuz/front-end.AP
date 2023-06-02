import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://eag-874l.onrender.com/personas/';
  /*URL = 'http://localhost:8080/personas/';*/

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.HttpClient.get<persona[]>(this.URL + 'lista');
    }
  
    public detail(id: number): Observable<persona>{
    return this.HttpClient.get<persona>(this.URL + `detail/${id}`);
  }
  /*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }*/
  
  public update(id: number, Persona: persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
  
   /*public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
   }*/
}
