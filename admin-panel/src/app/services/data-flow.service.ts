import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataFlowService {
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}
}
