# Chat app with React and a Sketch-based design system + design version control
* TLDR: *Build a chat app with real APIs*

### Getting started! 👋  
There's a few things you need to get this to work.
First and foremost, the github link to the private repo for Dash Chat is [here](https://github.com/iggyigner/dash-chat).

### 1. Installing minimum deps
Make sure you have `node` installed, with a version greater than `7.0.0`.

Once you have a good `node` installed, run `npm install` in this repo to get your dependencies.

### 2. Serving the app
By default, you can run `npm start` to run Dash Chat, serving the files from `/public`.

### 3. Running the api server
I used the same api server you provided. Just run `npm run api-server` to start it. Read the [spec](./spec/api-endpoints.md) for more details on the api.

### 4. Design spec
I did my best to follow the specs found in the `./spec` directory. Checkout the [design specs here](./spec/designs/detailed-design-specs.md) to understand what I was required to build.

### 5. Design System
I did my best to run through a quick design rev, and build out an automated design system using Sketch and Craft. I created a Github repo (using Kactus) to version control the design [here](https://github.com/iggyigner/dash-chat-design/tree/master/dash-chat-design-kactus). Prototypes and assets can be accessed and shared, as well [here](https://invis.io/8YND4AW5WB3). I've included my Sketch Library (in case you want to import it into Sketch using Craft) in the zipped version of the project I emailed back to recruiting. I didn't quite have enough time to submodule an LFS-powered repo of exported assets for easy use inside the Dash Chat project, but am happy to talk more about this process if you're interested.

## Extra notes
I had some fun plans for using images and svg animations (wanted to animate the background), but didn't quite have time to get to them. There's definitely some optimizations that could be made, too. Would love to tell you about them.

Thanks so much for the opportunity to hop into this! Hopefully we get to high five in the future.
