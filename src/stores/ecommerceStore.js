import { persisted } from "svelte-local-storage-store";

export const preferences = persisted("preferences", [
     {
          title: "headphones",
          products: [
               {
                    id: 1,
                    slug: "slug-one",
                    productImage: "",
                    title: "headphone one",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: true,
                    quantity: 0,
                    new: false,
               },
               {
                    id: 2,
                    slug: "slug-two",
                    productImage: "",
                    title: "headphone two",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: true,
                    quantity: 0,
                    new: false,
               },
          ],
     },
     {
          title: "speakers",
          products: [
               {
                    id: 1,
                    slug: "slug-one",
                    productImage: "",
                    title: "speakers one",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: false,
                    quantity: 0,
                    new: false,
               },
               {
                    id: 2,
                    slug: "slug-two",
                    productImage: "",
                    title: "speakers two",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: false,
                    quantity: 0,
                    new: false,
               },
          ],
     },
     {
          title: "earphones",
          products: [
               {
                    id: 1,
                    slug: "slug-one",
                    productImage: "",
                    title: "earphones one",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: true,
                    quantity: 0,
                    new: false,
               },
               {
                    id: 2,
                    slug: "slug-three",
                    productImage: "",
                    title: "earphones two",
                    description: "",
                    price: 50.0,
                    features: "",
                    inBox: [],
                    thumbnailImages: [],
                    purchased: false,
                    quantity: 0,
                    new: false,
               },
          ],
     },
]);
