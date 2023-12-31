import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../Models/book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLXByb2plY3QtbGVzIiwiYXVkIjoiZmlyLXByb2plY3QtbGVzIiwiYXV0aF90aW1lIjoxNzA0MDE0NjQ0LCJ1c2VyX2lkIjoia2pERTl1RW1qZ09uQmtPSzZzZWIyZ29KS2h3MiIsInN1YiI6ImtqREU5dUVtamdPbkJrT0s2c2ViMmdvSktodzIiLCJpYXQiOjE3MDQwMTQ2NDQsImV4cCI6MTcwNDAxODI0NCwiZW1haWwiOiJoYW5zLm5hZXJ0QGxpdmUuYmUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiaGFucy5uYWVydEBsaXZlLmJlIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.YnsVCs0i_Wb1w_7-ZbzAasoSgYhrN7TKRtXBE-BRpNJ0h4oWcYcVVenrSA8DZCZB5bRR_inkvyHpDTEnSKIsVOJcFl8_90QN2TAAVxQkExLftwJIZvu4VcsdcxhnX5oj7_dxQiPK8McbZTqniy8DswONWpC5jUwadTW6M0rMALKoDN390ipTj_fy1m50jR3jWnV6DX3jTxJY3smjXopmcvwMeVEuS5TqWCwEwe2JbqvsarvnDpN6ioFtOgQgPWSR1-P-YO0wVJEkHLqEOsFU_-SteYnO2d9gOv5Q9UQlZ7UNfBfI2cWVWN-p1LLXkcaQI_VjExc3PY9Ud2HyvyhJjA'
    });

    return this.http
      .get<Book[]>(
        'https://localhost:7019/api/books', { headers: httpHeaders } )
      .pipe(map(
        (books) => books || []));
  }
}
