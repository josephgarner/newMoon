import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'expense_group',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'gross', type: 'number'},
        {name: 'lastUpdated', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'expense',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'cost', type: 'number'},
        {name: 'is_reoccuring', type: 'boolean'},
        {name: 'trans_date_at', type: 'number'},
        {name: 'end_date_at', type: 'number', isOptional: true},
        {name: 'updated_at', type: 'number'},
        {name: 'expense_group_id', type: 'string'},
      ],
    }),
  ],
});
