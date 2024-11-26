
import { Component, OnInit } from '@angular/core';
import { VoterService } from 'src/service/voter.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  stateVoterCounts: any = [];
  pieChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3']; // Example labels
  pieChartType: ChartType = 'pie';
  pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [{
      data: [30, 40, 50], // Replace with your actual data
      backgroundColor: ['#FF0000', '#00FF00', '#0000FF'] // Optional: colors for segments
    }]
  };
  
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const percentage = ((tooltipItem.raw as number) / this.getTotalVoterCount() * 100).toFixed(2);
            return `Voter Count: ${tooltipItem.raw} (${percentage}%)`;
          }
        }
      }
    }
  };

  constructor(private voterService: VoterService) {
    this.loadStateVoterCounts();
  }

  ngOnInit(): void {}

  loadStateVoterCounts(): void {
    this.voterService.getStateVoterCount().subscribe(data => {
      this.stateVoterCounts = data;
      this.prepareChartData();
    });
  }

  prepareChartData(): void {
    let totalVoters = this.getTotalVoterCount();
    this.pieChartLabels = this.stateVoterCounts.map((state: any) => state[0]);
    this.pieChartData = this.stateVoterCounts.map((state: any) => (state[1] / totalVoters) * 100);
  }

  getTotalVoterCount(): number {
    return this.stateVoterCounts.reduce((total:any, state:any) => total + state[1], 0);
  }
}
