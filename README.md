## Issue reproduction steps

- Start the application using `npm run dev`
- The application starts and mounts the Clerk SignIn component in English
- By clicking on any of the provided buttons next to the component, the component's language should change to German
  - Calling either `Clerk.load({ deDE })` or `Clerk.__unstable__updateProps({ deDE })` is not working
  - Unmounting the component, changing the language then mounting the component also doesn't work
