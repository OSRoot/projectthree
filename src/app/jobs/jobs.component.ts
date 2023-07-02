import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {


  jobs = [
    {
      title: 'Build App Using React',
      postedin: '8 days ago',
      desc: 'I need a java app to make dsfoug and for the record',
      requiredskills: ['HTML', 'CSS', 'REACT', 'ANGULAR'],
      location: 'Cairo, Egypt'
    },

    {
      title: 'Build App Using Angular',
      postedin: '8 days ago',
      desc: 'I need a java app to make dsfoug and for the record',
      requiredskills: ['GGG', 'CSS', 'REACT', 'ANGULAR'],
      location: 'Cairo, Egypt'
    }, {
      title: 'Build App Using JAVA',
      postedin: '8 days ago',
      desc: 'I need a java app to make dsfoug and for the record',
      requiredskills: ['OOO', 'CSS', 'REACT', 'ANGULAR'],
      location: 'Cairo, Egypt'
    }, {
      title: 'Build App Using Html',
      postedin: '8 days ago',
      desc: 'I need a java app to make dsfoug and for the record',
      requiredskills: ['NNN', 'CSS', 'REACT', 'ANGULAR'],
      location: 'Cairo, Egypt'
    },
  ]


}
