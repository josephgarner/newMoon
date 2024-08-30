import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';

export default class ExpenseGroup extends Model {
  static table = 'expense_group';
  static associations: Associations = {
    ['expense']: {type: 'has_many', foreignKey: 'expense_id'},
  };
}
