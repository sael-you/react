<h1>First assignment for the "React - The Complete Guide" course</h1>
In this assignment We explore both the basics of conditional rendering as well as rendering of flexible lists in React

<h1>So what does this do?<h1>
This application presents to the user a text input into which the user can type.

Next, this application displays a simple card with the text "Text long enough" if the input is longer than 3 characters, and "Text too short" if the input is shorter.

when click on card's letter it removes it.

<h1>How can I see this in action?</h1>
Just run

npm start
from the project's root folder. A browser window with the application should pop up shortly after.

<h1>What was the assignment anyway?</h1>
The assignment was defined by our instructor as follows:
<ol>
<li>
Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
</li>
Create a new component (=> ValidationComponent) which receives the text length as a prop
Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
<li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
</li>
<li>
Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
</li>
<li>
When you click a CharComponent, it should be removed from the entered text.
About
</li>
</ol>