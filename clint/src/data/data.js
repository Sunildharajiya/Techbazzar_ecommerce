// ===============================
// Product Data — TECHBAZZAR
// Author: Sunil Dharajiya
// ===============================

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,499",
    desc: "High-quality sound, Bluetooth 5.0, and long battery life.",
    longDesc:
      "Enjoy crystal-clear sound and deep bass with these premium wireless headphones. Equipped with Bluetooth 5.0 for stable connectivity, noise cancellation, and up to 20 hours of battery life. Perfect for music lovers and gamers who want freedom from wires.",
    specs: [
      "Bluetooth Version: 5.0",
      "Battery Life: Up to 20 hours",
      "Charging Time: 2 hours",
      "Noise Cancellation: Yes (Passive)",
      "Connectivity: Wireless + AUX cable support",
      "Compatible Devices: Android, iOS, Laptop",
      "Weight: 180g",
    ],
    rating: 4.4,
    reviews: 152,
    images: [
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
      "https://images.unsplash.com/photo-1518546305927-5a555bb702b3",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1f0",
    ],
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹3,999",
    desc: "Track steps, heart rate, and notifications with style.",
    longDesc:
      "Stay fit and connected with this stylish smartwatch featuring an HD display, real-time heart rate tracking, sleep monitoring, and multiple sports modes. Get call, message, and app notifications directly on your wrist.",
    specs: [
      "Display: 1.69-inch HD Touchscreen",
      "Battery Life: Up to 10 days",
      "Water Resistance: IP68",
      "Sensors: Heart Rate, SpO2, Sleep Tracker",
      "Connectivity: Bluetooth 5.0",
      "Compatible with: Android & iOS",
      "Material: Metal body, Silicon strap",
    ],
    rating: 4.2,
    reviews: 201,
    images: [
      "https://images.unsplash.com/photo-1606813907291-fd7aeb7e6b9b",
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
      "https://images.unsplash.com/photo-1580906855282-63bfc2f5dcd7",
    ],
    image: "https://images.unsplash.com/photo-1606813907291-fd7aeb7e6b9b",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,799",
    desc: "Portable design with deep bass and 10-hour battery life.",
    longDesc:
      "Compact and powerful, this Bluetooth speaker delivers deep bass and rich sound. With 10 hours of playback time and a splash-proof design, it's your perfect outdoor companion for music and fun.",
    specs: [
      "Output Power: 10W",
      "Battery Backup: 10 hours",
      "Charging Time: 2 hours",
      "Bluetooth Range: 10m",
      "Water Resistance: IPX5",
      "Connectivity: Bluetooth + AUX + Micro SD",
      "Weight: 300g",
    ],
    rating: 4.5,
    reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1616628188473-fb60f0a8488e",
      "https://images.unsplash.com/photo-1600181952966-32b7f079b7a8",
      "https://images.unsplash.com/photo-1570810161499-8c7d5d73b397",
    ],
    image: "https://images.unsplash.com/photo-1616628188473-fb60f0a8488e",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₹1,299",
    desc: "Ergonomic RGB mouse with 6 programmable buttons.",
    longDesc:
      "Designed for gamers, this RGB gaming mouse offers precision tracking and a comfortable grip. With 6 programmable buttons and customizable lighting, it enhances your gaming experience on any platform.",
    specs: [
      "Sensor: Optical, 6400 DPI",
      "Buttons: 6 Programmable",
      "Lighting: RGB Spectrum",
      "Connection: USB Wired",
      "Cable Length: 1.8m Braided",
      "Compatible with: Windows, macOS, Linux",
      "Weight: 120g",
    ],
    rating: 4.6,
    reviews: 313,
    images: [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
      "https://images.unsplash.com/photo-1616627563441-9309b2f51b1f",
      "https://images.unsplash.com/photo-1593642632559-0c89fce9a651",
    ],
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "₹4,499",
    desc: "Blue switches, RGB lighting, and durable design.",
    longDesc:
      "Experience the tactile feedback of blue switches and vibrant RGB lighting. Built with a durable metal frame and ergonomic keycaps, this keyboard is perfect for gaming and long typing sessions.",
    specs: [
      "Switch Type: Blue Mechanical",
      "Lighting: RGB with 18 modes",
      "Connection: USB Wired",
      "Key Lifespan: 50 million clicks",
      "Build Material: Aluminum Alloy",
      "Layout: Full-size (104 keys)",
      "Cable Type: Detachable Type-C",
    ],
    rating: 4.7,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1587202372775-e229f172b91a",
    ],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
];



const orders = [
    {
      id: "ORD-1023",
      product: "Wireless Headphones",
      price: "₹2,499",
      qty: 1,
      status: "Delivered",
      date: "28 Oct 2025",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439"
    },
    {
      id: "ORD-1024",
      product: "Gaming Mouse",
      price: "₹1,299",
      qty: 2,
      status: "Shipped",
      date: "29 Oct 2025",
      image: "https://images.unsplash.com/photo-1587829730664-3d5f1cdd5a3b"
    }
  ];
  
  

export default products;
