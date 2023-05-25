import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://apbackag-1m0i.onrender.com/personas/';

  constructor(private HttpClient: HttpClient) { }

  public getPersona():Observable<persona>{
    return this.HttpClient.get<persona>(this.URL+ 'traer/perfil');
  }
}
