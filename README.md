# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This app was created using Next JS incorporating Typescript and Tailwind CSS. The app fetches from the https://api.adviceslip.com/advice api and displays
it to the user. In addition, the app is dynamic and caters for mobile screens 375px and below as well as desktop screens.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/Jake-Oz/advice-generator
- Live Site URL: https://advice-generator-pi-two.vercel.app

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

### What I learned

This was a great project to learn more about Next JS server side components and how to use fetched data in Client components.

In a previous project, I received advice that I could use the <picture> element to utilise different pictures for mobile or desktop.  
I looked at the Next JS docs and it seemed to want me to use the <Image/> element. I will look to investigate this more to see what gives the best solution.

I created a getAdvice.ts file to do the fetching and error handling and left the AdviceCard.tsx component to access the associated api data by calling the getAdvice() function.

In the getAdvice function, I used the next: {revalidate: 0} option to ensure that new data was fetched each time. I probably could have also used the 'no store' option.

```ts
const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch advice data");
  }
  return res.json();
};

export default getAdvice;
```

To access the data in the AdviceCard component, I used the same handleSubmit function that I used for the button onClick and did the initial data population through the useEffect() function.

```tsx
const [data, setData] = useState({ slip: { id: 0, advice: "Fetching..." } });

useEffect(() => {
  handleSubmit();
}, []);

const handleSubmit = async () => {
  const newData = await getAdvice();
  setData(newData);
};
```

### Continued development

Moving forward, I would like to think about how I can improve fetch error detection and associated user alerts. Perhaps with the toastify library.

### Useful resources

- [Next JS Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) - This helped me understand how to do simple fetches in Next JS.

## Author

- Frontend Mentor - [@Jake-Oz](https://www.frontendmentor.io/profile/jake-oz)
