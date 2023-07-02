# Flatiron_Movie_Theater
Flatiron Movie Theater is open for business! You will be building out an application, Flatdango, that allows a user to purchase movie tickets from the theater.

# Requirements
For this project, you must:
- Have a well-written README file.
- Fetch data from a local server running JSON DB server.
- Make sure to commit your work to save your progress before attempting the bonus deliverables!

# Project Setup & Pre-requisite Data
In your project directory, create a db.json file and use this datalink for an external site. for your server DB.
Run this command to get the backend started: json-server --watch db.json
Test your server.

<strong>Project Setup</strong><br>

Once you have the plan in place for the application you want to build take the following steps:

- Create a new project folder.
- Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
- Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
- Please make sure you regularly commit to the repository.

# Project Guidelines
Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables
As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:

   
   GET /films/1

   Example Response:
   {
     "id": "1",
     "title": "The Giant Gila Monster",
     "runtime": "108",
     "capacity": 30,
     "showtime": "04:00 PM",
     "tickets_sold": 27,
     "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
   }
 
2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the class `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:


   GET /films

   Example response:
   [
      {
        "id": "1",
        "title": "The Giant Gila Monster",
        "runtime": "108",
        "capacity": 30,
        "showtime": "04:00 PM",
        "tickets_sold": 27,
        "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
        "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
      },
      {
        "id": "2",
        "title": "Manos: The Hands Of Fate",
        "runtime": "118",
        "capacity": 50,
        "showtime": "06:45 PM",
        "tickets_sold": 44,
        "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
        "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
      }
   ]



3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the front end. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**.

Bonus Deliverables
These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

1. Click on a movie in the menu to replace the currently displayed movie's
   details with the new movie's details. Note that you may have to make an
   additional GET request to access the movie's details.

2. When a movie is sold out (when there are no available tickets remaining),
   indicate that the movie is sold out by changing the button text to "Sold
   Out". Also, update the film item in the `ul#films` menu by adding a class of
   `sold-out` to the film. For reference, here's what the contents of the
   `ul#films` element should look like with a sold-out film:

   ```HTML
   <li class="film item">(Title of film)</li>
   <li class="sold-out film item">(Title of a sold-out film)</li>
   <li class="film item">(Title of film)</div>
   ```
Extra Bonus
These extra bonus deliverables involve using `fetch` to update data on the
`json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are
meant for an extra, extra challenge and won't affect your grade. **Make sure to
commit your work to save your progress before attempting the extra bonus
deliverables!**

1. When a ticket is purchased, persist the updated number of `tickets_sold` on
   the server. Remember, the frontend shows the number of available tickets
   based on the `tickets_sold` and the `capacity`, so only the `tickets_sold`
   should be updated on the backend when a ticket is purchased. You will need to
   make a request that follows this structure:

   ```txt
   PATCH /films/:id

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "tickets_sold": 28
   }
   ----
   Example Response:
   {
      "id": "1",
      "title": "The Giant Gila Monster",
      "runtime": "108",
      "capacity": 30,
      "showtime": "04:00 PM",
      "tickets_sold": 28,
      "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
      "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
   }
   ```
2. Delete a film from the server. Add a delete button next to each film in the
   `ul#films` menu. When the button is clicked, remove the film from the list
   and also delete the film on the server:

   ```txt
   DELETE /films/:id

   Example Response:
   {}


# Technologies Used
The Student Grade Generator, Speed Detector, and Net Salary Calculator development used the following languages and tools:

- VS Code
- Git
- JavaScript
- Contact
- Slack Profile - Anita Mutemi.
- Linkeldn - Anita Mutemi.

# Author & License
Copyright (c) [2023] [Anita Mutemi]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
