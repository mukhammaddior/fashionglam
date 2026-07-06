import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

function getGroupedImages(dirPath: string) {
  const fullPath = path.join(process.cwd(), 'public', dirPath)
  if (!fs.existsSync(fullPath)) return {}
  
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'))
  
  // Group by base name. E.g., 'women-4'
  const groups: Record<string, string[]> = {}
  
  files.forEach(file => {
    const match = file.match(/^([a-zA-Z-]+-\d+)/)
    if (match) {
      const baseName = match[1]
      if (!groups[baseName]) {
        groups[baseName] = []
      }
      groups[baseName].push(`/${dirPath}/${file}`)
    }
  })
  
  // Sort images within each group so that the base image comes first
  for (const key in groups) {
    groups[key].sort((a, b) => {
      // length sort works because 'women-4.jpg' is shorter than 'women-4.1.jpg'
      return a.length - b.length
    })
  }
  
  return groups
}

async function main() {
  // Clear existing data
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  // Create Categories
  await prisma.category.createMany({
    data: [
      { name: 'Clothing', slug: 'clothing-men', gender: 'men' },
      { name: 'Accessories', slug: 'accessories-men', gender: 'men' },
      { name: 'Shoes', slug: 'shoes-men', gender: 'men' },
      { name: 'Clothing', slug: 'clothing-women', gender: 'women' },
      { name: 'Accessories', slug: 'accessories-women', gender: 'women' },
      { name: 'Shoes', slug: 'shoes-women', gender: 'women' },
    ]
  })

  const sizesJSON = JSON.stringify(["S", "M", "L", "XL"])
  const colorsJSON = JSON.stringify(["Black", "White", "Navy"])

  const allProducts: any[] = []

  // Generate Men Products (using /image/men)
  const menGroups = getGroupedImages('image/men')
  Object.keys(menGroups).forEach((baseName, index) => {
    const images = menGroups[baseName]
    allProducts.push({
      name: `Men's Classic Collection ${index + 1}`,
      slug: baseName, // e.g. men-1
      description: `Elevate your style with the Men's Classic Collection ${index + 1}. Crafted for comfort and designed for a timeless look. This premium piece is perfect for both casual and formal settings.`,
      price: Math.floor(Math.random() * 150) + 50,
      originalPrice: Math.floor(Math.random() * 150) + 200,
      gender: 'men',
      category: 'clothing',
      subCategory: 't-shirts',
      imageUrl: images[0],
      hoverImageUrl: images[1] || null,
      images: JSON.stringify(images),
      sizes: sizesJSON,
      colors: colorsJSON,
      isTrending: index <= 2,
      isNewArrival: index > 2 && index <= 4,
    })
  })

  // Generate Women Products (using /image/women)
  const womenGroups = getGroupedImages('image/women')
  Object.keys(womenGroups).forEach((baseName, index) => {
    const images = womenGroups[baseName]
    allProducts.push({
      name: `Women's Elegant Style ${index + 1}`,
      slug: baseName, // e.g. women-4
      description: `Discover true elegance with the Women's Elegant Style ${index + 1}. Featuring sophisticated details and high-quality fabric, it is designed to make you feel confident and beautiful.`,
      price: Math.floor(Math.random() * 200) + 60,
      originalPrice: Math.floor(Math.random() * 200) + 260,
      gender: 'women',
      category: 'clothing',
      subCategory: 'dresses',
      imageUrl: images[0],
      hoverImageUrl: images[1] || null,
      images: JSON.stringify(images),
      sizes: sizesJSON,
      colors: colorsJSON,
      isTrending: index <= 4,
      isNewArrival: index > 4 && index <= 8,
    })
  })

  // Generate Accessories Men Products (using /image/accessories-men)
  const accMenGroups = getGroupedImages('image/accessories-men')
  Object.keys(accMenGroups).forEach((baseName, index) => {
    const images = accMenGroups[baseName]
    allProducts.push({
      name: `Men's Premium Accessory ${index + 1}`,
      slug: baseName, // e.g. men-acc-1
      description: `Complete your look with the Men's Premium Accessory ${index + 1}. A perfect blend of functionality and style, adding that finishing touch to any outfit.`,
      price: Math.floor(Math.random() * 100) + 20,
      originalPrice: null,
      gender: 'men',
      category: 'accessories',
      subCategory: 'watches',
      imageUrl: images[0],
      hoverImageUrl: images[1] || null,
      images: JSON.stringify(images),
      sizes: JSON.stringify(["One Size"]),
      colors: colorsJSON,
      isTrending: index <= 1,
      isNewArrival: index > 1 && index <= 3,
    })
  })

  // Generate Accessories Women Products (using /image/accessories-women)
  const accWomenGroups = getGroupedImages('image/accessories-women')
  Object.keys(accWomenGroups).forEach((baseName, index) => {
    const images = accWomenGroups[baseName]
    allProducts.push({
      name: `Women's Luxury Accessory ${index + 1}`,
      slug: baseName, // e.g. women-acc-10
      description: `Accentuate your elegance with the Women's Luxury Accessory ${index + 1}. Meticulously crafted to shine and bring a touch of glamour to your everyday or evening wear.`,
      price: Math.floor(Math.random() * 120) + 30,
      originalPrice: null,
      gender: 'women',
      category: 'accessories',
      subCategory: 'jewelry',
      imageUrl: images[0],
      hoverImageUrl: images[1] || null,
      images: JSON.stringify(images),
      sizes: JSON.stringify(["One Size"]),
      colors: colorsJSON,
      isTrending: index <= 3,
      isNewArrival: index > 3 && index <= 6,
    })
  })

  // Insert all products
  await prisma.product.createMany({
    data: allProducts,
  })

  console.log(`Database seeded successfully! Created ${allProducts.length} unique products.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
