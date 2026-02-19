# Form in html
  - <form></form>


# Form Action Attribute
- <form action="/action.php">  in js we will learn  in detail


# Form element
  # Input Element  <input type="">
  - there are multiple type of input that can be created using Type attribute
  - input is used to take input from user


  # type atrribute  (Input Type Mdn)
  -text
  -password
  -number
  -time
  -color
  -email


# Form Element
  
  # placeHolder attribute 
  - phle se box me kuch likha hota hai input lete tym

  # label tag    not (Level)
  - use  to join text with box
  - when someone click on text box ke nadar curson dekhne lgega

    # Classical Approach for Label  ( using for and id )
    -  <label for="number">Number : </label>
         <input type="number" placeholder="Eneter number" id="number">

  # button in Form ( outside button alg behave krega)
  - submit booton then when we submit --> we going to know where these data will go --> data go in action attribute
  - Default behaviour of Button is to submit all data of form 
  
  # button type <button type="">
   -Submit  -> Submit the form data to action attribute
   -button  -> behave as button dont do anything
   -reset   --> it will reset all form data


  # Submit Form using (Input Button)
   - Not Best method to submit form (Best method is using Submit button)
   - <input type="submit"> --> no need of value --> it will submit the form
   - <input type="Button" value="click me">

  # Name Attribute in html
  <form action="https://www.youtube.com/results">
        <label for="Text1">Search from Youtube</label>
        <input type="text"
        placeholder="Enter Youtube Search"
        id="Text1"
        name="search_query">  ---------> Name Attribute'

        <button>Search</button><br>
        <button type="reset"> Reset</button>  
        
-------> Output when submitted
        https://www.youtube.com/results?search_query=what i search in input
      </form>
  
   # Checkbox - input element
     - To create CheckBox give Input (type="checkbox")
       <input type="checkbox"  id="checkboxid" name="age" checked> -> bydeault checked
     - without checked --> no default checked

     - When we submit by checked mark-> the Action will give ( on) message
     - action?age=on
     - deafult is nothing
   

   # Radio button
     - to select only one item  ( name sbka same hota tbhi posiible hota)
     - does not allow more than one item to slect or checked

     <input type="radio" name="fruits" id="Apple" value="Apple">
      <label for="Apple"> Apple</label>

      - name --> sbka same hoga  (ek name ka ek he option checked hoga )
      - id --> for 
      - value --> when i submit that time i want to know whome user have checked
      -
















