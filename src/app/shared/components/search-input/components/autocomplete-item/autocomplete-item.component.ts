import { Component, Input, OnInit } from '@angular/core';
import { AutocompleteRes } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-autocomplete-item',
  templateUrl: './autocomplete-item.component.html',
  styleUrls: ['./autocomplete-item.component.scss'],
})
export class AutocompleteItemComponent implements OnInit {
  @Input() autocompleteItem!: AutocompleteRes;

  constructor() {}

  ngOnInit(): void {}
}
