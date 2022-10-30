# Talking Stick

An 𝗥𝘅𝑓𝑥 example application designed to illustrate the benefits of modeling an application as a collection of events and listeners in a framework-free way.

# Implementation Plan

## Part 1 - Build the Moderator and Talkers in the Same Browser App

### Model the Server (in the Browser)

Goal: Can send requests to a client-side version of the **Moderator** and see state changes, in the console.

- Create a client-side Bus
- Design the state model (`{talking: id, queued: id}`)
- Create the **Moderator** service to hold the state
- Allow the **Moderator** to handle updates, rejecting invalid ones like stealing the talking stick


### Model the Talker

Goal: A **Talker** component can visualize and change the **Moderator** state

- The talker knows and gets its id.
- The talker subscribes to the moderator state, displaying it.
- The talker makes requests of the moderator.

## Part 2 - Extract the Moderator to the server

Goal: The **Moderator** lives on the server, connected to clients by Web Sockets.

- Extract the **Moderator** to live on a different bus in the browser
- Extract the **Moderator** to the server
- Update **Talker** connections to send WS events to the server **Moderator**
- Update the server **Moderator** to turn WS events into its requests
- Update the server **Moderator** to relay state changes to each **Talker**