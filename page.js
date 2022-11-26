var data = {
    "research": [
    // {
    //     img: 'images/clustervision.png',
    //     title: 'Interpretable Reward Learning using Differential Decision Trees',
    //     authors: 'Bum Chul Kwon, Ben Eysenbach, Janu Verma, Kenney Ng, Christopher De Filippi, Walter F Stewart, Adam Perer',
    //     text: 'Designed algorithms for Clustervision, a visual analytics tool that helps ensure data scientists find the right clustering among the large amount of techniques and parameters available. Accepted at IEEE Transactions on Visualization and Computer Graphics. [<a href="http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf">paper</a>]',
    // },
    //     {
    //         img: 'images/uav_small.jpg',
    //         title: 'Machine Learning on Preemptible Volatile Instances',
    //         text: 'Worked on image analysis and system integration for a research project in the <a href="http://senseable.mit.edu/">Sensible City Lab</a>. [<a href="http://www.dynsyslab.org/portfolio/waterfly/">site</a>, <a href="https://www.youtube.com/watch?v=a0ec5aS_NeA">video</a>]'
    //     }
    ],
    "projects": [
        {
            img: 'images/dna.png',
            title: 'DNA Compression with Graphical Models',
            text: 'For Algorithms for Inference (6.438), I implemented developed a model for compressing shotgun DNA sequences using LDPC codes. [<a href="http://web.mit.edu/bce/www/6.438_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.438_project.zip">code</a>]'
        },
        {
            img: 'images/cipher.jpg',
            title: 'Cipher Breaking using MCMC',
            text: 'For Inference and Information (6.437), I implemented a model for breaking substitution ciphers using the Metropolis Hastings algorithm. [<a href="http://web.mit.edu/bce/www/6.437_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.437_project.zip">code</a>]'
        },
        {
            img: 'images/6856.jpg',
            title: 'Randomized Splay Trees',
            text: 'For Randomized Algorithms (<a href="https://courses.csail.mit.edu/6.856/current/">6.856</a>), implemented and analyzed randomized splay trees. Collaborated with Robi Bhattacharjee. [<a href="http://web.mit.edu/bce/www/6856_paper.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6856_code.zip">code</a>]'
        },
,
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


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getProjectHTML(proj);
        $('table#research-table').append(html);
    }

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
