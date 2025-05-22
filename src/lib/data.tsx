import { Github, GlobeIcon } from "lucide-react";

export const DATA = {

  projects: [
    {
      title: "Referred.fyi",
      href: "https://referred.fyi",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Developed a referral program software service. Send a referral in minutes, and start rewarding your users for referring their friends.",
      technologies: [
        "Vite",
        "Typescript",
        "GraphQL",
        "AWS Amplify",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://referred.fyi",
         icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Github className="size-3" />
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
        icon: <Github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
         icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
        icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
 
} as const;


export const RECIPES = [
  {
    title: "Birria Tacos",
    date: "October 2024",
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
    title: "Spicy Red Pasta",
    date: "October 2024",
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

]
