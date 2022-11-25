import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly first_name: string;
  readonly lass_name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly created_at: Date;
}
