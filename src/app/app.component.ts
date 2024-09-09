import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TeacherComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'makonitask';
}
