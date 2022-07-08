/*** BLOG PAGE ***/
/* Comments Section */
/* PSUEDOCODE */
// save the comment container div, comment form, and the comment form inputs to variables
// when the form is submitted...
    // create an empty object to hold input values
    // if the subject input is not blank... 
        // add {subject: input.value} to the input values object
    // then add the other input values to the object as well
    // get the formatted date and save it in the input values object
    // use a template literal to create an comment div that contains the comment
    // append the comment to the comment container div

    const commentsContainer = document.querySelector(".blog-comments__comment-container");
    const commentForm = document.querySelector("#blog-comment-form");
    
    const commentAuthorInput = document.querySelector("#name");
    const commentSubjectInput = document.querySelector("#subject");
    const commentTextarea = document.querySelector("#comment");
    
    // declare a variable that store the object that will be updated with input values
    const commentFormValues = {
        random: 1,
    }
    
    commentForm.addEventListener('submit', (e) => {
        // prevent form's default functionality
        e.preventDefault();
    
        // if the subject input has a value...
        if (commentSubjectInput.value !== "") {
            // create a subject key in the object holding input values
            commentFormValues.subject = `<p style='font-weight:700;font-family:"Montserrat"'>${commentSubjectInput.value}</p>`;
        }
    
        // iterate the random variable (used to randomize the profile images);
        commentFormValues.random++;
    
        // store the author's name and comment text in the input values object
        commentFormValues.authorName = commentAuthorInput.value;
        commentFormValues.commentText = commentTextarea.value;
    
        // create a timestamp for the comment and add it to the input values object
        const date = new Date().toDateString().split(" ");
        const formattedDate = `${date[1]} ${date[2]}, ${date[3]}`;
        commentFormValues.date = formattedDate;
    
        // create the HTML elements to be appended to the comments container element
        // on a real site, i would make sure that the user input being added to the page was sanitized before using innerHTML, but I think innerHTML is my best option when adding a chunk of HTML like this
        const commentToAdd = `
            <div class="blog-comments__comment">
                <div class="blog-comments__img-container">
                    <img src="https://picsum.photos/70?random=${commentFormValues.random}" alt="comment author's profile image" />
                    <div class="blog-comments__author-info--mobile">
                        <p class="blog-comments__author-name heading">${commentFormValues.authorName} - <a href="#" class="blog-comments__reply-btn">Reply</a></p>
                        <p class="blog-comments__time-stamp">${commentFormValues.date} at Just Now</p>
                    </div> <!-- END author-info--mobile -->
                </div> <!-- END img-container-->
                <ul class="blog-comments__text-container">
                    <li class="blog-comments__author-info--desktop">
                        <p class="blog-comments__author-name heading">${commentFormValues.authorName} - <a href="#" class="blog-comments__reply-btn">Reply</a></p>
                    </li>
                    <li>
                        ${commentFormValues.subject ? commentFormValues.subject : ""}
                        <p class="blog-comments__comment-text">${commentFormValues.commentText}</p>
                    </li>
                    <li class="blog-comments__author-info--desktop">
                        <p class="blog-comments__time-stamp">${commentFormValues.date} at Just Now</p>
                    </li>
                </ul>
            </div>`;
    
        // append the new comment to the comment's container
        commentsContainer.innerHTML += commentToAdd;

        // clear the form inputs
        commentForm.reset();
    });