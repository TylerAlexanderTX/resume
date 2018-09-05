import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Tyler Alexander';
  street_address = '5400 N Lamar Blvd';
  city_address = 'Austin, TX 78751';
  phone_number = '(832) 381-7508';
  email = 'tylerjon93@gmail.com';

  prof_skills = [ 'HTML5',"ASP.NET", 'C#', 'SQL', 'Javascript' ];
  intermediate_skills = [ "Angular", 'Java', 'Visual Studio Team Services', 'GIT' ];
  effective_skills  = [ 'SpringBoot-Java', 'PHP', 'React'];
  
}
