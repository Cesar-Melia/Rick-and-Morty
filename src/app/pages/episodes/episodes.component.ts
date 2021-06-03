import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: any[] = []; 

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((episodesData: any) => {
      console.log(episodesData.results)
      this.episodes = episodesData.results;
    })
  }

}
