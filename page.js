var data = {
    "research": [
    // {
    //     img: 'images/clustervision.png',
    //     title: 'Clustervision: Visual Supervision of Unsupervised Clustering',
    //     authors: 'Bum Chul Kwon, Ben Eysenbach, Janu Verma, Kenney Ng, Christopher De Filippi, Walter F Stewart, Adam Perer',
    //     text: 'Designed algorithms for Clustervision, a visual analytics tool that helps ensure data scientists find the right clustering among the large amount of techniques and parameters available. Accepted at IEEE Transactions on Visualization and Computer Graphics. [<a href="http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf">paper</a>]',
    // },
    //     {
    //         img: 'images/segment.png',
    //         title: 'Video Segmentation',
    //         text: 'Applied deep learning to video segmentation, and implemented image segmentation in JS.  I gave a talk about this project at EECScon 2015, an MIT undergrad conference [2nd place]. [<a href="http://web.mit.edu/bce/www/segment/">demo</a>, <a href="http://web.mit.edu/bce/www/segment_poster.pdf">poster</a>, <a href="http://web.mit.edu/bce/www/segment_slides.pdf">slides</a>, <a href="http://people.csail.mit.edu/bce/readme.html">code</a>]'
    //     },
    //     {
    //         img: 'images/uav_small.jpg',
    //         title: 'Autonomous Quadcopters for Aerial Imaging',
    //         text: 'Worked on image analysis and system integration for a research project in the <a href="http://senseable.mit.edu/">Sensible City Lab</a>. [<a href="http://www.dynsyslab.org/portfolio/waterfly/">site</a>, <a href="https://www.youtube.com/watch?v=a0ec5aS_NeA">video</a>]'
    //     }
    ],
    "projects": [
        {
            img: 'images/6882.png',
            title: 'Topic Modeling of Academic Papers at MIT',
            text: 'For Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), applied LDA to a new dataset of 100,000+ academic papers written by MIT affiliates. [<a href="http://web.mit.edu/bce/www/lda.pdf">paper</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA">code</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA/blob/master/datasets/dspace.tar.gz?raw=true">data</a>]'
        },
        {
            img: 'images/mmbm.png',
            title: 'Presentations on Gaussian Processes and Mixed Membership Block Models',
            text: 'For a seminar on Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), taught classes on Gaussian Processes and Mixed Membership Block Models. [<a href="https://docs.google.com/presentation/d/1V_rzvHggMqnTNOKzjUvs6EMmaH4qVhYLcRv4CbqHrLI/edit?usp=sharing">GP slides</a>, <a href="https://docs.google.com/presentation/d/1zWM9a_uAeBR_72m4hPkyQOxXoYV_i1FZhfKvE5_5jt8/edit?usp=sharing">MMBM slides</a>]'
        },
        {
            img: 'images/6854_small.jpg',
            title: 'Exact Recovery of Stochastic Block Models',
            text: 'Wrote a survey paper on exact recovery for Advanced Algorithms (<a href="http://people.csail.mit.edu/moitra/854.html">6.854</a>). [<a href="http://web.mit.edu/bce/www/sbm.pdf">paper</a>]'
        },
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
