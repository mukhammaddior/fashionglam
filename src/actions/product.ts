'use server'

import prisma from '@/lib/prisma'

export async function getProducts(params?: { gender?: string, category?: string, subCategory?: string }) {
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(params?.gender && { gender: params.gender }),
        ...(params?.category && { category: params.category }),
        ...(params?.subCategory && { subCategory: params.subCategory }),
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug }
    })
    return product
  } catch (error) {
    console.error('Error fetching product by slug:', error)
    return null
  }
}

export async function getTrendingProducts() {
  try {
    const products = await prisma.product.findMany({
      where: { isTrending: true },
      take: 8,
      orderBy: { createdAt: 'desc' }
    })
    return products
  } catch (error) {
    console.error('Error fetching trending products:', error)
    return []
  }
}

export async function getNewArrivals() {
  try {
    const products = await prisma.product.findMany({
      where: { isNewArrival: true },
      take: 8,
      orderBy: { createdAt: 'desc' }
    })
    return products
  } catch (error) {
    console.error('Error fetching new arrivals:', error)
    return []
  }
}

export async function getCategories(gender?: string) {
  try {
    const categories = await prisma.category.findMany({
      where: {
        ...(gender && { gender }),
      }
    })
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getProductsBySlugs(slugs: string[]) {
  try {
    if (!slugs || slugs.length === 0) return []
    const products = await prisma.product.findMany({
      where: { slug: { in: slugs } }
    })
    return products
  } catch (error) {
    console.error('Error fetching products by slugs:', error)
    return []
  }
}
