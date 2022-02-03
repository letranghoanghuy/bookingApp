import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
  private REST_API_SERVER = 'https://my-booking-care-app.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(inputId) {
    const url = `${this.REST_API_SERVER}/api/get-all?id=${inputId}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addUser(data: any) {
    const url = `${this.REST_API_SERVER}/api/create`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteUser(userID: string) {
    const url = `${this.REST_API_SERVER}/api/delete?id=${userID}`;
    return this.httpClient
      .delete<any>(url)
      .pipe(catchError(this.handleError));
  }

  public editUser(data: any) {
    const url = `${this.REST_API_SERVER}/api/edit`;
    return this.httpClient
      .put<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAllCodeServices(type:string){
    const url = `${this.REST_API_SERVER}/allcode?type=${type}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAllDoctorsHome(limit:number){
    const url = `${this.REST_API_SERVER}/api/top-doctor-home?limit=${limit}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAllDoctors(){
    const url = `${this.REST_API_SERVER}/api/all-doctors`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public saveDoctorsInfor(data: any){
    const url = `${this.REST_API_SERVER}/api/save-infor-doctors`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  public getDetailDoctor(id:number){
    const url = `${this.REST_API_SERVER}/api/get-detail-doctor?id=${id}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addSchedule(data: any) {
    const url = `${this.REST_API_SERVER}/api/bulk-create-schedule`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getSchedulesDoctor(doctorId:any,date:any){
    const url = `${this.REST_API_SERVER}/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getExtraInfor(doctorId:any){
    const url = `${this.REST_API_SERVER}/api/get-extra-info?doctorId=${doctorId}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addBooking(data: any) {
    const url = `${this.REST_API_SERVER}/api/patient-booking`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public verifyEmail(data: any) {
    const url = `${this.REST_API_SERVER}/api/verify-booking`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addSpecialty(data: any) {
    const url = `${this.REST_API_SERVER}/api/create-specialty`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAllSpecialty(){
    const url = `${this.REST_API_SERVER}/api/get-all-specialty`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDetailSpecialty(id:any,location:any){
    const url = `${this.REST_API_SERVER}/api/get-delete-specialty?id=${id}&location=${location}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addClinic(data: any) {
    const url = `${this.REST_API_SERVER}/api/create-clinic`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getAllClinic(){
    const url = `${this.REST_API_SERVER}/api/get-all-clinic`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getDetailClinic(id:any){
    const url = `${this.REST_API_SERVER}/api/get-detail-clinic?id=${id}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
