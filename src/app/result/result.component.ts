import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  marksOutOf: number = 10;
  marksObtained: number = 8;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
      this._route.params.subscribe(
        (params) => { 
            // this.marksOutOf = params['marksOutOf'];
            // this.marksObtained = params['marksObtained'];           
          }
      );
      console.log('this.marksOutOf = ' + this.marksOutOf)
      console.log('this.marksObtained = ' + this.marksObtained)
  }

  
// restartTest(){
//   this._router.navigate(['/result'], 
//       { queryParams: 
//         [{ marksOutOf: this.marksOutOf}, { marksObtained: this.marksObtained}] }
//       );
// }
}

