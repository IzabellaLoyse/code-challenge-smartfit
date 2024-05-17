import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnitsResponse } from '../interfaces/units.interface';

@Injectable({
  providedIn: 'root',
})
export class SmartUnitsService {
  private readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) {}

  public getUnits(): Observable<IUnitsResponse> {
    return this.http.get<IUnitsResponse>(this.apiUrl);
  }
}
