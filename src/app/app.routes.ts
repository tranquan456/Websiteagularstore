import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { NotfoudComponent } from './pages/notfoud/notfoud.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProducteditComponent } from './pages/admin/productedit/productedit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductaddComponent } from './pages/admin/productadd/productadd.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { Routes } from '@angular/router';
import { PageComponent } from './pages/product/product.component';
import { HomePageComponent } from './pages/product/home/home.component';
import { ListComponent } from './pages/product/list/list.component';
import { ProductdetailComponent } from './pages/product/productdetail/productdetail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CategorylistComponent } from './pages/admin/categorylist/categorylist.component';
import { CateoryeditComponent } from './pages/admin/categoryedit/cateoryedit.component';


export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // Đây là route mặc định cho trang products
            { path: 'home', component: HomePageComponent },
            { path: 'product/list', component: ListComponent },
            { path: 'product/detail/:id', component: ProductdetailComponent }
        ]

    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Đây là route mặc định cho trang admin
            { path: 'dashboard', component: HomeComponent }, // Đây là route con hiển thị mặc định
            // Các route con khác
            // ...
            { path: 'products/list', component: ProductComponent },
            { path: 'products/add', component: ProductaddComponent },
            { path: 'categories/list', component: CategorylistComponent },
            { path: 'categories/add', component: CategoriesComponent },
            { path: 'categories/edit/:id', component: CateoryeditComponent  },
            { path: 'products/edit/:id', component: ProducteditComponent }
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' }, // Đây là route mặc định cho trang auth
            { path: 'login', component: LoginComponent},
            { path:'register', component: RegisterComponent }
        ]
    },
    {
        path: '**',
        component:NotfoudComponent
    }

];
