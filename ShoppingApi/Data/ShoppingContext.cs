using Microsoft.EntityFrameworkCore;
using ShoppingApi.Models;
using System.Linq;

namespace ShoppingApi.Data
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext(DbContextOptions<ShoppingContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        // Seed method to populate initial data
        public static void Seed(ShoppingContext context)
        {
            if (context.Products.Any())
            {
                return; // DB has been seeded
            }

            var products = new[]
            {
                new Product { Name = "Chicken", Category = "Meat" },
                new Product { Name = "Beef", Category = "Meat" },
                new Product { Name = "Pork", Category = "Meat" },
                new Product { Name = "Shampoo", Category = "Toiletries" },
                new Product { Name = "Soap", Category = "Toiletries" },
                new Product { Name = "Toothpaste", Category = "Toiletries" },
                new Product { Name = "Milk", Category = "Dairy" },
                new Product { Name = "Cheese", Category = "Dairy" },
                new Product { Name = "Butter", Category = "Dairy" },
                new Product { Name = "Apple", Category = "Fruits and Vegetables" },
                new Product { Name = "Banana", Category = "Fruits and Vegetables" },
                new Product { Name = "Carrot", Category = "Fruits and Vegetables" }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
