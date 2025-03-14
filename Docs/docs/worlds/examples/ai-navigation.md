---
description: "NPCs that follow you."
sidebar_custom_props:
    customIcon: 🗺️
---
# AI Navigation Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HowToImportExample from '/docs/worlds/examples/_how-to-import.mdx';

## Example World

![example world](/img/worlds/ai-navigation-world.jpg)

Udon can use [AI Navigation](/worlds/udon/ai-navigation). This example shows you how it can be used for pathfinding and creating NPC characters that walk around in your world.

Visit the [AI Navigation Example World](https://vrchat.com/home/world/wrld_b7b99484-d92f-403d-ac10-4da7e5a9ce14) to try it for yourself!

## Using the Example

This scene has a collection of NPCs which are trying to get from the red block to the green one. You can move the blue blocks to form a pathway for them. Unity's AI Navigation automatically recalculates the pathing of the NPCs whenever you drop the blocks.

Open the scene in the Unity Editor to test the basic functionality. It should work roughly the same as in VRChat. When you enter play mode, the NPCs will attempt to reach the green block. You can move the blue blocks to help the AI to reach their goal. You can press the "Reset" button to try again.

<HowToImportExample/>

## Technical Breakdown

Let's explore the Udon logic, scene structure and networking that makes this scene work.

### Logic

When the scene initializes, each NPC has the "NPC Finish" block set as their `destination`. They will try to reach it, but fail because there is no direct connection to get there. When each NPCStep is dropped, it will call `NavMeshSurface.BuildNavMesh` to rebuild the main surface. If this results in a better path to the target, each Agent will hop aboard to continue their journey. Every 0.5 seconds, the progress is recalculated by comparing the distance between the first NPC and the target block with the initial distance, which was saved at the start of the scene. If the distance is less than 0.15 units during a check, then particles are set off, and the progress checks are stopped. You can then press the "Reset" button to start it all over.

### Scene Overview

The scene's hierarchy consists of the following:

- "World" contains the scene descriptor, floor, lighting, etc.
- "Course" defines where NPCs can move.
  - The [NavMeshSurface](https://docs.unity3d.com/Packages/com.unity.ai.navigation@1.1/manual/NavMeshSurface.html) component allows Unity to rebuild the navigation logic at runtime.
  - The CourseManager UdonBehaviour component handles the progress bar and resetting it.
  - The "NPC Start" and "NPC Finish" child GameObjects define the NPC's starting and target positions.
  - The three "NPC Step" child GameObjects act as surfaces for the NPCs.
    - Each NPC Step has a NavMeshModifier component, which attempts to add its surface to the main NavMeshSurface.
    - It also has a VRCPickup component and an UdonBehaviour, which locks its rotation to stay flat when carried and applies the logic to rebuild the main navigation surface.
- "NPCs" has four child "NPC" GameObjects, which are Capsules with a [NavMeshAgent](https://docs.unity3d.com/ScriptReference/AI.NavMeshAgent.html) and UdonBehaviour.
  - The NavMeshAgent provides the basic navigation and movement logic, while the UdonBehaviour has the logic we want for the scene.
- "Canvas" contains the process indicator and reset button.

### Networking
Everything that happens should be synced for all users in the instance, through careful choices between which variables and logic to sync and which to run locally.

The Course has a single synced variable - a `progress` float which is checked on the owner of the Course, and synced to all other users whenever it is updated. The other users listen for changes of this variable and update their progress bar when it changes. The Course also uses a Networked Event to call the `Win` event for everyone when `progress` is greater than `successThreshold`, which is set to `0.8` to account for other NPCs getting in the way of the one whose progress we measure.

Each NPC is moved by the `NavMeshAgent` on its Owner's device, and the `VRCObjectSync` component updates its position automatically for everyone else. Only the Owner of the NavMesh continuously rebuilds the actual NavMesh, since the synced NPCs don't need it.

---

## Making Your Own Changes

After making a copy of the scene, try some of these ideas to evolve the scene further, and explore the power of the AI Navigation package:

* Change the course, moving the start and end points further apart.
* Reduce the number of available blocks from 3 to 2.
* Make the target point move over time.
* Give each person in the world their own NPC and NavMesh to turn it into a race!