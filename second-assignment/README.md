<h1>Second assignment for the "React - The Complete Guide" course</h1>
<p>In this assignment We explore both the basics of conditional rendering as well as rendering of lists in React</p>
<h2>So what does this do?</h2>
<p>This application presents to the user a text input into which the user can type.</p>
<p>Next, this application displays a simple card with the text "Text long enough" if the input is longer than 3 characters, and "Text too short" if the input is shorter.</p>
<h2>How can I see this in action?</h2>
<p>Just run</p>
<h3><code>npm start</code></h3>
<p>from the project's root folder. A browser window with the application should pop up shortly after.</p>
<h2>What was the assignment anyway?</h2>
<p>The assignment was defined by our instructor as follows:</p>
<ol>
<li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
<li>Create a new component (=&gt; ValidationComponent) which receives the text length as a prop</li>
<li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
<li>Create another component (=&gt; CharComponent) and style it as an inline box (=&gt; display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
<li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
<li>When you click a CharComponent, it should be removed from the entered text.</li>
</ol>
