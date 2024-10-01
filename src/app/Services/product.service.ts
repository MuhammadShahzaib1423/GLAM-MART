import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products = [
    {
      id: 1,
      name: "Trendy Black T-Shirt",
      price: 405,
      quantity: 1,
      detail:
        "A trendy black t-shirt that combines style with comfort. Perfect for casual outings or daily wear. Made from soft, breathable fabric.",
      image: "../../assets/black1.jpg",
      discount: "50",
      brand: "Polo",

      rating: 4.2,
      category: "Shirts",
      description:
        "This black t-shirt is designed to offer both style and comfort for any casual setting. The sleek and minimalist design makes it an ideal choice for those who prefer understated fashion. Its soft fabric ensures maximum comfort throughout the day, making it perfect for relaxed weekends or casual meetups. The material is durable, ensuring it will withstand repeated use and washing without losing its quality. Its versatility allows you to pair it with a wide range of outfits, from jeans to joggers. Whether you’re heading to a casual outing or just lounging at home, this t-shirt has you covered. The classic black color ensures it remains a staple in your wardrobe for years. Easy to care for and maintain, this t-shirt is the perfect balance of comfort and style. Ideal for those who appreciate timeless fashion that never goes out of style. Elevate your everyday wardrobe with this essential black t-shirt.",
      images: [
        "../../assets/black1.jpg",
        "../../assets/black2.jpg",
        "../../assets/black3.jpg",
        "../../assets/black4.jpg",
        "../../assets/black5.jpg",
      ],
    },
    {
      id: 2,
      name: "Classic Grey T Shirt",
      price: 900,
      quantiy: 1,
      detail:
        "A classic grey t-shirt that offers a timeless style. Suitable for any casual event. Crafted from premium materials for lasting comfort.",
      image: "../../assets/grey1.jpg",
      discount: "20",
      brand: "Polo",
      rating: 4.1,
      category: "Shirts",

      description:
        "This grey t-shirt is a perfect blend of comfort and style for those looking for something classic yet modern. Its neutral grey tone ensures it pairs easily with a variety of bottoms, making it a versatile piece for any wardrobe. The soft fabric feels great against the skin, providing all-day comfort, while its durable construction ensures it will last through countless wears and washes. Whether you’re heading to a casual event or just out for a stroll, this shirt will keep you looking effortlessly stylish. The clean and simple design makes it a go-to option for layering or wearing on its own. It’s perfect for both men and women who value simplicity and comfort. Its tailored fit provides a sleek silhouette without feeling too tight or restrictive. Whether paired with jeans or shorts, this grey t-shirt is a timeless essential for every wardrobe. Add this classic piece to your collection for an easy, polished look.",
      images: [
        "../../assets/grey1.jpg",
        "../../assets/grey2.jpg",
        "../../assets/grey3.jpg",
        "../../assets/grey4.jpg",
        "../../assets/grey5.jpg",
      ],
    },
    {
      id: 3,
      name: "Stylish Blue Joggers",
      price: 3000,
      quantiy: 1,
      rating: 4.7,
      category: "Shoes",
      detail:
        "Stylish blue joggers that offer both comfort and fashion. Ideal for workouts or casual outings. Made from flexible, durable material.",
      image: "../../assets/adidasblue1.jpg",
      discount: "10",
      brand: "Adidas",
      description:
        "These stylish blue joggers are the perfect blend of fashion and functionality. Designed for individuals who want to stay active without compromising on style, they offer a sleek, modern fit that’s suitable for casual wear or light workouts. The elastic waistband ensures a comfortable, adjustable fit, while the tapered legs provide a streamlined look. Made from high-quality, breathable fabric, these joggers offer flexibility and movement, making them perfect for running errands or hitting the gym. The rich blue color adds a touch of vibrancy to your wardrobe, making them easy to pair with a variety of tops. Whether you’re lounging at home or going out for a casual day, these joggers will keep you looking sharp. The durable material ensures they maintain their shape and color even after multiple washes. With a design that combines comfort and style, these joggers are a must-have for any wardrobe. Experience a blend of performance and style with these blue joggers.",
      images: [
        "../../assets/adidasblue1.jpg",
        "../../assets/adidasblue2.jpg",
        "../../assets/adidasblue3.jpg",
        "../../assets/adidasblue4.jpg",
        "../../assets/adidasblue5.jpg",
      ],
    },
    {
      id: 4,
      name: "Track Jacket",
      price: 4500,
      rating: 4.9,
      category: "Jackets",
      detail:
        "A track jacket that combines style with functionality. Ideal for workouts or casual outings. Made from lightweight, breathable fabric.",
      image: "../../assets/trackjacket1.jpg",
      discount: "30",
      quantiy: 1,
      brand: "Adidas",
      description:
        "A Brown Track Jacket is a versatile and stylish addition to your wardrobe. Whether you’re heading to the gym or running errands, this jacket offers the perfect blend of comfort and style. Made from lightweight, breathable fabric, it provides a comfortable fit that allows for easy movement. The track jacket features a full-zip front and stand-up collar, making it easy to layer over your favorite tops. The rich brown color adds a touch of sophistication to your look, while the classic design ensures it pairs well with a variety of outfits. Whether you’re working out or just running errands, this track jacket will keep you looking sharp. The durable material ensures it maintains its shape and color even after multiple washes. Elevate your activewear collection with this versatile and stylish brown track jacket.",
      images: [
        "../../assets/trackjacket1.jpg",
        "../../assets/trackjacket2.jpg",
        "../../assets/trackjacket3.jpg",
        "../../assets/trackjacket4.jpg",
        "../../assets/trackjacket5.jpg",
      ],
    },
    {
      id: 5,
      name: "Blue Hoodie Set",
      price: 3500,
      rating: 4.3,
      category: "Jackets",
      detail:
        "A blue hoodie set that offers comfort and style. Ideal for casual outings or lounging at home. Made from soft, breathable fabric.",
      image: "../../assets/hoodie1.jpg",
      discount: "20",
      quantiy: 1,
      brand: "Adidas",
      description:
        "This blue hoodie set is the perfect combination of comfort and style for those who appreciate a casual yet put-together look. The soft fabric provides a cozy feel, making it ideal for lounging at home or running errands. The hoodie features a relaxed fit that allows for easy movement, while the drawstring hood offers added warmth and protection from the elements. The matching joggers complete the set, providing a coordinated look that’s perfect for everyday wear. The rich blue color adds a pop of vibrancy to your wardrobe, making it easy to pair with a variety of tops. Whether you’re heading to the gym or just relaxing at home, this hoodie set will keep you looking stylish and feeling comfortable. The durable material ensures that the set maintains its shape and color even after multiple washes. Elevate your loungewear collection with this versatile and cozy blue hoodie set.",
      images: [
        "../../assets/hoodie1.jpg",
        "../../assets/hoodie2.jpg",
        "../../assets/hoodie3.jpg",
        "../../assets/hoodie4.jpg",
        "../../assets/hoodie5.jpg",
      ],
    },
    {
      id: 6,
      name: "Adidas Sneakers",
      price: 2000,
      rating: 4.8,
      category: "Shoes",
      detail:
        "A pair of stylish black sneakers for everyday use. Sleek design with superior comfort. Perfect for casual outings and light exercise.",
      image: "../../assets/adidas1.jpg",
      discount: "20",
      quantiy: 1,
      brand: "Adidas",
      description:
        "Step up your footwear game with these versatile black sneakers, designed for both style and functionality. Crafted for those who value all-day comfort, these sneakers are made from lightweight, durable materials that can withstand daily wear. The minimalist black design effortlessly complements any wardrobe, making them a perfect match for everything from casual outings to light exercise. Featuring a cushioned sole, they provide excellent support, ensuring your feet stay comfortable even during long days on the move. The lace-up closure offers a secure, adjustable fit, while the sleek silhouette keeps your look modern and refined. Whether you're running errands, going for a walk, or just lounging, these sneakers are the ideal companion for every occasion. Stylish, practical, and built to last, they’re an essential addition to your collection.",
      images: [
        "../../assets/adidas1.jpg",
        "../../assets/adidas2.jpg",
        "../../assets/adidas3.jpg",
        "../../assets/adidas4.jpg",
        "../../assets/adidas5.jpg",
      ],
    },

    {
      id: 7,
      name: "Black Sneakers",
      price: 2000,
      rating: 4.8,
      category: "Shoes",
      detail:
        "A pair of stylish black sneakers for everyday use. Sleek design with superior comfort. Perfect for casual outings and light exercise.",
      image: "../../assets/sneakrblack3.jpg",
      discount: "10",
      quantiy: 1,
      brand: "Adidas",
      description:
        "These black sneakers combine comfort, durability, and style for the perfect everyday shoe. Whether you’re heading out for a casual day or taking a light walk, these sneakers offer the support you need. Made from lightweight yet durable materials, they ensure long-lasting comfort even with frequent use. The sleek black design makes them easy to pair with a variety of outfits, from jeans to activewear. The cushioned sole provides extra support for all-day wear, making them ideal for those constantly on their feet. These sneakers are perfect for both indoor and outdoor activities, ensuring flexibility and comfort. The lace-up design allows for a customizable fit, so you can wear them just the way you like. With a modern aesthetic and versatile look, they’re a must-have for anyone who values both style and function. Upgrade your footwear collection with these stylish and comfortable black sneakers.",
      images: [
        "../../assets/sneakrblack3.jpg",
        "../../assets/dneakerblack4.jpg",
        "../../assets/sneakerblack2.jpg",
        "../../assets/sneakerblack1.jpg",
        "../../assets/sneakerblack5.jpg",
      ],
    },
    {
      id: 8,
      name: "Casual Black Shoes",
      price: 2500,
      rating: 4.2,
      category: "Shoes",
      detail:
        "A pair of casual Black Shoes with a classic design. Comfortable and stylish, perfect for daily wear or semi-formal events.",
      image: "../../assets/shoeblack1.jpg",
      discount: "25",
      quantiy: 1,
      brand: "Clark",
      description:
        "These casual Black Shoes are the perfect addition to your footwear collection, offering a mix of comfort and style for any occasion. The rich brown color complements a wide range of outfits, from casual jeans to more formal slacks, making them a versatile choice for your wardrobe. Crafted from premium materials, these loafers provide a soft and breathable fit that ensures comfort throughout the day. The slip-on design makes them convenient for everyday use while still looking polished and sophisticated. With their sturdy construction, these loafers are built to last, providing both durability and timeless appeal. Whether you're heading to the office, a semi-formal event, or a casual weekend outing, these loafers will keep you looking sharp. The cushioned insole offers added support, making them ideal for all-day wear. Elevate your everyday style with these classic brown loafers that combine elegance and practicality.",
      images: [
        "../../assets/shoeblack1.jpg",
        "../../assets/shoeblack2.jpg",
        "../../assets/shoeblack3.jpg",
        "../../assets/shoeblack4.jpg",
        "../../assets/shoeblack5.jpg",
      ],
    },
    {
      id: 9,
      name: "Black Leather Wallet",
      price: 1500,
      rating: 4.6,
      category: "Wallets",
      detail:
        "A sleek black leather wallet with multiple compartments. Stylish and functional design, perfect for everyday use.",
      image: "../../assets/wallet2.jpg",
      discount: "20",
      quantiy: 1,
      brand: "Burberry",
      description:
        "This black leather wallet is a stylish and practical accessory for everyday use. Crafted from high-quality leather, it offers a luxurious feel and a sleek look that complements any outfit. The wallet features multiple compartments for cards, cash, and coins, providing ample storage space in a compact design. The classic black color and minimalist design make it a versatile accessory that suits any style or occasion. Whether you're running errands or heading out for a night on the town, this wallet keeps your essentials organized and easily accessible. The durable construction ensures long-lasting use, while the soft leather exterior adds a touch of sophistication to your everyday carry. With its functional design and timeless appeal, this black leather wallet is a must-have accessory for the modern individual.",
      images: [
        "../../assets/wallet2.jpg",
        "../../assets/wallet2.jpg",
        "../../assets/wallet3.jpg",
        "../../assets/wallet4.jpg",
        "../../assets/wallet5.jpg",
      ],
    },
    {
      id: 10,
      name: "Classic Sunglasses",
      price: 1000,
      rating: 4.4,
      category: "Sunglasses",
      detail:
        "A pair of classic aviator sunglasses with a timeless design. Offers UV protection and a comfortable fit for all-day wear.",
      image: "../../assets/glass1.jpg",
      discount: "15",
      quantiy: 1,
      brand: "Ray-Ban",
      description:
        "These classic aviator sunglasses are a must-have accessory for anyone looking to add a touch of style to their look. The timeless design features a sleek metal frame and teardrop-shaped lenses that flatter a variety of face shapes. The lenses offer UV protection to shield your eyes from harmful rays, making them ideal for outdoor activities or everyday wear. The adjustable nose pads and temple tips provide a comfortable fit that stays in place throughout the day. Whether you're heading to the beach, running errands, or driving around town, these aviator sunglasses offer both style and functionality. The versatile design pairs well with casual or formal outfits, adding a touch of sophistication to your ensemble. With their durable construction and classic appeal, these aviator sunglasses are a staple accessory that will never go out of style.",
      images: [
        "../../assets/glass1.jpg",
        "../../assets/glass2.jpg",
        "../../assets/glass3.jpg",
        "../../assets/glass4.jpg",
        "../../assets/glass5.jpg",
      ],
    },
    {
      id: 11,
      name: "Black Jacket",
      price: 4000,
      rating: 4.1,
      category: "Jackets",
      detail:
        "A black jacket that combines style with warmth. Ideal for casual outings or outdoor activities. Made from durable, weather-resistant material.",
      image: "../../assets/bjacket1.jpg",
      discount: "10",
      quantiy: 1,
      brand: "North Face",
      description:
        "This black jacket is designed to keep you warm and stylish in any weather. Whether you're heading out for a casual outing or an outdoor adventure, this jacket offers the perfect blend of comfort and functionality. Made from durable, weather-resistant material, it provides protection from the elements without sacrificing breathability. The sleek black design adds a touch of sophistication to your look, making it a versatile piece for any wardrobe. The adjustable hood and cuffs ensure a customizable fit, while the multiple pockets offer convenient storage for your essentials. Whether you're hiking, camping, or just running errands, this jacket has you covered. Its lightweight construction makes it easy to layer over sweaters or under heavier coats, providing versatility for changing temperatures. Stay warm and stylish with this essential black jacket that's perfect for any occasion.",
      images: [
        "../../assets/bjacket1.jpg",
        "../../assets/bjacket2.jpg",
        "../../assets/bjacket3.jpg",
        "../../assets/bjacket4.jpg",
        "../../assets/bjacket5.jpg",
      ],
    },
    {
      id: 12,
      name: "Classic Crossbody Bag",
      price: 1800,
      rating: 4.3,
      category: "Wallets",
      detail:
        "A classic crossbody bag with a timeless design. Offers ample storage space and a comfortable fit for everyday use.",
      image: "../../assets/bag1.jpg",
      discount: "15",
      quantiy: 1,
      brand: "Michael Kors",
      description:
        "A classic crossbody bag is a versatile and stylish accessory for any occasion. Whether you're running errands or heading out for a night on the town, this bag offers ample storage space and a comfortable fit. The adjustable strap allows you to wear it as a crossbody or shoulder bag, providing versatility for different looks. The sleek black design and gold-tone hardware add a touch of sophistication to your outfit, making it easy to pair with a variety of styles. The multiple compartments offer convenient storage for your essentials, while the durable construction ensures long-lasting use. Whether you're traveling or just out and about, this crossbody bag keeps your belongings organized and easily accessible. Elevate your everyday look with this classic crossbody bag that combines fashion and function.",
      images: [
        "../../assets/bag1.jpg",
        "../../assets/bag2.jpg",
        "../../assets/bag3.jpg",
        "../../assets/bag4.jpg",
        "../../assets/bag5.jpg",
      ],
    },
    {
      id: 13,
      name: "Square Silver Glasses",
      price: 1200,
      rating: 4.5,
      category: "Sunglasses",
      detail:
        "A pair of square silver glasses with a modern design. Offers UV protection and a comfortable fit for all-day wear.",
      brand: "Ray-Ban",
      image: "../../assets/glass9.jpg",
      discount: "10",
      description:
        "A pair of square silver glasses with a modern design. Offers UV protection and a comfortable fit for all-day wear.",
      quantiy: 1,
      images: [
        "../../assets/glass9.jpg",
        "../../assets/glass10.jpg",
        "../../assets/glass11.jpg",
        "../../assets/glass12.jpg",
        "../../assets/glass13.jpg",
      ],
    },
    {
      id: 14,
      name: "Bio Based Glasses",
      price: 1500,
      rating: 4.6,
      category: "Sunglasses",
      detail:
        "A pair of bio-based glasses with a sustainable design. Offers UV protection and a comfortable fit for all-day wear.",
      image: "../../assets/glass.jpg",
      discount: "20",
      quantiy: 1,
      brand: "Ray-Ban",
      description:
        "These bio-based glasses are a sustainable and stylish choice for those who care about the environment. Made from renewable materials, they offer a modern design that's both eco-friendly and fashionable. The lenses provide UV protection to shield your eyes from harmful rays, making them ideal for outdoor activities or everyday wear. The lightweight frame and comfortable fit ensure all-day wearability, while the sleek design adds a touch of sophistication to your look. Whether you're heading to the beach, running errands, or just relaxing at home, these glasses offer both style and functionality. The durable construction ensures they maintain their shape and color even after multiple washes. Elevate your eyewear collection with these bio-based glasses that combine sustainability and style.",
      images: [
        "../../assets/glass.jpg",
        "../../assets/glass6.jpg",
        "../../assets/glass7.jpg",
        "../../assets/glass8.jpg",
        "../../assets/glass9.jpg",
      ],
    },
  ];
  bestSellers = [
    {
      id: 1,
      name: "Trendy Black T-Shirt",
      price: 405,
      quantity: 1,
      detail:
        "A trendy black t-shirt that combines style with comfort. Perfect for casual outings or daily wear. Made from soft, breathable fabric.",
      image: "../../assets/black1.jpg",
      discount: "50",
      brand: "Polo",
      rating: 3.9,
      category: "Shirts",
      description:
        "This black t-shirt is designed to offer both style and comfort for any casual setting. The sleek and minimalist design makes it an ideal choice for those who prefer understated fashion. Its soft fabric ensures maximum comfort throughout the day, making it perfect for relaxed weekends or casual meetups. The material is durable, ensuring it will withstand repeated use and washing without losing its quality. Its versatility allows you to pair it with a wide range of outfits, from jeans to joggers. Whether you’re heading to a casual outing or just lounging at home, this t-shirt has you covered. The classic black color ensures it remains a staple in your wardrobe for years. Easy to care for and maintain, this t-shirt is the perfect balance of comfort and style. Ideal for those who appreciate timeless fashion that never goes out of style. Elevate your everyday wardrobe with this essential black t-shirt.",
      images: [
        "../../assets/black1.jpg",
        "../../assets/black2.jpg",
        "../../assets/black3.jpg",
        "../../assets/black4.jpg",
        "../../assets/black5.jpg",
      ],
    },
    {
      id: 10,
      name: "Classic  Sunglasses",
      price: 1000,
      rating: 4.4,
      category: "Sunglasses",
      detail:
        "A pair of classic aviator sunglasses with a timeless design. Offers UV protection and a comfortable fit for all-day wear.",
      image: "../../assets/glass1.jpg",
      discount: "15",
      quantiy: 1,
      brand: "Ray-Ban",
      description:
        "These classic aviator sunglasses are a must-have accessory for anyone looking to add a touch of style to their look. The timeless design features a sleek metal frame and teardrop-shaped lenses that flatter a variety of face shapes. The lenses offer UV protection to shield your eyes from harmful rays, making them ideal for outdoor activities or everyday wear. The adjustable nose pads and temple tips provide a comfortable fit that stays in place throughout the day. Whether you're heading to the beach, running errands, or driving around town, these aviator sunglasses offer both style and functionality. The versatile design pairs well with casual or formal outfits, adding a touch of sophistication to your ensemble. With their durable construction and classic appeal, these aviator sunglasses are a staple accessory that will never go out of style.",
      images: [
        "../../assets/glass1.jpg",
        "../../assets/glass2.jpg",
        "../../assets/glass3.jpg",
        "../../assets/glass4.jpg",
        "../../assets/glass5.jpg",
      ],
    },
    {
      id: 5,
      name: "Blue Hoodie Set",
      price: 3500,
      rating: 4.3,
      category: "Jackets",
      detail:
        "A blue hoodie set that offers comfort and style. Ideal for casual outings or lounging at home. Made from soft, breathable fabric.",
      image: "../../assets/hoodie1.jpg",
      discount: "20",
      quantiy: 1,
      brand: "Adidas",
      description:
        "This blue hoodie set is the perfect combination of comfort and style for those who appreciate a casual yet put-together look. The soft fabric provides a cozy feel, making it ideal for lounging at home or running errands. The hoodie features a relaxed fit that allows for easy movement, while the drawstring hood offers added warmth and protection from the elements. The matching joggers complete the set, providing a coordinated look that’s perfect for everyday wear. The rich blue color adds a pop of vibrancy to your wardrobe, making it easy to pair with a variety of tops. Whether you’re heading to the gym or just relaxing at home, this hoodie set will keep you looking stylish and feeling comfortable. The durable material ensures that the set maintains its shape and color even after multiple washes. Elevate your loungewear collection with this versatile and cozy blue hoodie set.",
      images: [
        "../../assets/hoodie1.jpg",
        "../../assets/hoodie2.jpg",
        "../../assets/hoodie3.jpg",
        "../../assets/hoodie4.jpg",
        "../../assets/hoodie5.jpg",
      ],
    },
    {
      id: 4,
      name: "Casual Black Shoes",
      price: 2500,
      rating: 4.2,
      category: "Shoes",
      detail:
        "A pair of casual Black Shoes with a classic design. Comfortable and stylish, perfect for daily wear or semi-formal events.",
      image: "../../assets/shoeblack1.jpg",
      discount: "25",
      quantiy: 1,
      brand: "Clark",
      description:
        "These casual Black Shoes are the perfect addition to your footwear collection, offering a mix of comfort and style for any occasion. The rich brown color complements a wide range of outfits, from casual jeans to more formal slacks, making them a versatile choice for your wardrobe. Crafted from premium materials, these loafers provide a soft and breathable fit that ensures comfort throughout the day. The slip-on design makes them convenient for everyday use while still looking polished and sophisticated. With their sturdy construction, these loafers are built to last, providing both durability and timeless appeal. Whether you're heading to the office, a semi-formal event, or a casual weekend outing, these loafers will keep you looking sharp. The cushioned insole offers added support, making them ideal for all-day wear. Elevate your everyday style with these classic brown loafers that combine elegance and practicality.",
      images: [
        "../../assets/shoeblack1.jpg",
        "../../assets/shoeblack2.jpg",
        "../../assets/shoeblack3.jpg",
        "../../assets/shoeblack4.jpg",
        "../../assets/shoeblack5.jpg",
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  getProductById(id: string | number): Observable<any> {
    const product = this.products.find((p) => p.id == id);
    return of(product);
  }

  getcategoryProducts(category: string): Observable<any[]> {
    return of(this.products.filter((p) => p.category === category));
  }

  private searchTerm = new BehaviorSubject<string>("");
  currentSearchTerm = this.searchTerm.asObservable();

  updateSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  private searchQuerySubject = new BehaviorSubject<string>("");
  searchQuery$ = this.searchQuerySubject.asObservable();

  updateSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  getProducts(): Observable<any[]> {
    return of(this.products);
  }
  getbestSellers(): Observable<any[]> {
    return of(this.bestSellers);
  }
}
