import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../Models/book.model';
import { map } from 'rxjs/operators';
import { Auth, User, user, idToken, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import  { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private auth: Auth = inject(Auth);
  userCredentials: UserCredential = {} as UserCredential;
  idToken: string = "";

  constructor(private http: HttpClient) { 
  }

  async signIn(email: string, password: string) {
      this.userCredentials= await signInWithEmailAndPassword(this.auth, email, password);
      
    this.idToken = await this.userCredentials.user?.getIdToken();
    console.log(this.idToken);
  }

  getBooks(): Observable<Array<Book>> {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  this.idToken
    });

    return this.http
      .get<Book[]>(
        'https://localhost:7019/api/books', { headers: httpHeaders } )
      .pipe(map(
        (books) => books || []));
  }
}
