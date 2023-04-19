import { Component } from '@angular/core';
import { OffertsService } from '../../offerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeOffersHeading1 = "Witaj w naszym portalu!";
  homeOffersHeading2 = "Znajdziesz tu najróżniejsze oferty pracy. Są one podzielone na kategorie widoczne w górnym pasku strony.";
  homeOffersHeading3 = "Poniższym guzikiem możesz pobrać z naszego REST API informację o autorze strony.";

  data: any;

  constructor(private offertsService: OffertsService) { }

  getData() {
    this.offertsService.get('').subscribe((response: any) => {
      this.data = response;
    });
  }
}
