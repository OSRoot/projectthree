import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {


  job_id: any
  jobs: any = []
  constructor(

    private activated_route: ActivatedRoute
  ) {
    // this.jobs = JSON.parse(localStorage.getItem('Jobs')) || [];
    this.job_id = activated_route.snapshot.paramMap.get('id')
    this.get_job()
  }


  get_job() {


    for (let job in this.jobs) {
      console.log(job);


    }
  }
}
