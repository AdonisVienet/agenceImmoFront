import { LoginComponent } from 'app/components/login/login.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegistrationComponent } from 'app/components/registration/registration.component';
import { MdpComponent } from 'app/mdp/mdp.component';
import { AppartementComponent } from 'app/components/appartement/appartement.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: DashboardComponent }
    /*{ path: 'dashboard',           component: DashboardComponent }*/,
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'mdp', component: MdpComponent },
    { path: 'appartements', component: AppartementComponent }
];
