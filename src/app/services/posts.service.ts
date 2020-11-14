import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
	apiUrl = 'http://localhost:8765/api/';
 	constructor(private http: HttpClient) { }

	getAll(): Observable<Post[]> {
		return this.http.get<Post[]>(this.apiUrl + 'posts.json');
	}
}