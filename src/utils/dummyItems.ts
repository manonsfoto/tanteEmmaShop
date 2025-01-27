import { Item } from "./interfaces";

const items: Item[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    isAvailable: true,
    price: 29.99,
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIFl9Bofx0gme2z8MmNozStR-IRVAesxG6Q&s",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches.",
    isAvailable: true,
    price: 79.99,
    img_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXsQyvFSd515_ri0aEbDUlZb8s-2MDRQhm1cM4rBLSjybShP18L0zttxncwEeF_LE8hhZnz3NK0MxlW1Ycpl6qB-Y4HSzRDh95hs23H6f0rtiyCljESvYPh9AWLMzsonmI-YNIPw&usqp=CAc",
  },
  {
    id: 3,
    name: "Noise-Canceling Headphones",
    description: "Over-ear headphones with active noise cancelation.",
    isAvailable: false,
    price: 199.99,
    img_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXrJdAUDz2BVjDxuORC8lNnNLUSfeubYwKZ49yvKWsMxSPkodyDKs_LW4J2IwjGwWsNJFURdXRynuWdVARaI_cMrPBLcPe5xTynwVcAA1U5Vm3VkOdU-kk0rhGpBZUZZcZyfydqQ&usqp=CAc",
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "Ultra HD 27-inch monitor with vibrant colors.",
    isAvailable: true,
    price: 299.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTF6NiKND34pZuRhXHLu3as1NpEsDk8jm0SZ3InGJgD8imKM_5oVQN9YIF0c2SGyszRxOHFXYvagybrObWpJR3eOhJ8sumjkNcGWJSQYSlPy51EXeiX_WuUncGuaiYr&usqp=CAc",
  },
  {
    id: 5,
    name: "Webcam",
    description: "1080p webcam with built-in microphone.",
    isAvailable: true,
    price: 49.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSofXOktyL-zX9pOqcpku3gwM7UhjhoT5ypRgoyV_iZu2q4mHbr1mIPL1EX_qBdwc1lkKf7RRWmbV8oDKwvGKmA-nDHoFTtU4IDS5vJueWqHTT9S3hNusD34mWUhOnn4WzLfGuHNw&usqp=CAc",
  },
  {
    id: 6,
    name: "Portable SSD",
    description: "1TB high-speed portable solid-state drive.",
    isAvailable: false,
    price: 129.99,
    img_url:
      "hhttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAu7kBbwU_2S8748zGK-vVwagCSVhf-xhaDZ1am7SFLETCv2Z-mR1O9ufW9QJ-VVjXN80ZThaHdRDm5t6AzNnQYIl0Aitq1M1tmSvJAghGK3lqy8Z3D_KxTQ&usqp=CAc",
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "Water-resistant smartwatch with heart-rate monitor.",
    isAvailable: true,
    price: 249.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgXph4iJdutwM3jxaSYbvFSjGImJkDl8VrRP2gLWT3wiUUAinySsMVJ1z4ZZSNfdRRBUJghBO46vaWAivJ6TjdFWiqU_Coom4d1x5jUmavkQdaqSe3NGQeFtUmQhSmMi6g5qsxNw&usqp=CAc",
  },
  {
    id: 8,
    name: "Gaming Chair",
    description: "Adjustable ergonomic gaming chair with lumbar support.",
    isAvailable: true,
    price: 199.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSblOwNo_adNtVseyXM7ZlReOF1gCoW_DF9nu3wKbtcS0rRMdndJweNVnK4281YhnhAuOMQ25-YOntGpnIgQkpCThiQ60k3_BFDfqhsMaETWeijG8RKNWMfUKFrWXKOsoj2Cq6Yjg&usqp=CAc",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass.",
    isAvailable: false,
    price: 59.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjOFFUBd-S1x7H9GGEA_i8rVMDWuOvyCmWH2tQGgdQhZhjqV1D7sXkU778_cCQmEcyHKG2mbqxg0957TAzTG6oBBqlha1rCloqd-mEOCnIUDYXH6k8UxhI21-jBNPAtWrR_OE5ZA4&usqp=CAc",
  },
  {
    id: 10,
    name: "Smartphone Stand",
    description: "Adjustable stand for smartphones and tablets.",
    isAvailable: true,
    price: 19.99,
    img_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFmuM8o29X0go1zw1AlqVg2AoUZbuipX5FPcyQwk7T1CPAClngkjRiNNegWvKGqlNfBK9RKFYUC4Hd4sRTs-HKJzZp2cRB9n9GOK4UtsGyFMTMsxTDSHcp4farJBPfeBTT_DxsvQ&usqp=CAc",
  },
];
export default items;
