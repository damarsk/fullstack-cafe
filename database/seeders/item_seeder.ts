import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Item from '#models/item'

export default class extends BaseSeeder {
  async run() {
    await Item.createMany([
      {
        name: 'Nasi Goreng',
        description: 'Nasi goreng dengan telur dan sayuran',
        price: 15000,
        categoryId: 1,
        imageUrl: 'https://via.placeholder.com/300x200?text=Nasi+Goreng',
        isActive: true,
      },
      {
        name: 'Mie Goreng',
        description: 'Mie goreng dengan bumbu khas',
        price: 12000,
        categoryId: 1,
        imageUrl: 'https://via.placeholder.com/300x200?text=Mie+Goreng',
        isActive: true,
      },
      {
        name: 'Es Teh',
        description: 'Es teh manis dengan es batu',
        price: 5000,
        categoryId: 2,
        imageUrl: 'https://via.placeholder.com/300x200?text=Es+Teh',
        isActive: true,
      },
      {
        name: 'Es Jeruk',
        description: 'Es jeruk segar dengan perasan jeruk',
        price: 7000,
        categoryId: 2,
        imageUrl: 'https://via.placeholder.com/300x200?text=Es+Jeruk',
        isActive: false,
      },
    ])
  }
}
