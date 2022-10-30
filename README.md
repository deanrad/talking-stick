# Talking Stick

An 𝗥𝘅𝑓𝑥 example application designed to illustrate the benefits of modeling an application as a collection of events and listeners in a framework-free way.

# Implementation Plan

## Phase One - Build 3 Agents in the Browser, Connected By a Bus

### Model the Server in the Browser
- Create a client-side Bus
- Design the state model (`{talking: id, queued: id}`)
- Create the **Moderator** service to hold the state
- Allow the **Moderator** to handle updates, rejecting invalid ones like stealing the talking stick

### Model the Talker

## Phase Two - Extract an Agent