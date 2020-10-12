# UsersTask

a user management module

I create two components

# UsersTable: thats contains:

1- Button for add new user<br/>
2- table : list users data (avatar - first name - last name - email)<br/>
3- pagination : [I add it but it didn't work successfully ]<br/>

# CreateUser: contains

Form of required fields:
1-firstName<br/>
2-Last Name<br/>
3- Job<br/>
4- Avatar uploading ( accept only images)<br/>
5- email<br/>
6- password <br/>
7- confirm password<br/>
8- Address<br/>
9- Street Address<br/>
10- Google map ( location picker) [didn't work successfuly as it need valid google map key]<br/>

# I use yup library for validate email , password , confirm password fields and to make all feilds mandatory

# Library Used :

yup : for validation<br/>
formik : user form<br/>
react-location-picker : for pick location from google map<br/>
react-paginate : for pagination<br/>
axios: to read httpServices<br/>

and I use react-redux and react-bootstrap
