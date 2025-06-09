import {ProductCard} from "@/components/product-card";

const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        image: "/placeholder.svg?height=400&width=300",
        category: "men",
        isNew: true,
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 59.99,
        image: "/placeholder.svg?height=400&width=300",
        category: "men",
        isNew: false,
    },
    {
        id: 3,
        name: "Summer Floral Dress",
        price: 79.99,
        image: "/placeholder.svg?height=400&width=300",
        category: "women",
        isNew: true,
    },
    {
        id: 4,
        name: "Casual Hoodie",
        price: 49.99,
        image: "/placeholder.svg?height=400&width=300",
        category: "men",
        isNew: false,
    },
]

export function FeaturedProducts() {
    return (
        <section className="space-y-6">
            <div className="flex flex-col items-center text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
                <p className="text-muted-foreground max-w-[600px]">Our most popular items, handpicked for you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}

