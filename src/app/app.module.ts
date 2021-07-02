import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MemoComponent } from './components/memo/memo.component';
import { MemoItemComponent } from './components/memo-item/memo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MemoComponent,
        MemoItemComponent,
        SearchBarComponent,
        AddButtonComponent,
        AddFormComponent,
        SideBarComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
