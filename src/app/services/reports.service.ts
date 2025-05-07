import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url = "http://127.0.0.1:8080/reports";
  constructor(private client: HttpClient) { }

  public getReports(): Observable<any> {
    return this.client.get(this.url);
  }
}
