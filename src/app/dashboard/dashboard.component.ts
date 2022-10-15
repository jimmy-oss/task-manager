import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
 {
   Designation!:String;
   Username!:String;
   NoOfTeamMembers!: Number;
   TotalCostOfAllProjects!:Number;
   PendingTasks!:Number;
   UpComingProjects!: Number;
   ProjectCost!: Number;

   CurrentExpenditure!: Number;
   AvailableFunds!: Number;
  ngOnInit(){
    this.Designation ="Team leader";
    this.Username ="John kimani";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects=300;
    this.PendingTasks=4;
    this.UpComingProjects=2;
    this.ProjectCost=50000;
    this.CurrentExpenditure=68500;
    this.AvailableFunds=560444
  }

}
