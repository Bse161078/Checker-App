import mongoose from 'mongoose';
import { ROLES } from 'src/common/enums';

declare global {
  namespace Express {
    interface User {
      _id: mongoose.Types.ObjectId;
      fullname?: string;
      email?: string;
      permissions?: string;
      role?: string;
      accessToken?: string;
    }
  }
}
