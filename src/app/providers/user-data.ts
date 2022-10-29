import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { nhost } from './global';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage
  ) { }

  hasFavorite(sessionName: string): boolean {
    return (this.favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  login(userCredentials: object): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUserCredentials(userCredentials);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(userCredentials: object): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUserCredentials(userCredentials);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return nhost.auth.signOut().then(() => {
      return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
        return this.storage.remove('userCredentials');
      }).then(() => {
        window.dispatchEvent(new CustomEvent('user:logout'));
      });
    })
    
  }

  setUserCredentials(userCredentials: object): Promise<any> {
    return this.storage.set('userCredentials', userCredentials);
  }

  getUserCredentials(): Promise<object> {
    return this.storage.get('userCredentials').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
