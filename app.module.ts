import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SampleComponent } from './components/sample/sample.component';
import { DemoComponent } from './components/demo/demo.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    SampleComponent,
    DemoComponent,
    BindingComponent,
    DirectivesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
