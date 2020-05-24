# Mail Archiver Improvements

## Calender range selection
<span style ="color:red"> *Issue* </span> <br>
Currently you have to click on two different date inputs to search for archives. Users are used to selecting the range from within a single input.<br>

<span style = "color:green"> **Solution** </span><br>
* Create a function that runs upon clicking the calender icon.
* Use existing source code like [Date Range Picker](https://www.daterangepicker.com/#license)<br>

<span style = "color:lightblue"> *Additional Functionality* </span><br>
Include a few preset searches as options next to the search bar;
* Yesterday
* Last Week
* Last Month
* Last Year

This could be expanded to allow to save frequent ranges as it's own quick search button like the above. 

## Mail Archive Search
<span style = "color:red"> *Issue* </span> <br>
For the purpose of auditing emails it is possible there will be tens of thousands of emails to search through.<br>

<span style="color:green"> **Solution** </span><br>
* Add a option to search by sender this allows the user auditing to quickly verify an employees emails while also allowing them to choose to focus on suspects directly. **This could be done via a multi select dropdown menu**

* Add a option to search for any subject/contents containing a string. For example a user could search for "Project Alpha Details" to quickly check where information about it has been sent. 

## Collapsed Emails
<span style="color:red"> *Issue* </span><br>
When multiple emails from the same sender and recipient are loaded they are collapsed into the first email and a icon indicating +1 or more emails are collapsed is appended. For a personal email box this a common and useful feature, however for the purpose of auditing anything that obscures content is ill-advised. The user should not have to scope in to see all of the emails.

<span style="color:green"> Solution </span><br>
Remove the collapsing element and related icons.

## Other
The option to flag emails as items of interest, similar to the important flag on domestic emails could make it easier for users to spot these emails when scrolling through. 



