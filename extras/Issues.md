Requirment specification

User groups

Consumers: 
Wants to be able to manage their workouts in a simple way.

Functional Requirements: 

FR1: The app shall offer a way to create and manage workout routines.
	FR1.1: Users should be able to create a workout.
	FR1.2: Users should be able to delete a workout.
	FR1.3: Users should be able to view a workout.
	FR1.4: Users should be able to view all their existing workouts.
	FR1.5: Users should be able to edit a workout.
FR2: The app shall offer a way to manage their exercise choices.
	FR2.1: Users should be able to create an exercise within a workout.
	FR2.2: Users should be able to delete an exercise within a workout.
FR3: The user should be able to add different types of sets to an exercise.
	FR3.1: Users should be able to add warm up sets to an exercise.
	FR3.2: Users should be able to add workout sets to an exercise.
	FR3.3: Users should be able to choose the amount of reps a set would include.
	FR3.4: Users should be able to choose the amount of weight a set would include.
FR4: The app should offer a way to start an existing workout. 
	FR4.1: The user should be able to choose from a workout list of what workout to start.
	FR4.2: The user should be able to view the active workout they are currently using.
FR4.3: The user should be able to track how long they have been working out for.
FR4.4: The user should be able to track their resting periods. 

Non-functional Requirements:
NFR1: Code Quality
NFR1.1: The application code shall adhere to clean code principles.
NFR1.2: The application shall be developed using object-oriented programming principles to promote reusability and modularity.
NFR2: The user should be able to access the code over the internet.

Use cases:
Use Case 1: A user creates a new workout routine.
Actors: User
Precondition: The user is in the home page where the create workout button is available.
Mainflow:
The user presses button “Create a workout”
The system presents a way to enter the workout name as an input field.
The user enters the workout name in an input field
The user presses “Create workout button”
The system validates the input.
If successful, user is redirected to home page
If not successful, user is redirected to an error page
Postconditions:
A new workout routine has been created and is visible in the user's list of workouts.


Use Case 3: A user adds exercises to their workout routine.
Use Case 4: A user starts a workout and records their performance.
Use Case 5: A user reviews their past workouts and progress over time.
Use Case 6: A user edits or deletes an existing workout.
Use Case 7: A user shares their workout routine with a friend.


Vision

Introduction

As fitness and going to the gym is getting more popular day by day, many find it challenging to keep track of their workout routines. Solutions for this are often having to write their workouts by hand on a sheet of paper or maybe use the notes app to manually write down their sessions. The Gym Apps vision is to address this issue by providing a user-friendly platform that helps gym enthusiasts to create, manage, and track workouts with ease. 

User Groups

Consumers:
Regular Gym-Goers: People who visit the gym frequently and require a reliable way to manage varying workout routines.

Fitness Enthusiasts: Anyone who enjoys any physical activity and wants to manage their training sessions.

Developers:
Responsible for the development and maintenance of the application.

Base Requirements
BR 1: The app shall offer a user-friendly interface for the creation and management of workout routines.
BR 1.1: Users should be able to set up and start tracking a workout with minimal and obvious navigation selections.
BR2: The app shall offer a user friendly interface for viewing their workouts and its information.
B3: The app shall offer a user friendly interface to start a workout and view its components.

