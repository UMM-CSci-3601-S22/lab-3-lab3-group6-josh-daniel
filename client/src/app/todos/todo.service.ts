import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // todos server api url:
  readonly todoUrl: string = environment.apiUrl + 'todos';

  // Inject an HttpClient
  constructor(private httpClient: HttpClient) { }
}
