import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import OrderItem from '#models/order_item'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare orderCode: string

  @column()
  declare userId: number

  @column()
  declare subtotal: number

  @column()
  declare tax: number

  @column()
  declare grandTotal: number

  @column()
  declare status: 'pending' | 'settlement' | 'completed'

  @column()
  declare tableNumber: number

  @column()
  declare paymentMethod: 'cash' | 'qris' | null

  @column()
  declare note: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime | null

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => OrderItem)
  declare orderItems: HasMany<typeof OrderItem>
}
