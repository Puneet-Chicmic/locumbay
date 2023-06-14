import {action, field, writer} from '@nozbe/watermelondb/decorators';

import {Model} from '@nozbe/watermelondb';
import { DATABASE } from '../../theme/Constants';

export default class Profile extends Model {
  static table = DATABASE.PROFILE;

  @field('firstName') firstName;
  @field('lastName') lastName;
  @field('phoneNumber') phoneNumber;
  @field('dob') dob;
  @field('emailAddress') emailAddress;
  @field('country') country;
  @field('state') state;
  @field('city') city;
  @field('address') address;
  @field('postCode') postCode;
  @field('photo') photo;

  @field('pharmacyName') pharmacyName;
  @field('userId') userId;
  @field('userType') userType;
  @field('userName') userName;


  

  @writer async updateProfile(data) {
    await this.update((profile) => {
      profile.name = data?.name ?? profile.name
      profile.image = data?.image ?? profile.image;
      profile.bio = data?.bio ?? profile.bio
      profile.notificationSound=data?.notificationSound ?? profile.notificationSound
      profile.ringtoneSound=data?.ringtoneSound ?? profile.ringtoneSound
      profile.name = data?.name ?? profile.name
    });
  }
  
}