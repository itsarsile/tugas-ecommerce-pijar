import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        brand: 'String',
        stock: 6998853,
        price: 1987334,
        seller: {
          create: {
            email: 'String225891',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        brand: 'String',
        stock: 8075013,
        price: 5900624,
        seller: {
          create: {
            email: 'String4535922',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
