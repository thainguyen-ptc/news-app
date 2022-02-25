This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Reference project

- The basic configurations (eslint, redux store, UI templates,...) are re-used from my own recent project (https://github.com/nisil-thaing/news-blog-nextjs - nearly 1 year ago)
- I'm just loading api and fixing my components's store and binding to the prepared template

## Features

- [x] Display the headline
- [x] Display the author's name
- [x] Display a summary of the content
- [x] Make the headline a link that takes you to the article page
- [x] Server side rendering
- [x] Responsive UI
- [x] Image lazy loading
- [x] Articles infinitive loading (while scrolling down to bottom)
- [x] Data is stored in a single store of trust (redux, redux-saga) 

## Getting Started

First, add local evironment variables to your `.env.local` file under the root folder of the project:

```bash
NEXT_PUBLIC_API_KEY=<Your NewsAPI’s apiKey>
NEXT_PUBLIC_API_ENDPOINT=https://newsapi.org/v2/
```

Then, you should make sure every dependency packages are installed:

```bash
npm install
# or
yarn install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Preview

All articles (Desktop mode):

![image](https://user-images.githubusercontent.com/87794768/155837238-c2421a3c-930e-494d-b76b-f36ccaf0fdea.png)

Filtered articles by Sources (Desktop mode)

![image](https://user-images.githubusercontent.com/87794768/155837279-2e91b2c6-8da6-4070-b417-5929d0eed6a6.png)

Filtered articles by Sources (Mobile mode)

![image](https://user-images.githubusercontent.com/87794768/155837342-46419351-7aa8-47c0-87a8-1ff1a1391266.png)

Source listing (Mobile mode)

![image](https://user-images.githubusercontent.com/87794768/155837370-076ea6ac-8c46-40e9-b84b-85fe8b48f44e.png)


## Noted

- To easier to review, I have already deployed the project to Vercel (https://news-app-pi-two.vercel.app/), but it seems to be only worked fine on server side rendering,
then it doesn't worked on client side, or the infinitive loading behavior will not working anymore. The main reason is about their (NewsAPI) CORS policy.
- To fix that, we need to configure the server side to deal with outside requests (from NewsAPI) instead, which is easily to do because of our SSR configurations from the beginning. However maybe it's not our scope in this assignment, so I keep it as a technical debt, could be done as an improvement instead.
- Therefore, please run dev mode on your local with the evironments above to verify my results, it would be worked well without any issues.

Thanks!
