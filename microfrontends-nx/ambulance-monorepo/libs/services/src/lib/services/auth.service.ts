import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type ROLE = 'ADMIN' | 'USER' | 'GUEST';

export type UserCredential = {
  name: string;
  email: string;
  password: string;
  roles: ROLE[];
};
export type UserCredentials = UserCredential[];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userCredentials: UserCredentials = [
    {
      name: 'user01',
      email: 'user01@email.com',
      password: 'password01',
      roles: ['ADMIN', 'USER'],
    },
    {
      name: 'user02',
      email: 'user02@email.com',
      password: 'password02',
      roles: ['USER'],
    },
    {
      name: 'user03',
      email: 'user03@email.com',
      password: 'password03',
      roles: ['GUEST'],
    },
  ];

  router = inject(Router);

  async login(email: string, password: string): Promise<boolean> {
    const user = this.userCredentials.find(
      (user) => user.email === email && user.password === password
    );
    await new Promise((resolve) =>
      setTimeout(resolve, Math.ceil(Math.random() * 2000))
    );

    if (user) {
      this.saveCredentials(user.name, user.email, user.roles);
      return true;
    }
    return false;
  }

  private saveCredentials(name: string, email: string, roles: ROLE[]) {
    const info = { name, email, roles };
    sessionStorage.setItem('user', JSON.stringify(info));
  }

  getRoles(): ROLE[] | null {
    const user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user).roles;
    }
    return null;
  }

  getName(): string | null {
    const user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user).name;
    }
    return null;
  }

  isUserLogged(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
