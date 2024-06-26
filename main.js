import Clerk from "@clerk/clerk-js";
import { deDE } from "@clerk/localizations";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to .env file");
}

const clerk = new Clerk(clerkPubKey);
await clerk.load();

if (clerk.user) {
  document.getElementById("app").innerHTML = `
    <div id="user-button"></div>
  `;

  const userButtonDiv =
    document.getElementById("user-button");

  clerk.mountUserButton(userButtonDiv);
} else {
  document.getElementById("app").innerHTML = `
    <div id="sign-in"></div>
  `;

  const signInDiv =
    document.getElementById("sign-in");

  clerk.mountSignIn(signInDiv);
}

document.getElementById('i18n-load').addEventListener('click', () => {
  clerk.load({localization: deDE});
})

document.getElementById('i18n-update-props').addEventListener('click', () => {
  clerk.__unstable__updateProps({localization: deDE});
})

document.getElementById('i18n-load-remount').addEventListener('click', () => {
  const signInDiv =
      document.getElementById("sign-in");
  clerk.unmountSignIn(signInDiv)
  clerk.load({localization: deDE}).then(() =>
      setTimeout(() => clerk.mountSignIn(signInDiv), 1000));
})

document.getElementById('i18n-update-props-remount').addEventListener('click', () => {
  const signInDiv =
      document.getElementById("sign-in");
  clerk.unmountSignIn(signInDiv)
  clerk.__unstable__updateProps({localization: deDE}).then(() =>
      setTimeout(() => clerk.mountSignIn(signInDiv), 1000));
})
