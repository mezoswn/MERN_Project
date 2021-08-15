# MERN_Project


<h2>Adam Dalbah, Ahmed Sufian, Hani Kiwan and Moath Sweidan</h2>
<h3>Axsos Academy</h3>
<h3>Palestine</h3>
![logo](https://user-images.githubusercontent.com/81511441/129464516-e65f318f-8368-4289-8f57-cfe1abf9ba6b.png)

<h5>About:</h5>
Being healthy means not only away from diseases but it also means the complete feeling of physical, mental and social well being. Maintaining health and fitness is not a simple task however; not so tough too. We need to involve ourselves into some daily physical activities together with the healthy, fresh and timely food which can only provide us long-term health and fitness benefits. We burn extra and unnecessary calories to our body through physical exercises. Daily physical exercises keep kids so active and put them on a path of better physical and mental health.

Physical activities along with the proper nutrition are really very beneficial to the people of all ages from any background and abilities. Being involved in the daily physical exercises is a good strategy to defeat obesity.

The idea  of our project is to create a website for athletes and for the persons who want to change their lifestyle, the project is called Golden Gym and the code will be implemented in MERN code using mongooseDB for creating the DB.

The website offers many programs as per the requirements of the customer data and body situation to create the correct and suitable program for him.
The website contains 5 pages +1 admin page, (Home page, login & registration, lose weight program, gain weight program & contact us page).

The customer will have the ability to register with the gym and he can be able to choose a designed rejeim plan or to request a custom plan depending on his requirements.

The website will be fully responsive and have the required authentications and validations.
The routes and the pages functions for the described project will be as bellow:
  
<h6>Home Page (GoldenGym):</h6>  
This is the first page will appear to our site visitors, which will contain three parts: 
The navbar: contains our name, about us & registration / log in. 
Text field with the welcome letter. 
The footer: contains the contact details and other useful links such as FAQ. 

<h6>Login & Registration (GoldenGym/Login or Register): </h6> 
This page will enable us to login to the user account if he is already registered in the site before or to register if he is a new user.
It will contain filling for some of the personal information for the user such as first & last name, email & Phone number. 

<h6>Welcome (GoldenGym/user/id)): </h6>
This page to preview the user information and to show all the functionality as a user, fill up his weight and height so the gym will design a plan for him and the user could choose the diet plan. 

<h6>The Admin Page (Coach Page) (GoldenGym/Admin) :  </h6>
This is the admin page, which will allow us to add the diet plans which will be offered to the users and update the status for each user/plan or delete them.

<h6>About Us(GoldenGym/user/id/services)  - OPTIONAL: </h6>
The user will go through this page to discover us and know our services and some information about the project creators.

<h6>Plans Page (GoldenGym/user/id/plans): </h6>
Through this page the user will have the privilege to choose the required designed plan for him, so he can proceed with the program and start the process. There will be two pages same as this one, each related to the designed program and as per the user goal.

<h6>Contact us Page (GoldenGym/contactus): </h6>
Through this page we can ask GoldenGym to contact and reach the user, so we can collect the required information or to give any kind of support to the user and the customer.

<h6>The Project Requirements:</h6> 

<h6>Home Page (localhost/3000): </h6>
This page is responsive. 
Includes NavBar which have Home, Programmes, Contact us & Login/Registration or Logout.
Login: link which route for login page. (localhost/login) 
Register: link which route for register page. (localhost/register) 
Welcome text & summary. (Paragraph introduction will be about the project and the mechanism for rejeim plans services and information). 
Footer contains (contacts). (Link to route us for the social account of the company (not active)). 

<h6>Login Page: (localhost/login):</h6> 
This page is responsive.
Validation for email to make sure the user is registered & email should be unique. 
Validation for password as correct password. 

<h6>Register Page (user): (localhost/Register):</h6>
This page is responsive.
This basic register page contains a text field for the first name which must have only letters without numbers or special characters and should be at least 3 characters. 
text field for last name which must have only letters without number or special characters and should be at least 3 characters. 
Email field: must be regex and unique. 
Password field: hashed & encrypted and at least 8 characters. 
Confirm password field: match the password field. 
Register button: for registration and will redirect the user to the welcome page (localhost/user/id)). 
Home link to redirect the user to the home page (localhost/home). 
Login link to redirect the user to the login page if the user already registered (localhost/login) 

<h6>Welcome Page (user): (localhost/user/id): </h6>
This page is responsive.
The Navbar will always depend on the logged user.
This page will be redirected after user registration or logging in. 
Information field has the basic information about the project.  
Image field.
Build a plan section which requires the user to provide his weight, height with the required goals (lose weight or gain weight), age & his condition if he have any special conditions  with a two buttons, the first button is for build a custom plan by the coach which will redirect the user to the thank you page(localhost/user/id/response), and the other button for choosing a ready plan which will redirect the user to the plans page (localhost/user/id/plans).

<h6>Plans Page (user): (localhost/user/id/plans): </h6>
This page is responsive.
The Navbar will always depend on the logged user.
This page contains four designed programmes which will be shown as images. The user could choose only one of them, under each program we will have a button to choose.
After the user choose his desired program he will be redirected to 
the thank you page(localhost/user/id/response).

<h6>The Coach Page: (localhost/admin):</h6>
This page is responsive.
The Navbar will be displayed.
This page will display a table for showing the users information and their desired plans with four buttons (add plan, update plan, delete plan & delete user).
Add button plan will allow the coach to upload the plan images which will be shown in the plans page(localhost/user/id/plans).
Delete plan button to delete any of the existing plans displayed.
Delete user button to delete the user after achieving the required goal or canceling the membership.
Log out button to logout and redirect the user to the home page (localhost/home). 

<h6>Contact us Page: (localhost/contactus)</h6>
This page is responsive.
This page will be redirected when the user needs support or any concern. 
This page contains the name text field which must have only letters without number or special characters and should be at least 3 characters. 
Email field: must be regex. 
Phone field: must be numbers only and 10 digits only. 
Project map location.
Chat live box using the socket i.o to allow the user to live chat with the coach.

<h6>Thank You Page: (localhost/Response):</h6>
This page is responsive.
This page will be displaying a thank you letter and that we will contact the user soon. 
Home button to redirect the user to the home page (localhost/home). 
Log out button to logout and redirect the user to the home page (localhost/home). 

![Abstract Chapter_001](https://user-images.githubusercontent.com/81511441/129464997-8b0e0512-0404-4750-9315-1768d258374d.png)
