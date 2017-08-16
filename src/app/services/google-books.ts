import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';

@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {
  }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items || []);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }

  /**
   * Asynchronously authenticate with a remote service
   * @todo(*) actually authenticate
   */
  public authenticate(username: string, password: string): Observable<boolean> {

    if (password === 'password') {
      console.info(`Logged in as ${username}`);
      return Observable.of(true);
    }

    console.info(`Access denied for ${username} (Incorrect password)`);

    return Observable.of(false);
  }

}
