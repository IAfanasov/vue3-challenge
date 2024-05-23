# ABN AMRO challenge

This is my first Vue 3 project. I chose Vue because it was suggested by the assignment document. The project is straightforward, so there is no significant advantages on using one framework or another. I created the project using the official Vue.js documentation and followed the folder and file structure proposed by the scaffolding tool. The `views` and `components` folders are sufficient for this project. As the project scales, there might be a need for a different approach. Typically, I prefer to keep the structure consistent with the existing project. If there is no structure, I prefer to use business domain modules along with a library for reusable modules. For example, `SearchView` will be placed together with the `ShowCompact` component, and the main module will load it using the lazy loading mechanism of the router.

I added Axios for the web requests as I find it more flexible and easier to maintain compared to the native browser Fetch API.

The shows index API returns paginated data. For the sake of this project, I decided to use only the first page. To improve the user experience, I find it handy to create dedicated endpoint(s) for the shows displayed on the home page.

The typings for the shows web API are created based on a few data samples; hence the typings might not be fully accurate.

## Prerequisites

- **Node.js**: The project was developed and tested with v20.12.0.

## Run the project locally

```sh
npm install # install dependencies
npm run dev # run the development server
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
