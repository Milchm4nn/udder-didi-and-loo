import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {BlogViewComponent} from './blog-view/blog-view.component';
import {CardComponent} from './blog-view/card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EntryViewComponent} from './blog-view/entry-view/entry-view.component';
import {EntryComponent} from './blog-view/entry-view/entry/entry.component';
import {TagComponent} from './_component/tag/tag.component';
import {DrawerComponent} from './_component/drawer/drawer.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './_component/footer/footer.component';
import {ImpressumComponent} from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    CardComponent,
    EntryViewComponent,
    EntryComponent,
    TagComponent,
    DrawerComponent,
    FooterComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: 'blog', children: [
        {path: ':id', component: EntryViewComponent},
        {path: '', component: BlogViewComponent}
      ]
    }, {
      path: 'impressum', component: ImpressumComponent
    }], {scrollPositionRestoration: 'enabled'}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
