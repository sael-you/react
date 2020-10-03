First assignment for the "React - The Complete Guide" course
In this assignment We explore both the basics of component creation, the state and props, as well as event handling.

So what does this do?
This application presents to the user a series of card like "UserOutputs" with a salutation to the given username (props.username).

It also gives the user a "UserInput", the user input allows the user to change the name being displayed in the first card.

How can I see this in action?
Just run "npm start" from the project's root folder. A browser window with the application should pop up shortly after.

What was the assignment anyway?
The assignment was defined by our instructor as follows:

0.Create TWO new components: UserInput and UserOutput
1.UserInput should hold an input element, UserOutput two paragraphs
2.Output multiple UserOutput components in the App component (any paragraph texts of your choice)
3.Pass a username (of your choice) to UserOutput via props and display it there
4.Add state to the App component (=> the username) and pass the username to the UserOutput component
5.Add a method to manipulate the state (=> an event-handler method)
6.Pass the event-handler method reference to the UserInput component and bind it to the input-change event
7.Ensure that the new input entered by the user overwrites the old username passed to UserOutput
8.Add two-way-binding to your input (in UserInput) to also display the starting username
9.Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets