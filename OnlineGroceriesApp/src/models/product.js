class Product {
  constructor(
    id,
    name,
    quantity,
    price,
    image,
    categoryId,
    prodImages,
    description
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
    this.categoryId = categoryId;
    this.prodImages = prodImages;
    this.description = description;
  }
}

export default Product;
