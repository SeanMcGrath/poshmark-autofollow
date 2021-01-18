# poshmark-autofollow

## What?

Tired of endlessly clicking and tapping to follow other Poshmark users? Use this handy script to automate the process of adding followers. Specifically, you can use this to go to someone else's list of followers and follow every person who appears on that page.

## How?

1. Make a bookmark in Chrome which has a URL like `javascript:contents-of-minified.js` - that is, `javascript:`, and then paste in the contents of the `minified.js` file after the colon.
2. Navigate to a user's "Followers" or "Following" page on poshmark - ideally someone who is following a lot of people you don't follow.
3. Click your new bookmark. The browser should immediately scroll to the bottom and follow the first batch of users. It will continue to scroll down and follow people on a loop.
4. Periodically check to see if the `Are you a human?` popup has appeared, and click it if it has.
5. If the browser seizes up or you run out of people to follow, just refresh or go to a new user page.
