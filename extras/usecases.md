# Use cases

## Use Case 1: A user creates a new workout routine.

### Precondition: 

The user is in the home page where the create workout button is available.

### Main scenario:

1. The user presses button “Create a workout”.
2. The system presents a way to enter the workout name as an input field.
3. The user enters the workout name in an input field.
4. The user presses “Create workout button”.
5. The system validates the input.
6. Successful, user is redirected to home page.

### Alternate scenario
4b. The user regrets their desicion and presses "Back To Home button"
  - The user is redirected to the home page

6b. If not successful, user is redirected to an error page.

## Use Case 2: A user deletes an existing workout

### Precondition: 

- There is an existing workout in place
- The user is in the corresponding workout page where the delete workout button is available.

### Main scenario:

1. The user presses button “Delete a workout”.
2. The system presents a confirmation page to delete the workout.
3. The user presses confirm deletion button.
4. If successful, user is redirected the view existing workouts page.

### Alternate scenario

3b. The user regrets their desicion and presses "Cancel" button
- The user is redirected back to the corresponding workout page.

## Use Case 3: A user adds exercises to their workout routine.

### Precondition: 

- There is an existing workout that the user can add an exercise to.
- The user is in the home page where the view all workouts button is available

### Main scenario:

1. The user presses button "View all workouts".
2. The system presents a list of all the users workouts. 
3. The user selects the corresponding workout they want to add an exercise to.
4. The system presents buttons of options that the user can select, amongst these are "Edit Workout" to change a workout.
5. The user selects "Edit Workout".
6. The system present a button "Add Exercise".
7. The user selects "Add Exercise"
8. The system presents different inputs options for naming the exercise, selecting set type and also the amount of reps and weights for the exercise.
9. The user fills in the inputs.
10. The user presses the "Add Set" button to attach the set to the current exercise.
11. When user is done user presses "Add Exercise"
12. The system validates the inputs.
13. If succesful, user redirected back to the edit workout page.
14. If unsuccesful, nothing happens.

### Alternate scenario:
11b. User regrets their desicion and decides to return back.
- The user is redirected to the edit workout page.

## Use case 4: A user deletes an existing exercise

### Precondition: 

- There is an existing exercise for a workout. 
- The user is in the corresponding workout page where the delete exercise button is available.

### Main scenario: 

1. The user presses button "Remove Exercise” button.
2. The system presents a confirmation page to delete the exercise.
3. The user presses confirm deletion button.
4. If successful, user is redirected back to the edit workout page, the exericse is deleted.

### Alternate scenario:
4b. The user regrets their desicion and chooses to cancel the deletion
- The user is redirected back to the edit workouts page. nothing is deleted

## Use case 5: The user wants to start a workout

### Precondition: 

- There is an existing workout that the user can start. 
- The user is in the home page where start a workout button is available.

### Main scenario:

1. The user presses "Start a workout"
2. The system presents the users existing workouts.
3. The user selectes the workout they want to start.
4. The system presents the user an active timer and all the workouts information, this includes: exercices and set informations.

## Use case 5: The user wants to test the rest timer.

### Precondition: 

- The user has an active workout where the rest timer is available.

### Main scenario:

1. The user presses "start" on the rest timer
2. The rest timer starts ticking down
3. The system presents the remaining time left with each tick.

### Alternate scenario:

1b. The user pauses the active rest timer.
2b. The rest timer pauses
3b. The system presents the remaining time left

1c. The user presses the "Resume" button on the paused timer
2c. The rest timer starts ticking down from the remaining time left
3c. The system presents the remaining time left with each tick.

1d. The user wants to reset the timer from start.
2d. The remaining time left on the rest timer reverts back to the starting time. 

1e. The user lets the remaining time expire (hit 00.00)
2e. The system present a message of the time having expired
3e. The system resets the timer back to the starting time.





