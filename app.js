window.addEventListener('load', function() {
    const hi = document.getElementsByClassName('gsc-webResult gsc-result'); 

    // for (let i = 0; i < hi.length; i++) {
    //   hi[i].addEventListener('click', function() {
    //     // here
    //     window.location.href = "preview.html";
    //   });
    // }

    const anchorElements = document.querySelectorAll('a.gs-title');
    console.log(anchorElements);
    var vidId;
    anchorElements.forEach(function(anchorElement) {
    anchorElement.addEventListener('click', function (event) {
        

        const link =event.target.href;
        vidId = getYoutubeVideoId(link);
        var url = 'preview.html?value=' + encodeURIComponent(vidId);
        anchorElement.href = url; 

        });
    });

   
    

    var vidId2
    const imgElements = document.querySelectorAll('a.gs-image');
    console.log(imgElements);
    imgElements.forEach(function(imgElement) {
    imgElement.addEventListener('click', function (event2) {
        

        const link2 =event2.target.href;
        vidId2 = getYoutubeVideoId(link2);
        var url2 = 'preview.html?value=' + encodeURIComponent(vidId2);
        imgElement.href = url2; 
	    imgElement.dataset.ctorig= url2; 
        imgElement.dataset.cturl= url2; 
        });
    });

 
    function getYoutubeVideoId(url) {

        let str = 'https://www.google.com/url?client=internal-element-cse&cx=e30bc28f289364d54&q=https://www.youtube.com/watch%3Fv%3D';
        
        let newStr = url.replace(str,'');
        const myArray = newStr.split("&");
        return myArray[0];   
      }
  

  


});

