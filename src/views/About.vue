<template>
  <div style="margin-bottom: 80px;">
    <h1>Garrett Fereday, Ph.D.</h1>

    
    <div class="paragraph" >
      <div>
        I'm a Computer Scientist that enjoys the challenges of designing maintainable, extensible, high-performance software. My area of <router-link to="/research">research</router-link> is in classical <strong>Artificial Intelligence</strong> &mdash; specifically, heuristic search algorithms and the data structures that they use.
        <br/>These algorithms have a wide range of applications: path-planning and action-planning for AI agents in videogames, GPS navigation, alignment of biological sequence data, and many others!
      </div>

      <div style="margin-top: 40px;">Outside of my research, I am particularly interested in <strong>game development</strong> and global illumination techniques, such as <strong>path tracing</strong>. I have worked on several <router-link to="/projects">projects</router-link> related to these topics. Although my current game development experience is limited to <strong>Unity</strong>, I am actively learning to use <strong>Unreal Engine</strong> for some personal projects.</div>

      <!--<div style="margin-top: 40px;">My preferred development language is C++ (ideally C++17 or later), though I also have plenty of experience with C# and Python, as well.</div>-->
    </div>

    <div class="photo">
      <img src="img/portfolio_photo.jpg" style="width: 100%"/>
      <div><a class="download-link" href="d/resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Resumé</a></div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  //margin-top: 50px;
  text-align: center;
  width: 50%;
  margin: auto;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
    width: 25%;
  }
}

</style>