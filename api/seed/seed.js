const { db } = require("@vercel/postgres");
const products = require("./ordered-data.json");
const sizes = require("../sizes.json");

async function seedProducts(client) {
  for (const product of products) {
    const description = "";
    const { rows } =
      await client.sql`INSERT INTO TB_PRODUCTS (NAME, DESCRIPTION, BRAND, PRICE) VALUES (${product.name}, ${description} , ${product.brand}, ${product.price}) RETURNING ID`;
    const productId = rows[0].id;
    for (const variant of product.variants) {
      await client.sql`INSERT INTO TB_PRODUCT_VARIANT (PRODUCT_ID, COLOR_PRIM, COLOR_SEC, IMAGE_URL) VALUES (${productId}, ${variant.color_prim}, ${variant.color_sec}, ${variant.image})`;
    }
  }
}

async function seedSizes(client) {
  for (const size of sizes) {
    await client.sql`INSERT INTO TB_SIZES (SIZE_US, SIZE_PE, SIZE_UK, SIZE_EU, SIZE_CM) VALUES (${size.size_us}, ${size.size_pe}, ${size.size_uk}, ${size.size_eu}, ${size.size_cm}) RETURNING ID`;
    console.log(`Size ${size.size_us} inserted`);
  }
}



async function seed() {
  const client = await db.connect();
  //   await seedProducts(client);
  //   await seedSizes(client);
}

seed()
  .catch((e) => console.error(e))
  .finally(() => process.exit());