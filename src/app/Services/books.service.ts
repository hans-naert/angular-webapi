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
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLXByb2plY3QtbGVzIiwiYXVkIjoiZmlyLXByb2plY3QtbGVzIiwiYXV0aF90aW1lIjoxNzA0MjA3OTA0LCJ1c2VyX2lkIjoia2pERTl1RW1qZ09uQmtPSzZzZWIyZ29KS2h3MiIsInN1YiI6ImtqREU5dUVtamdPbkJrT0s2c2ViMmdvSktodzIiLCJpYXQiOjE3MDQyMDc5MDQsImV4cCI6MTcwNDIxMTUwNCwiZW1haWwiOiJoYW5zLm5hZXJ0QGxpdmUuYmUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiaGFucy5uYWVydEBsaXZlLmJlIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bxfuxe3rskg61IQ8Vy3L9EmLPbAPwkYyB05zOYN9FqcC_tHEsSJzXeNXWi5oxyoVwbxdEMM73Fu-D35yMjLeKyDWyOUqrrSzq8jz5sEpfy6eFj7ZxLh8qsBIGH5KVdANStVISI-oaY4Ej9jO33KD6a8pS1I8DypwD2qJ4QEBL9sp4G4rbRurBGZv2gBy3aQupYO1GRCASmeQQbk5zQkGf8OPITnq5F7GmKQYKzCFG4T4js9obv7z9gXDzxlmLePvuGk8ho5Rst56M0ky_Evc7x-nkYooigPwHOcSnYC1zQiMDMg8phNcygm6dExeq71GCWYDLVa_QpY1OX3Fo_abZw'
    });

    return this.http
      .get<Book[]>(
        'https://localhost:7019/api/books', { headers: httpHeaders } )
      .pipe(map(
        (books) => books || []));
  }
}
