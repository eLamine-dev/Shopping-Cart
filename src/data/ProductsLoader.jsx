export const ProductLoader = () => {
   // const response = await fetch('');
   // const products = await response.json();
   return data;
};

let data = {
   cpu: [
      {
         id: '1',
         name: 'Intel Core i9-13900K',
         price: 599.99,
         category: 'cpu',
         description: 'High-end CPU with 24 cores and 32 threads.',
         image: 'https://example.com/images/intel-i9-13900k.jpg',
      },
      {
         id: '2',
         name: 'AMD Ryzen 9 7950X',
         price: 699.99,
         category: 'cpu',
         description: 'Powerful CPU with 16 cores and 32 threads.',
         image: 'https://example.com/images/amd-ryzen-7950x.jpg',
      },
   ],
   gpu: [
      {
         id: '3',
         name: 'NVIDIA GeForce RTX 4080',
         price: 1199.99,
         category: 'gpu',
         description: 'High-performance GPU with 16GB of GDDR6X memory.',
         image: 'https://example.com/images/rtx-4080.jpg',
      },
      {
         id: '4',
         name: 'AMD Radeon RX 7900 XT',
         price: 999.99,
         category: 'gpu',
         description: 'Powerful GPU with 20GB of GDDR6 memory.',
         image: 'https://example.com/images/rx-7900-xt.jpg',
      },
   ],
   memory: [
      {
         id: '5',
         name: 'Corsair Vengeance LPX 16GB',
         price: 89.99,
         category: 'memory',
         description: '16GB DDR4 RAM, 3200MHz.',
         image: 'https://example.com/images/corsair-vengeance.jpg',
      },
      {
         id: '6',
         name: 'G.Skill Trident Z RGB 32GB',
         price: 179.99,
         category: 'memory',
         description: '32GB DDR4 RAM, 3600MHz with RGB lighting.',
         image: 'https://example.com/images/gskill-trident-z.jpg',
      },
   ],
};
