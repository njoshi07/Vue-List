** VUE LIFE CYCLE HOOKS **

1.) Mounted()  - use WHILE NOT FETCHING DATA FROM API but form LOCAL

2.) Created()  -  use WHILE FETCHING DATA FROM API

3.) Computed() -  use WHILE UPDATING DATA IN DATA OBJECT


**  NOTES **
  1.)  While fetching data from API using Vuex. There is no need for Data(){} property in COMPONENT TO GATHER DATA FROM RESPONSE.
        
        use CREATED() to dispatch action and COMPUTED() to gets data from VUEX STORE state property and display it on template. NO NEED FROR DATA(){} PROPERTY ON COMPONENT TO CATCH DATA.