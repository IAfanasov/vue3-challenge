# ABN AMRO challenge

This is my first Vue 3 project. I chose Vue because it was suggested by the assignment document. The project is straightforward, so there is no significant advantages on using one framework or another. I created the project using the official Vue.js documentation and followed the folder and file structure proposed by the scaffolding tool. The `views` and `components` folders are sufficient for this project. As the project scales, there might be a need for a different approach. Typically, I prefer to keep the structure consistent with the existing project. If there is no structure, I prefer to use business domain modules along with a library for reusable modules. For example, `SearchView` will be placed together with the `ShowCompact` component, and the main module will load it using the lazy loading mechanism of the router.

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

As I'm new to vuejs, my knowledge makes TDD not feasible at this moment. After implementing the project, I created one test file with clarifying comments to showcase my unit test skills. I hope that is enough.

To run the unit tests:

```sh
npm run test:unit
```

# Assignment notes checklist

- [x] Please keep in mind that we use VueJS in ABN AMRO. Preferably, you complete this assessment using this framework.
- [x] Application must be responsive and mobile friendly
- [x] Please keep the leverage/use of scaffolding tools, boilerplate templates, plugins etc. to a minimum.
      We don’t expect you to create things from scratch but, we also would like to see your own
      creation
- [x] Please create a readme file that explains your architectural decisions (E.G. why did you choose a
      specific framework) and make sure you include instructions on how to run your solution, add
      details about NodeJS version being used and NPM.
- [x] Please include unit tests
- [x] Please check that application is running and there are no console errors before sending it to us
- [x] Please make sure that the UI is simple yet eye-catching
- [ ] Please feel free to include more features other than the few mentioned above.
- [x] You may notice there is no endpoint in the TVMaze API that cleanly returns shows by genre. However, the "Show index" endpoint should contain the data you need
