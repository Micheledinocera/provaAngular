import { Website } from '../../model/Website';

export class LoginResponse {
  user: {
    type: string;
    name: string;
  };
  websites: Website[];
}

