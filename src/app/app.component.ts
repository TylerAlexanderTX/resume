import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Tyler Alexander';
  street_address = '';
  city_address = 'Lives in Austin, TX';
  phone_number = '(832) 381-7508';
  email = 'tylerjon93@gmail.com';

  prof_skills = ['ASP.NET', 'C#', 'Python', 'SQL', 'Javascript' ];
  intermediate_skills = [ 'Angular', 'Java', 'Azure DevOps', 'Git', 'HTML', 'Flask', 'NoSQL/Elasticseach' ];
  effective_skills  = [ 'Django', 'SpringBoot-Java', 'PHP', 'Docker', 'Azure'];

}
