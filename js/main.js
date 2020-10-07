
/* ---------------- Houses page --------------- */
    $("#house1_read").click(function() {
        $('#complete1').toggle();
   });

    $("#house2_read").click(function() {
         $('#complete2').toggle();
   });

   $("#house3_read").click(function() {
         $('#complete3').toggle();
   });

   $("#house4_read").click(function() {
         $('#complete4').toggle();
   });

   $("#house5_read").click(function() {
         $('#complete5').toggle();
   });

   $("#house6_read").click(function() {
         $('#complete6').toggle();
   });

    $("#house7_read").click(function() {
         $('#complete7').toggle();
   });

   $("#house8_read").click(function() {
         $('#complete8').toggle();
   });

   $("#house9_read").click(function() {
         $('#complete9').toggle();
   });

   $("#house10_read").click(function() {
         $('#complete10').toggle();
   });

   $("#house11_read").click(function() {
         $('#complete11').toggle();
   });

   $("#house12_read").click(function() {
         $('#complete12').toggle();
   });


/*------------Contact page EmailJS-------------------- */
function sendMail(contactForm){
    emailjs.send("gmail","template_HauntedHouses",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
        return false;
}


/*-------------------------Locations page GoogleMaps API --------------------------- */

   function initMap(){
        var map = new google.maps.Map(document.getElementById("map"),{
            zoom:3,
            center:{
                lat:31.704726 , 
                lng: -39.471655
            }
        }); 
   
   var labels = "123456789JKL";

    var locations = [
        {location: {lat:51.903023 , lng: -2.061397}, message: 
            '<div id="content">' +
            '<h5>House 1. Garden Reach</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Cheltenham, UK </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house1.png"></div>'+
                    '<p>The building was the home of the Despard family whose daughter Rosina saw the ghost of a veiled' +
                    "woman on several occasions in the 1880s</p>" +
                    '<p>Attribution: Garden Reach, <a href="https://en.wikipedia.org/wiki/The_Cheltenham_Ghost">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
         
        {location: {lat:57.266329 , lng: -4.47479}, message: 
        '<div id="content">' +
            '<h5>House 2. Boleskine House</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Foyers Scotland, UK </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house2.jpg"></div>'+
                    '<p>The building was the home of the Despard family whose daughter Rosina saw the ghost of a veiled' +
                    "woman on several occasions in the 1880s</p>" +
                    '<p>Attribution: Boleskine House, <a href="https://en.wikipedia.org/wiki/Boleskine_House">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
        {location: {lat:45.431068 , lng: 12.332400}, message: 
        '<div id="content">' +
            '<h5>House 3. Palazzo Dario</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Venezia, Italy </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house3.jpg"></div>'+
                    '<p>One of the most beautiful buildings of Venezia’s Gran Canale, built (apparently) over the terrains' + 
                    "of an old templary cemetery ground in gothic style restored in byzantines and renaissance elements</p>" +
                    '<p>Attribution: Ca Dario, <a href="https://it.wikipedia.org/wiki/Ca%27_Dario">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
        {location: {lat:40.419971, lng:-3.692151}, message: 
        '<div id="content">' +
            '<h5>House 4. Palacio de Linares. </h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Madrid, Spain </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house4.jpg"></div>'+
                    '<p>Psychophonies, mysterious images and dozens of stories talk about a child that runs around' + 
                    'the corridors, stairs and salons looking for her mother</p>' +
                    '<p>Attribution: ..... <a href="https://es.wikipedia.org/wiki/Palacio_de_Linares/">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"}, 
        {location: {lat:48.833988 , lng:2.332444}, message: 
        '<div id="content">' +
            '<h5>House 5. Catacombs of Paris.</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Paris, France </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house5.jpg"></div>'+
                    '<p>The underground ossuaries, which hold the remains of more than six million people in a small part of a tunnel' + 
                    'network built to consolidate Paris ancient stone quarries.</p>' +
                    '<p>Attribution: ..... <a href="https://en.wikipedia.org/wiki/Catacombs_of_Paris">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"}, 
        {location: {lat:53.028119 , lng:-7.808400}, message: 
        '<div id="content">' +
            '<h5>House 6. Leap Castle. </h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Coolderry, Ireland </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house6.jpg"></div>'+
                    '<p>Constructed most likely around 1250 CE. by the O Bannon clan that were the "secondary chieftains" of the territory' + 
                    'and were subject to the ruling O Carroll clan </p>' +
                    '<p>Attribution: ..... <a href="https://en.wikipedia.org/wiki/Leap_Castle">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"}, 
        {location: {lat:40.6789893 , lng:-73.4170673}, message: 
        '<div id="content">' +
            '<h5>House 7. Amityville House. </h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: New York, USA </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house7.jpg"></div>'+
                    '<p>Became famous in 1974 when the DeFeo family was murdered by the eldest son with a rifle, while his parents' + 
                    'and four siblings were sleeping.</p>' +
                    '<p>Attribution: ..... <a href="https://en.wikipedia.org/wiki/Amityville,_New_York#The_Amityville_Horror">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
        {location: {lat:29.962072 , lng:-90.061264}, message: 
        '<div id="content">' +
            '<h5>House 8. LaLaurie Mansion. </h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: New Orleans, USA </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house8.jpg"></div>'+
                    '<p>The story of this building goes back to the XVIII century. His owner Marie Delphine Lalaurie apparently' +
                    'had a double life, public facing she showed herself as very kind with people of black race and worrying about her slaves health.</p>' +
                    '<p>Attribution: ..... <a href="https://en.wikipedia.org/wiki/Delphine_LaLaurie">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"}, 
        {location: {lat:19.290305 , lng:-99.096538}, message: 
        '<div id="content">' +
            '<h5>House 9. Isla de las Muñecas. </h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Xochimilco, Mexico</b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house9.jpg"></div>'+
                    '<p>Originally owned by Don Julian Santana Barrera, is full of dolls hanging from trees and buildings covered with cobwebs and insects' +
                     'The place was named during the 1950s when the owner began to hang them as protection against evil spirits. </p>' +
                    '<p>Attribution: Wikipedia <a href="https://en.wikipedia.org/wiki/Xochimilco">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"}, 
        {location: {lat:-23.547790 , lng:-46.641106}, message: 
        '<div id="content">' +
            '<h5>House 10. Joelma Building</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Sao Paulo, Brazil </b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house10.jpg"></div>'+
                    '<p>One of the top haunted places to visit in Brazil.  Built in 1971, on 1 February 1974, an air conditioning' +
                     'unit overheated, starting a fire. There were 756 people in the building at the time.</p>' +
                    '<p>Attribution: Wikipedia <a href="https://en.wikipedia.org/wiki/Joelma_Building">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
        {location: {lat:4.576359 , lng:-74.296661}, message: 
        '<div id="content">' +
            '<h5>House 11. El Salto Hotel</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Tequendama, Colombia</b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house11.png"></div>'+
                    '<p>El Salto was a functional hotel from 1924 to 1990 located near the waterfalls of Tequendama. Since it is' +
                     'at the top of a hill, legend says that many people would book a night at the hotel and then throw themselves off the cliff.</p>' +
                    '<p>Attribution: Deserted Places <a href="http://desertedplaces.blogspot.com/2012/08/the-haunted-hotel-at-tequendama-falls.html">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"},
        {location: {lat:43.667025 , lng:-79.377915}, message: 
        '<div id="content">' +
            '<h5>House 12. Keg Mansion</h5>' +
                '<div id="bodyContent">' +
                    "<p><b>Location: Toronto, Canada</b></p>" +
                    '<div><img border="1" height="100px" width="100px" style="float:right" SRC="images/house12.jpg"></div>'+
                    '<p>Originally built in 1867. It was once the home of one of the most prominent families in the city, The Masseys. As legend has it,'+
                     'in 1915, after the death of Massey’s beloved only daughter, Lillian, one of the maids was so stricken by grief that she hung herself.</p>' +
                    '<p>Attribution: Wikipedia <a href="https://en.wikipedia.org/wiki/Keg_Mansion">' +
                    "Wikipedia</a> </p>" +
                "</div>" +
            "</div>"} 
    ];
    
    var markers = locations.map(function(location, i){
        const infowindow = new google.maps.InfoWindow({
            content: location.message,
            
        });

        infowindow.setOptions({maxWidth:300})

        console.log(i);
        console.log(location);
        var mark = new google.maps.Marker({
            position: location.location,
            label:"",
            icon: {
                    strokeWeight: 1,
                    url:"images/gate.svg",
                    scaledSize: new google.maps.Size(20, 20), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
            }
        });
        mark.addListener("click", () => {
            infowindow.open(map, mark);
        });
        return mark;
    });
    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.addDomListener(window, "resize", function() {
        
    google.maps.event.trigger(map, "resize");
    
    });

    var markerCluster = new MarkerClusterer(map, markers,{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
    

    