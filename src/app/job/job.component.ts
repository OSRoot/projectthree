import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {


  job_id: any
  job: any = {}
  jobs: any = []
  constructor(

    private activated_route: ActivatedRoute
  ) {
    // this.jobs = JSON.parse(localStorage.getItem('Jobs')) || [];
    this.job_id = activated_route.snapshot.paramMap.get('id')
    this.get_job()
  }


  get_job() {
    this.jobs = localStorage.getItem('Jobs');
    let jobs = JSON.parse(this.jobs)

    for (let job of jobs) {
      if (job.id == this.job_id) {
        this.job = job
      }

    }
    console.log(this.job);
  }
}
