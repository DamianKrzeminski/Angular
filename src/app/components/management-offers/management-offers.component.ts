import { Component } from '@angular/core';

@Component({
  selector: 'app-management-offers',
  templateUrl: './management-offers.component.html',
  styleUrls: ['./management-offers.component.css']
})
export class ManagementOffersComponent {
  managementOffersHeading1 = "Przeglądasz oferty z zarządzania.";
  managementOffersHeading2 = "Poniżej znajdują się oferty, przejrzyj je dokładnie.";
  managementOffersHeading3 = "Jeśli zdecydujesz się na którąś z ofert kliknij przycisk \"Aplikuj\" i wypełnij formularz i go wyślij w celu zgłoszenia swojej kandydatury na dane stanowisko.";
}
