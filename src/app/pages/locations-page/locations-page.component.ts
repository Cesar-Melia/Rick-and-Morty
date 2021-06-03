import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';



@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  locations: any[] = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((locationsData: any) => {
      console.log(locationsData.results)
      this.locations = locationsData.results;
    })
  }

}
