import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.storage.get('isAuthenticated');
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}