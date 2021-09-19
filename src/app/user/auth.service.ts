import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUser } from './user.model'

@Injectable()
export class AuthService {
  currentUser!: IUser;
  readonly options: any;
  //readonly headers: HttpHeaders;

  constructor(private http: HttpClient){
    this.options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    // let headers = new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*');
  }

  loginUser(userName: string, password: string) {

    let loginInfo = { username: userName, password : password }
   
    
    return this.http.post('/api/login', loginInfo, this.options)
        .pipe(tap(data=> {
          this.currentUser = <IUser>data['user'];
        }))
        .pipe(catchError(err => {
          return of(false)
        }))
        
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // }
  }

  isAuthenticated() {
    return !!this.currentUser; //&& typeof this.currentUser.userName!='undefined' && this.currentUser.userName;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, this.options);
  }

  checkAuthentificationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
             if(data instanceof Object) {
                this.currentUser = <IUser>data;
             }
      }))
      .subscribe();
  }

  logout() {
    this.currentUser = undefined;
    return this.http.post(`/api/logout`, {},  this.options);
  }

}