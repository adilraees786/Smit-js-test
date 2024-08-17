document.addEventListener('DOMContentLoaded', () => {
    const totalPosts = document.getElementById('totalPosts');
    const viewsToday = document.getElementById('viewsToday');
    const totalComments = document.getElementById('totalComments');

    // Simulate fetching data from a server
    const data = {
        posts: 23,
        views: 120,
        comments: 45
    };

    // Update the dashboard with the fetched data
    totalPosts.textContent = data.posts;
    viewsToday.textContent = data.views;
    totalComments.textContent = data.comments;
});



  let log_out=document.getElementById('Logout-btn')

  log_out.addEventListener('click', function(){
    window.location.href = "index.html";
  })



 
