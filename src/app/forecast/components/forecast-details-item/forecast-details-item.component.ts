import { Component, HostListener, Input, OnInit } from '@angular/core';@Component({  selector: 'app-forecast-details-item',  templateUrl: './forecast-details-item.component.html',  styleUrls: ['./forecast-details-item.component.scss'],})export class ForecastDetailsItemComponent implements OnInit {  @Input() public forecastItem: any;  public innerWidth: any = window.innerWidth;  constructor() {}  ngOnInit(): void {}  @HostListener('window:resize', ['$event'])  onResize() {    this.innerWidth = window.innerWidth;  }}