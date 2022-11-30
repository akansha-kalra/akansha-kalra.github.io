var data = {
    "teaching": [
       {
           img: 'images/rl.jpg',
           title: <a> 18-776/24-776-:Non-Linear Control</a>',
           text: 'Head TA in Fall 2020.',
       },
{
           img: 'images/rl.jpg',
           title: '<a href="https://courses.ece.cmu.edu/18793">18-793:Image and Video Processing</a>',
           text: 'Graduate TA in Summer 2020.',
       },
};

$('document').ready(function() {

    // Add teaching
    // for (var i = 0; i < data.teaching.length; i++) {
    //     var proj = data.teaching[i];
    //     var html = getProjectHTML(proj);
    //     $('table#teaching-table').append(html);
    // }


    // Add blog
    // for (var i = 0; i < data.blog.length; i++) {
    //     var proj = data.blog[i];
    //     var html = getProjectHTML(proj);
    //     $('table#blog-table').append(html);
    // }

});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // Add title and description
    html += '<td class="description-td"><p><em>' + proj.title + '</em>. ';
    if ('authors' in proj) {
        html += '<small>' + proj.authors + '</small>';
    }
    html += '<br>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
