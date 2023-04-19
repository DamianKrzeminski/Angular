import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-engineer-offers',
  templateUrl: './engineer-offers.component.html',
  styleUrls: ['./engineer-offers.component.css']
})
export class EngineerOffersComponent {
  engineerOffersHeading1 = "Przeglądasz oferty dla Inżynierów.";
  engineerOffersHeading2 = "Poniżej znajdują się oferty, przejrzyj je dokładnie.";
  engineerOffersHeading3 = "Jeśli zdecydujesz się na którąś z ofert kliknij przycisk \"Aplikuj\" i wypełnij formularz i go wyślij w celu zgłoszenia swojej kandydatury na dane stanowisko.";
}
