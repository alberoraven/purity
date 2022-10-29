import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';
import { nhost } from '../../providers/global';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  userCredentials: any;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    private apollo: Apollo
  ) { }

  ngAfterViewInit() {
    this.getUserCredentials();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            // this.userData.setUsername(data.username);
            this.getUserCredentials();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.userCredentials.displayName,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
    nhost.graphql.request(gql`
      mutation MyQuery {
          insert_Test(objects: [{name: "From Ionic app"}]) {
            returning {
              id
              name
              created_at
            }
        }
      }
    `);
    nhost.graphql.request(gql`
      query MyQuery {
        Test {
              name
              status
              id
            }
      }
    `);
  }

  getUserCredentials() {
    this.userData.getUserCredentials().then((userCredentials: any) => {
      this.userCredentials = userCredentials;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}


// mutation MyMutation {
  // insert_Test(objects: [{name: "From Hasura"}]) {
  //   returning {
  //     id
  //     name
  //     created_at
  //   }
  // }
// }
