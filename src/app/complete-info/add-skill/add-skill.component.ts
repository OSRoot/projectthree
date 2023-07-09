import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  commonSkills = ['JavaScript', 'HTML', 'CSS', 'Angular', 'React', 'Vue', 'Node.js', 'Express', 'MongoDB', 'MySQL'];
  filteredSkills: string[] = [];
  inputText = '';
  searchFocused = false;
  saved_skills:any
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    let skills:any = localStorage.getItem('savedSkills')
    let saved = JSON.parse(skills)
    this.saved_skills = saved
    console.log(this.saved_skills);

  }

  onInputChange() {
    if (this.inputText === '') {
      this.filteredSkills = [];
    } else {
      this.filteredSkills = this.commonSkills.filter(skill => skill.toLowerCase().includes(this.inputText.toLowerCase()));
    }
  }

  addSkill(skill: string) {
    let savedSkills = JSON.parse(localStorage.getItem('savedSkills') || '[]');
    savedSkills.push(skill);
    localStorage.setItem('savedSkills', JSON.stringify(savedSkills));

    this.inputText = '';
    this.filteredSkills = [];
  }

  onFocus() {
    this.searchFocused = true;
  }

  onBlur() {
    this.searchFocused = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.searchFocused = false;
      this.filteredSkills = [];
    }
  }
}
