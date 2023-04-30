import { persisted } from "svelte-local-storage-store";

export const preferences = persisted("preferences", [
     {
          id: 1,
          slug: "xx99-mark-two-headphones",
          image: {
               mobile: "/product-xx99-mark-two-headphones/mobile/image-product.jpg",
               tablet: "/product-xx99-mark-two-headphones/tablet/image-product.jpg",
               desktop: "/product-xx99-mark-two-headphones/desktop/image-product.jpg",
          },
          title: "XX99 Mark II Headphones",
          description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          price: 2999,
          features:
               "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
          includes: [
               {
                    quantity: 1,
                    item: "Headphone Unit",
               },
               {
                    quantity: 2,
                    item: "Replacement Earcups",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "3.5mm 5m Audio Cable",
               },
               {
                    quantity: 1,
                    item: "Travel Bag",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
                    tablet: "/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
                    desktop: "/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
                    tablet: "/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
                    desktop: "/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
                    tablet: "/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
                    desktop: "/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: true,
          category: "headphones",
     },
     {
          id: 2,
          slug: "xx99-mark-one-headphones",
          image: {
               mobile: "/product-xx99-mark-one-headphones/mobile/image-product.jpg",
               tablet: "/product-xx99-mark-one-headphones/tablet/image-product.jpg",
               desktop: "/product-xx99-mark-one-headphones/desktop/image-product.jpg",
          },
          title: "XX99 Mark I Headphones",
          description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
          price: 1750,
          features:
               "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
          includes: [
               {
                    quantity: 1,
                    item: "Headphone Unit",
               },
               {
                    quantity: 2,
                    item: "Replacement Earcups",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "3.5mm 5m Audio Cable",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
                    tablet: "/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
                    desktop: "/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
                    tablet: "/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
                    desktop: "/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
                    tablet: "/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
                    desktop: "/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: false,
          category: "headphones",
     },
     {
          id: 3,
          slug: "xx59-headphones",
          image: {
               mobile: "/product-xx59-headphones/mobile/image-product.jpg",
               tablet: "/product-xx59-headphones/tablet/image-product.jpg",
               desktop: "/product-xx59-headphones/desktop/image-product.jpg",
          },
          title: "XX59 Headphones",
          description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
          price: 899,
          features:
               "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
          includes: [
               {
                    quantity: 1,
                    item: "Headphone Unit",
               },
               {
                    quantity: 2,
                    item: "Replacement Earcups",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "3.5mm 5m Audio Cable",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-xx59-headphones/mobile/image-gallery-1.jpg",
                    tablet: "/product-xx59-headphones/tablet/image-gallery-1.jpg",
                    desktop: "/product-xx59-headphones/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-xx59-headphones/mobile/image-gallery-2.jpg",
                    tablet: "/product-xx59-headphones/tablet/image-gallery-2.jpg",
                    desktop: "/product-xx59-headphones/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-xx59-headphones/mobile/image-gallery-3.jpg",
                    tablet: "/product-xx59-headphones/tablet/image-gallery-3.jpg",
                    desktop: "/product-xx59-headphones/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: false,
          category: "headphones",
     },
     {
          id: 4,
          slug: "zx9-speaker",
          image: {
               mobile: "/product-zx9-speaker/mobile/image-product.jpg",
               tablet: "/product-zx9-speaker/tablet/image-product.jpg",
               desktop: "/product-zx9-speaker/desktop/image-product.jpg",
          },
          title: "ZX9 SPEAKER",
          description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
          price: 4500,
          features:
               "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
          includes: [
               {
                    quantity: 2,
                    item: "Speaker Unit",
               },
               {
                    quantity: 2,
                    item: "Speaker Cloth Panel",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "3.5mm 10m Audio Cable",
               },
               {
                    quantity: 1,
                    item: "10m Optical Cable",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-zx9-speaker/mobile/image-gallery-1.jpg",
                    tablet: "/product-zx9-speaker/tablet/image-gallery-1.jpg",
                    desktop: "/product-zx9-speaker/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-zx9-speaker/mobile/image-gallery-2.jpg",
                    tablet: "/product-zx9-speaker/tablet/image-gallery-2.jpg",
                    desktop: "/product-zx9-speaker/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-zx9-speaker/mobile/image-gallery-3.jpg",
                    tablet: "/product-zx9-speaker/tablet/image-gallery-3.jpg",
                    desktop: "/product-zx9-speaker/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: true,
          category: "speakers",
     },
     {
          id: 5,
          slug: "zx7-speaker",
          image: {
               mobile: "/product-zx7-speaker/mobile/image-product.jpg",
               tablet: "/product-zx7-speaker/tablet/image-product.jpg",
               desktop: "/product-zx7-speaker/desktop/image-product.jpg",
          },
          title: "ZX7 SPEAKER",
          description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
          price: 3500,
          features:
               "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
          includes: [
               {
                    quantity: 2,
                    item: "Speaker Unit",
               },
               {
                    quantity: 2,
                    item: "Speaker Cloth Panel",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "3.5mm 7.5m Audio Cable",
               },
               {
                    quantity: 1,
                    item: "7.5m Optical Cable",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-zx7-speaker/mobile/image-gallery-1.jpg",
                    tablet: "/product-zx7-speaker/tablet/image-gallery-1.jpg",
                    desktop: "/product-zx7-speaker/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-zx7-speaker/mobile/image-gallery-2.jpg",
                    tablet: "/product-zx7-speaker/tablet/image-gallery-2.jpg",
                    desktop: "/product-zx7-speaker/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-zx7-speaker/mobile/image-gallery-3.jpg",
                    tablet: "/product-zx7-speaker/tablet/image-gallery-3.jpg",
                    desktop: "/product-zx7-speaker/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: false,
          category: "speakers",
     },
     {
          id: 6,
          slug: "yx1-wireless-earphones",
          image: {
               mobile: "/product-yx1-earphones/mobile/image-product.jpg",
               tablet: "/product-yx1-earphones/tablet/image-product.jpg",
               desktop: "/product-yx1-earphones/desktop/image-product.jpg",
          },
          title: "YX1 WIRELESS EARPHONES",
          description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
          price: 599,
          features:
               "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
          includes: [
               {
                    quantity: 2,
                    item: "Earphone Unit",
               },
               {
                    quantity: 6,
                    item: "Multi-size Earplugs",
               },
               {
                    quantity: 1,
                    item: "User Manual",
               },
               {
                    quantity: 1,
                    item: "USB-C Charging Cable",
               },
               {
                    quantity: 1,
                    item: "Travel Pouch",
               },
          ],
          gallery: {
               first: {
                    mobile: "/product-yx1-earphones/mobile/image-gallery-1.jpg",
                    tablet: "/product-yx1-earphones/tablet/image-gallery-1.jpg",
                    desktop: "/product-yx1-earphones/desktop/image-gallery-1.jpg",
               },
               second: {
                    mobile: "/product-yx1-earphones/mobile/image-gallery-2.jpg",
                    tablet: "/product-yx1-earphones/tablet/image-gallery-2.jpg",
                    desktop: "/product-yx1-earphones/desktop/image-gallery-2.jpg",
               },
               third: {
                    mobile: "/product-yx1-earphones/mobile/image-gallery-3.jpg",
                    tablet: "/product-yx1-earphones/tablet/image-gallery-3.jpg",
                    desktop: "/product-yx1-earphones/desktop/image-gallery-3.jpg",
               },
          },
          purchased: false,
          quantity: 1,
          new: true,
          category: "earphones",
     },
]);
