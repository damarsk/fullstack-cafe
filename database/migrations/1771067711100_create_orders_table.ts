import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('order_code').unique().notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('subtotal').notNullable()
      table.integer('tax').notNullable()
      table.integer('grand_total').notNullable()
      table
        .enum('status', ['pending', 'settlement', 'completed'])
        .notNullable()
        .defaultTo('pending')
      table.integer('table_number').notNullable()
      table.enum('payment_method', ['cash', 'qris'])
      table.string('note').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
