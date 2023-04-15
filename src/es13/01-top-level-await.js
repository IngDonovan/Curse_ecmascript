//hay que instalar npm install node-fetch en nuestro proyecto
import { products } from "./products.js";

console.log(products);
console.log('Hey....!');

/*[
  {
    id: 3,
    title: 'Oriental Steel Pizza',
    price: 375,
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    images: [
      'https://picsum.photos/640/640?r=7562',
      'https://picsum.photos/640/640?r=1093',
      'https://picsum.photos/640/640?r=5204'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://picsum.photos/640/640?r=8923',
      creationAt: '2023-04-15T09:17:14.000Z',
      updatedAt: '2023-04-15T09:17:14.000Z'
    }
  },
  {
    id: 4,
    title: 'Luxurious Steel Hat',
    price: 148,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    images: [
      'https://picsum.photos/640/640?r=245',
      'https://picsum.photos/640/640?r=7299',
      'https://picsum.photos/640/640?r=60'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://picsum.photos/640/640?r=6565',
      creationAt: '2023-04-15T09:17:14.000Z',
      updatedAt: '2023-04-15T09:17:14.000Z'
    }
  },
  {
    id: 5,
    title: 'Bespoke Frozen Tuna',
    price: 303,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      'https://picsum.photos/640/640?r=7445',
      'https://picsum.photos/640/640?r=9877',
      'https://picsum.photos/640/640?r=6541'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://picsum.photos/640/640?r=6565',
      creationAt: '2023-04-15T09:17:14.000Z',
      updatedAt: '2023-04-15T09:17:14.000Z'
    }
  },
  {
    id: 6,
    title: 'Fantastic Cotton Ball',
    price: 737,
    description: 'The Football Is Good For Training And Recreational Purposes',
    images: [
      'https://picsum.photos/640/640?r=6319',
      'https://picsum.photos/640/640?r=6212',
      'https://picsum.photos/640/640?r=6279'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://picsum.photos/640/640?r=8923',
      creationAt: '2023-04-15T09:17:14.000Z',
      updatedAt: '2023-04-15T09:17:14.000Z'
    }
  },
  {
    id: 7,
    title: 'Gorgeous Soft Car',
    price: 633,
    description: 'The Football Is Good For Training And Recreational Purposes',
    images: [
      'https://picsum.photos/640/640?r=3226',
      'https://picsum.photos/640/640?r=9786',
      'https://picsum.photos/640/640?r=4509'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://picsum.photos/640/640?r=7222',
      creationAt: '2023-04-15T09:17:14.000Z',
      updatedAt: '2023-04-15T09:17:14.000Z'
    }
  },
  {
    id: 8,
    title: 'Luxurious Soft Pants',
    price: 178,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    images: [
      'https://picsum.photos/640/640?r=6037',
      'https://picsum.photos/640/640?r=295',
      'https://picsum.photos/640/640?r=8232'
    ],
    creationAt: '2023-04-15T09:17:14.000Z',
    updatedAt: '2023-04-15T09:17:14.000Z',
    category: { */