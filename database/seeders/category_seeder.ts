import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Makanan', description: 'Kategori makanan' },
      { name: 'Minuman', description: 'Kategori minuman' },
    ])
  }
}
