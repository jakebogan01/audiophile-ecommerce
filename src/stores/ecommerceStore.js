import { persisted } from "svelte-local-storage-store";

export const preferences = persisted("preferences", [
     {
          id: 1,
          slug: "yx1-earphones",
          image: {
               mobile: "./assets/product-yx1-earphones/mobile/image-product.jpg",
               tablet: "./assets/product-yx1-earphones/tablet/image-product.jpg",
               desktop: "./assets/product-yx1-earphones/desktop/image-product.jpg",
          },
          title: "YX1 Wireless Earphones",
          description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
          price: 599,
          features:
               "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
          includes: [
               {
                    quantity: 2,
                    item: "Earphone unit",
               },
               {
                    quantity: 6,
                    item: "Multi-size earplugs",
               },
               {
                    quantity: 1,
                    item: "User manual",
               },
               {
                    quantity: 1,
                    item: "USB-C charging cable",
               },
               {
                    quantity: 1,
                    item: "Travel pouch",
               },
          ],
          gallery: {
               first: {
                    mobile: "./assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
                    tablet: "./assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
                    desktop: "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "./assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
                    tablet: "./assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
                    desktop: "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "./assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
                    tablet: "./assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
                    desktop: "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: true,
          category: "earphones",
          categoryImage: {
               mobile: "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
               tablet: "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
               desktop: "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
          },
     },
]);
