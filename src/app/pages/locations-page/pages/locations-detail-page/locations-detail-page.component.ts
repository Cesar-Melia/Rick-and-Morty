import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-detail-page',
  templateUrl: './locations-detail-page.component.html',
  styleUrls: ['./locations-detail-page.component.scss']
})
export class LocationsDetailPageComponent implements OnInit {

  id: any = "";
  location: any;

  constructor(private route: ActivatedRoute, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('idLocation');
    })

    this.locationsService.getLocation(this.id).subscribe((locationData: any) => {
      this.location = locationData;
      console.log(this.location)
    })
  }
  

}
