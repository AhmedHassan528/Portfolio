import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-conatct-us',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './conatct-us.component.html',
  styleUrl: './conatct-us.component.css'
})
export class ConatctUsComponent {
  faStar = faStar;

}
