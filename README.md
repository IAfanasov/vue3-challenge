# ABN AMRO challenge

This is my first Vue 3 project. I chose Vue because it was suggested by the assignment document. The project is straightforward, so there is no significant advantages on using one framework or another. I created the project using the official Vue.js documentation and followed the folder and file structure proposed by the scaffolding tool. The `views` and `components` folders are sufficient for this project. As the project scales, there might be a need for a different approach. Typically, I prefer to keep the structure consistent with the existing project. If there is no structure, I prefer to use routing modules along with a library for reusable artifacts. For example, `SearchView` will be placed together with the `ShowCompact` component, and the main module will load it using the lazy loading mechanism of the router.

I added Axios for the web requests as I find it more flexible and easier to maintain compared to the native browser Fetch API.

The shows index API returns paginated data. For the sake of this project, I decided to use only the first page. To improve the user experience, I find it handy to create dedicated endpoint(s) for the data displayed on the home page.

The typings for the shows web API are created based on a few data samples; hence the typings might not be fully accurate.

Regarding this assignment note: "Please feel free to include more features other than the few mentioned above." It is difficult to decide when to stop polishing your code for such assignments. There are many features one could imagine might be useful for this app. To avoid the assignment from expanding into unmanageable time consumption, I implemented only the main requirements.

## Prerequisites

- **Node.js**: The project was developed and tested with v20.12.0.

## Run the project locally

```sh
npm install # install dependencies
npm run dev # run the development server
```

## Unit Tests

As I'm new to vuejs, my knowledge makes TDD not feasible at this moment. After implementing the project, I created one test file with clarifying comments to showcase my unit test skills. I hope that is enough for the sake of the assignment.

To run the unit tests:

```sh
npm run test:unit
```
