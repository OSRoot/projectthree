import { Component } from '@angular/core';

@Component({
  selector: 'app-add-lang',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.scss']
})
export class AddLangComponent {
  all_langs = ['English', 'Arabic', 'French', 'Italian', 'Spanish'];
  levels = ['Good', 'Excellent', 'Native'];
  languages:any| { name: string, level: string }[] = [];

  language = { name: '', level: '' };

  constructor() {}

  on_change_lang(event: any) {
    this.language.name = event.target.value;
  }

  on_change_level(event: any) {
    this.language.level = event.target.value;
  }

  add_language() {
    if (!this.language.name || !this.language.level) {
      // either the language or the level field is empty, so return and do not add the language object
      return;
    }

    // load existing language data from local storage
    const existingLanguages = JSON.parse(localStorage.getItem('languages') || '[]');

    // add a new object to the languages array
    existingLanguages.push({ name: this.language.name, level: this.language.level });

    // clear the language object
    this.language = { name: '', level: '' };

    // reset the select elements
    this.reset_selects();

    // save the updated languages array to local storage
    localStorage.setItem('languages', JSON.stringify(existingLanguages));

    // update the languages array in the component
    this.languages = existingLanguages;
  }


  reset_selects() {
    // reset the value of the language select element
    const langSelect = document.querySelector('#lang-select') as HTMLSelectElement | null;
    if (langSelect) {
      langSelect.value = '';
    }

    // reset the value of the level select element
    const levelSelect = document.querySelector('#level-select') as HTMLSelectElement | null;
    if (levelSelect) {
      levelSelect.value = '';
    }
  }

}
