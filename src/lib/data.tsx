import { GlobeIcon } from "lucide-react";

export const DATA = {
  projects: [
    {
      title: "Romona’s Home Care",
      href: "https://joshfvo.com",
      dates: "July 2025 - October 2025",
      active: true,
      description:
        "Architected and developed a production iOS app for home care management using SwiftUI and Firebase, featuring scheduling, employee tracking, financials, and geofenced clock-in.",
      technologies: [
        "Swift",
        "SwiftUI",
        "Firebase Firestore",
        "Firebase Auth",
        "MapKit",
        "CoreLocation",
        "iOS",
      ],
      links: [
        {
          type: "Website",
          href: "https://romonashomecare.com/app-support",
          icon: <GlobeIcon className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "",
        //   icon: <Github className="size-3" />,
        // },
      ],
      image: "",
      video: "",
    },
    {
      title: "Referred.fyi",
      href: "https://referred.fyi",
      dates: "July 2024 - July 2025",
      active: true,
      description:
        "Built a full-stack referral marketplace using React, TypeScript, and AWS Amplify Gen 2 with Stripe integration, role-based multi-tenant architecture, and analytics dashboard.",
      technologies: [
        "React",
        "TypeScript",
        "AWS Amplify Gen 2",
        "GraphQL",
        "TailwindCSS",
        "Stripe",
        "Radix UI",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://referred.fyi",
          icon: <GlobeIcon className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/JoshFVO",
        //   icon: <Github className="size-3" />,
        // },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "AWS Image Processing System",
      href: "https://joshfvo.com",
      dates: "September 2023 - December 2023",
      active: true,
      description:
        "Developed an AWS Lambda-based image processing system using Python’s Pillow library for resizing, reformatting, and flipping images with event-driven architecture via S3.",
      technologies: [
        "Python",
        "AWS Lambda",
        "AWS S3",
        "Pillow",
        "Postman",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://joshfvo.com",
        //   icon: <GlobeIcon className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/JoshFVO",
        //   icon: <Github className="size-3" />,
        // },
      ],
      image: "",
      video: "",
    },
    {
      title: "Asteroids Game",
      href: "https://joshfvo.com",
      dates: "January 2022 - March 2022",
      active: true,
      description:
        "Created a recreation of the classic Asteroids game entirely in ARM Assembly, implementing pixel-perfect collision detection and physics-based movement on an Altera DE1-SoC system.",
      technologies: [
        "ARM Assembly",
        "C",
        "Embedded Systems",
        "Game Development",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://joshfvo.com",
        //   icon: <GlobeIcon className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/JoshFVO",
        //   icon: <Github className="size-3" />,
        // },
      ],
      image: "",
      video:
        "",
    },
  ],
} as const;





export const RECIPES = [
  {
    title: "Birria Tacos",
    date: "October 2025",
    href: "/recipes/birria-tacos",
    description:
      "A delicious and authentic recipe for birria tacos, a traditional Mexican dish made with slow-cooked beef and spices.",
    ingredients: [
      "2 lbs Chuck Roast",
      "1 Yellow Onion",
      "2 cloves of Garlic",
      "2-3 Dried Guajillo Chiles",
      "2-3 Dried Ancho Chiles",
      "1 tsp Cumin",
      "1 tsp Oregano",
      "1 tsp Thyme",
      "1 tsp Black Pepper",
      "1 tsp Salt",
      "1-2 Bay Leaves",
      "4-5 cups Beef Broth",
      "Corn Tortillas",
      "Fresh Cilantro",
      "Lime Wedges",
    ],
    instructions: [
      "1. Start by toasting the dried guajillo and ancho chiles in a dry skillet over medium heat for about 2-3 minutes until fragrant. Remove from heat and let them cool.",
      "2. Once cooled, remove the stems and seeds from the chiles and place them in a blender with 1 cup of beef broth. Blend until smooth.",
      "3. In a large pot, heat some oil over medium heat. Add the chopped onion and garlic, sautéing until translucent.",
      "4. Add the chuck roast to the pot and sear on all sides until browned.",
      "5. Pour the blended chile mixture over the meat, add the remaining beef broth, cumin, oregano, thyme, black pepper, salt, and bay leaves.",
      "6. Bring to a boil, then reduce heat to low and cover. Let it simmer for 2-3 hours or until the meat is tender and easily shredded.",
      "7. Once cooked, remove the meat from the pot and shred it using two forks.",
      "8. Strain the broth and reserve it for dipping.",
      "9. To assemble the tacos, dip corn tortillas in the reserved broth, fill them with shredded meat, and top with fresh cilantro.",
      "10. Serve with lime wedges and enjoy your birria tacos!",
    ],
  },

  {
    title: "Creamy Garlic Parmesan Chicken",
    date: "February 2025",
    href: "/recipes/creamy-garlic-parmesan-chicken",
    description:
      "A rich and comforting chicken dish with a creamy garlic parmesan sauce that pairs perfectly with rice or pasta.",
    ingredients: [
      "2 Chicken Breasts",
      "1 cup Heavy Cream",
      "1/2 cup Parmesan Cheese",
      "3 cloves of Garlic",
      "1 tbsp Butter",
      "1 tbsp Olive Oil",
      "1 tsp Italian Seasoning",
      "Salt",
      "Black Pepper",
      "Fresh Parsley (for garnish)",
    ],
    instructions: [
      "1. Season chicken breasts with salt, pepper, and Italian seasoning.",
      "2. Heat olive oil and butter in a skillet over medium heat. Add chicken and sear for 5-6 minutes per side until golden brown and cooked through. Remove and set aside.",
      "3. In the same skillet, sauté minced garlic for 30 seconds until fragrant.",
      "4. Add heavy cream and bring to a gentle simmer. Stir in parmesan cheese until the sauce thickens.",
      "5. Return chicken to the pan and spoon the sauce over it.",
      "6. Simmer for 2-3 minutes to let the flavors meld.",
      "7. Garnish with chopped parsley and serve with rice or pasta.",
    ],
  },

  {
    title: "Honey Sriracha Shrimp",
    date: "December 2024",
    href: "/recipes/honey-sriracha-shrimp",
    description:
      "Sweet, spicy, and sticky shrimp glazed with a flavorful honey sriracha sauce, ready in under 20 minutes.",
    ingredients: [
      "1 lb Large Shrimp (peeled and deveined)",
      "2 tbsp Honey",
      "2 tbsp Sriracha",
      "1 tbsp Soy Sauce",
      "2 cloves Garlic (minced)",
      "1 tbsp Olive Oil",
      "1 tsp Cornstarch",
      "1 tbsp Water",
      "Green Onions (for garnish)",
      "Sesame Seeds (optional)",
    ],
    instructions: [
      "1. In a small bowl, whisk together honey, sriracha, soy sauce, and minced garlic.",
      "2. Heat olive oil in a skillet over medium-high heat.",
      "3. Add shrimp and cook for 1-2 minutes per side until pink.",
      "4. Pour in the honey sriracha sauce and toss to coat.",
      "5. Mix cornstarch and water, then stir it into the skillet to thicken the sauce.",
      "6. Cook for another 1-2 minutes until the sauce becomes sticky.",
      "7. Garnish with green onions and sesame seeds, then serve with rice or noodles.",
    ],
  },

  {
    title: "Roasted Vegetable Quinoa Bowl",
    date: "October 2024",
    href: "/recipes/roasted-vegetable-quinoa-bowl",
    description:
      "A hearty, nutritious bowl of roasted seasonal vegetables served over fluffy quinoa with a tangy lemon-tahini dressing.",
    ingredients: [
      "1 cup Quinoa",
      "1 Red Bell Pepper",
      "1 Zucchini",
      "1 Sweet Potato",
      "1 Red Onion",
      "2 tbsp Olive Oil",
      "Salt",
      "Black Pepper",
      "1/4 cup Tahini",
      "1 Lemon (juiced)",
      "1 clove Garlic",
      "2 tbsp Water",
    ],
    instructions: [
      "1. Preheat the oven to 425°F (220°C).",
      "2. Chop all vegetables into bite-sized pieces and toss with olive oil, salt, and pepper.",
      "3. Spread them on a baking sheet and roast for 20-25 minutes until tender and slightly caramelized.",
      "4. While the veggies roast, rinse and cook quinoa according to package instructions.",
      "5. In a small bowl, whisk together tahini, lemon juice, minced garlic, water, and a pinch of salt to make the dressing.",
      "6. Assemble bowls with quinoa on the bottom, topped with roasted vegetables, and drizzle with tahini dressing.",
    ],
  },

  {
    title: "Crispy Lemon Potatoes",
    date: "September 2024",
    href: "/recipes/crispy-lemon-potatoes",
    description:
      "Crispy, golden potatoes roasted with olive oil, lemon, and herbs for a zesty Mediterranean side dish.",
    ingredients: [
      "2 lbs Baby Potatoes",
      "2 tbsp Olive Oil",
      "2 tbsp Lemon Juice",
      "1 tsp Garlic Powder",
      "1 tsp Oregano",
      "Salt",
      "Black Pepper",
      "Fresh Parsley (for garnish)",
    ],
    instructions: [
      "1. Preheat oven to 425°F (220°C).",
      "2. Halve baby potatoes and toss with olive oil, lemon juice, garlic powder, oregano, salt, and pepper.",
      "3. Spread potatoes evenly on a baking sheet lined with parchment paper.",
      "4. Roast for 35-40 minutes, flipping halfway through, until crispy and golden.",
      "5. Garnish with chopped parsley and serve hot.",
    ],
  },

  {
    title: "Spicy Red Pasta",
    date: "July 2024",
    href: "/recipes/spicy-red-pasta",
    description:
      "A delicious and spicy red pasta recipe that is easy to make and packed with flavor.",
    ingredients: [
      "1 lb Bucatini Pasta",
      "2 carts of Sweet Cherry Tomatoes",
      "Fresh Basil",
      "1 Medium Yellow Onion",
      "3 cloves of Garlic",
      "Parmesan Cheese",
      "Butter",
      "Olive Oil",
      "Chopped Calabrian Peppers",
      "Salt",
      "Black Pepper",
    ],
    instructions: [
      "1. Start by boiling a large pot of salted water. Add the bucatini pasta and cook according to package instructions until al dente.",
      "2. While the pasta is cooking, wash and halve the sweet cherry tomatoes. Set aside.",
      "3. Halve the yellow onion and peel 3 cloves of garlic. Set aside.",
      "4. In a large skillet, heat a generous amount of olive oil over medium heat. Add the halved yellow onion chopped side down and garlic. Sauté for 2 minutes or until garlic starts to brown.",
      "5. Remove garlic. Add the halved cherry tomatoes to the skillet and toss in oil keeping the onion cut side down. Season with salt and black pepper. Cover the pan and let the tomatoes reduce.",
      "6. Once the tomatoes have reduced, add the chopped calabrian peppers and add back the garlic. Toss to combine.",
      "7. Remove the onion and add in basil. Using a hand blender or a regular blender, blend the sauce until smooth. If you prefer a chunkier sauce, you can leave some chunks or use a sieve for a silky texture.",
      "8. Drain the pasta and add it to the skillet with the sauce. Toss to combine, adding a bit of pasta water if needed.",
      "9. Add a knob of butter to the pasta. Toss until the pasta is coated in the sauce.",
      "10. Serve the pasta in bowls, topped with grated parmesan cheese and fresh basil.",
    ],
  },
];