# Jamie Cox: Hennge application challenge report

## Task 1
### Initial thoughts
I attempted to match the provided example as closely as possible using nothing but javascript, CSS and HTML. This worked for the first few objects without issue, however I believe  some of the color choices ended up slightly different .<br>

### Task 1 - HTML/CSS
I started by creating the calender range check, first I checked online for a existing solution given the common nature of such a input. I found a few free to use sources however all of them leveraged JQuery so I ended up positing two different input objects to match the appearence of the example as closely as possible. <br>

### Task 1 - Javascript
I opted to create my own example data of varyings lengths for each value. I decided the best data structure for loading into a table was an array of objects. Each email subject was given a unique ID for use with a seccond array storing each emails messages. This was preperation for Task 2. <br>

For the search function itself I decided to load both date inputs and compare them with the date value of each object within the email array.

### Task 1 - Mobile View
My first error was forgetting to design for mobile phones/smaller screens first. This resulted in some initial data visability issues that had to be resolved by manual relative movement of most objects. <br>

I eventually managed to match the example provided by changing the view from table to grid and formatting each element in CSS via nthChild(x). If I were to repeat this task I would definitely look at designing it with mobile initially in mind. 

### Task 2 
I had already set the groundwork for this in task one so I was able to insert the content of the email in the cell next to date. I wanted it to appear beneath the header row however this broke a lot of formatting and looked visually cluttered. To compromise I added a border to contents of the email to make it easier to differentiate.

### Task 3
This was the most difficult of the three as at first I could not think of anything to improve given the example was similar to existing mail sites like Gmail. After re-reading the brief I thought about whats import for auditing data as well as various examples which the program could be used. This helped me see areas for improvement as well as potential flaws when used in context of the brief.
