# Exercises

## Exercise 1:

1. Given a variable `password` that contains a string of a user's password.
2. Write an if-else statement to check if the user's password is greater than or equal to 8 characters.
3. If the password is greater than or equal to 8 characters, `console.log("You're account has been made")`; otherwise, `console.log("Password must be 8 characters or more")`.
4. **BONUS**: Check if the password is more than 8 characters AND does not end with the letter "e".
5. **BONUS 2**: Check for either a capital "E" or lowercase "e".

---

## Exercise 2:

1. Given the array of student names:
    ```js
    ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul"]
    ```

2. Write a function to add each name into 1 string separated by a space.

    Example:
    ```js
    ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul"] 
    => "Aron Martine Kathrin Kai Maryam Sumayya Marcel Paul"
    ```

3. **BONUS**: If the name in the array is `"Kathrin"`, add `"Kathrin Zirbes"` to the new string.

---

## Exercise 3:

Given the array `numbersArr`:

```js
let numbersArr = [700, 17, 85, 78, 15, 37, 37, 14, 83, 34];
```
Write a function that takes an array of numbers as an argument and returns the index of the biggest number.


## Exercise 4:

1. Create an `actor2` object with keys for: `name`, `age`, and `movies`.
2. If the actor has a `movies` property in the object, then `console.log("Actor has been in some movies")`.

---

## Exercise 5:

Given the following HTML:

```html
<ol>
    <li class="students">Kai</li>
    <li class="students">Paul</li>
    <li class="students">Marcel</li>
    <li class="students">Martine</li>
    <li class="students">Sumayya</li>
    <li class="students">Aron</li>
    <li class="students">Kathrin</li>
    <li class="students">Maryam</li>
</ol>
```


Get all the elements with the class students and edit the HTML to have each name include " is in Java course".


Output should look like the following:


```html
<ol>
    <li class="students">Kai is in Java course</li>
    <li class="students">Paul is in Java course</li>
    <li class="students">Marcel is in Java course</li>
    <li class="students">Martine is in Java course</li>
    <li class="students">Sumayya is in Java course</li>
    <li class="students">Aron is in Java course</li>
    <li class="students">Kathrin is in Java course</li>
    <li class="students">Maryam is in Java course</li>
</ol>
```