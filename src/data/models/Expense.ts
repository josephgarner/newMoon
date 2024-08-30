import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';

export default class Expense extends Model {
  static table = 'expense';
  static associations: Associations = {
    ['expense_group']: {type: 'belongs_to', key: 'expenseGroup_id'},
  };
}
