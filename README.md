# UsersTask

a user management module

I create two components

# UsersTable: thats contains:

1- Button for add new user
2- table : list users data (avatar - first name - last name - email)
3- pagination : [I add it but it didn't work successfully ]

# CreateUser: contains

Form of required fields:
1-firstName
2-Last Name
3- Job
4- Avatar uploading ( accept only images)
5- email
6- password  
7- confirm password
8- Address
9- Street Address
10- Google map ( location picker) [didn't work successfuly as it need valid google map key]

# I use yup library for validate email , password , confirm password fields and to make all feilds mandatory

# Library Used :

yup : for validation
formik : user form
react-location-picker : for pick location from google map
react-paginate : for pagination
axios: to read httpServices

and I use react-redux and react-bootstrap
