import { ProfileComponent } from './pages/profile/profile.component';
import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MediaDemoComponent } from './demo/view/mediademo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { InputDemoComponent } from './demo/view/inputdemo.component';
import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
import { ButtonDemoComponent } from './demo/view/buttondemo.component';
import { TableDemoComponent } from './demo/view/tabledemo.component';
import { TreeDemoComponent } from './demo/view/treedemo.component';
import { DisplayComponent } from './utilities/display.component';
import { ElevationComponent } from './utilities/elevation.component';
import { GridComponent } from './utilities/grid.component';
import { IconsComponent } from './utilities/icons.component';
import { WidgetsComponent } from './utilities/widgets.component';
import { SpacingComponent } from './utilities/spacing.component';
import { TypographyComponent } from './utilities/typography.component';
import { TextComponent } from './utilities/text.component';
import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';
import { AppInvoiceComponent } from './pages/app.invoice.component';
import { AppHelpComponent } from './pages/app.help.component';
import { AuthGuard } from './auth/auth.guard';
import { PabloByPeopleComponent } from './demo/view/pablo-by-people/pablo-by-people.component';
import { AppLoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AppCrudComponent } from './pages/quizz/app.crud.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
                    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
                    { path: 'pabloByPeople/:id', component: PabloByPeopleComponent, canActivate: [AuthGuard] },
                    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
                    { path: 'uikit/formlayout', component: FormLayoutDemoComponent },
                    { path: 'uikit/floatlabel', component: FloatLabelDemoComponent },
                    { path: 'uikit/invalidstate', component: InvalidStateDemoComponent },
                    { path: 'uikit/input', component: InputDemoComponent },
                    { path: 'uikit/button', component: ButtonDemoComponent },
                    { path: 'uikit/table', component: TableDemoComponent },
                    { path: 'uikit/tree', component: TreeDemoComponent },
                    { path: 'uikit/panel', component: PanelsDemoComponent },
                    { path: 'uikit/overlay', component: OverlaysDemoComponent },
                    { path: 'uikit/menu', component: MenusDemoComponent },
                    { path: 'uikit/media', component: MediaDemoComponent },
                    { path: 'uikit/message', component: MessagesDemoComponent },
                    { path: 'uikit/misc', component: MiscDemoComponent },
                    { path: 'uikit/charts', component: ChartsDemoComponent },
                    { path: 'uikit/file', component: FileDemoComponent },
                    { path: 'utilities/display', component: DisplayComponent },
                    { path: 'utilities/elevation', component: ElevationComponent },
                    { path: 'utilities/grid', component: GridComponent },
                    { path: 'utilities/icons', component: IconsComponent },
                    { path: 'utilities/widgets', component: WidgetsComponent },
                    { path: 'utilities/spacing', component: SpacingComponent },
                    { path: 'utilities/typography', component: TypographyComponent },
                    { path: 'utilities/text', component: TextComponent },
                    { path: 'pages/crud', component: AppCrudComponent },
                    { path: 'pages/timeline', component: AppTimelineDemoComponent },
                    { path: 'pages/invoice', component: AppInvoiceComponent },
                    { path: 'pages/help', component: AppHelpComponent },
                    { path: 'pages/empty', component: EmptyDemoComponent },
                    { path: 'documentation', component: DocumentationComponent }
                ]
            },
            { path: 'error', component: AppErrorComponent },
            { path: 'access', component: AppAccessdeniedComponent },
            { path: 'login', component: AppLoginComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
