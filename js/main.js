
/* ---------------- Houses page --------------- */

/*This is an event listener using jquery created so when the user clicks on "readmore" (on each card from the houses.html page) which has the id house1_read
the function will toggle the paragraph with the id complete1 that is contained within that id, showing it or hiding it.
As there are 12 cards each one having its own readmore link  this function has been replicated for each of those*/
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
/* Using EmailJS servie Software Development Kit as specified in their site. 
The function is using our mail service id and our template id both specified in our emailJS account in their site */
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
            console.log("Failed, please try again", error);
        });

        return false;
};


/*-------------------------Locations page GoogleMaps API --------------------------- */

// This function and map object comes from Google Maps API spec and we use the method to retrieve the div class "map" which is where the map wil be showing.
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"),{ // these are the initial paramethers of the map that will show
        zoom:3,
        center:{
            lat:31.704726 , 
            lng: -39.471655
            }
    }); 

   /* we have the locations array object here that has been extended to contain each location object and we have set the initial values
   for the lattitude and longitude coords for each of the 12 houses location in the map*/
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
            "</div>"}, /*This html code on each message property inside each location object, allows us to add content and format the information window
            that will be showing on each marker on the map */
         
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
    
    /*The map is a javascript built in javascript method and returns an array with the results of looping through each location item in our locations array. 
    We are passing each location object (the current value of where we are in the array as we're looping through) and its properties (i which is the index number of 
    where we currently are in the array on each lattitude, longittude and message) as an argument into the markers function, so we iterate through the locations array, 
    and we are adding the information window to each marker on the actual map.*/
    var markers = locations.map(function(location, i){
        const infowindow = new google.maps.InfoWindow({
            content: location.message,
        });
        /* Modifying the max width of the information window so it does not show too big on each marker */
        infowindow.setOptions({maxWidth:300})
        /*We define the mark object to be returned by the markers function */
        var mark = new google.maps.Marker({
            position: location.location, //this shows the current location objects and tags it
            label:"", // I've removed the default label that usually shows on each marker (A,B,C,D etc) as I've changed the default marker icon I don't what that label to show on top of the icon image
            icon: {
                    strokeWeight: 1,
                    url:"images/gate.svg",
                    scaledSize: new google.maps.Size(20, 20), // scaled size of the icon image
                    origin: new google.maps.Point(0,0), 
                    anchor: new google.maps.Point(0, 0) 
            } // Here I am replacing the default drop shape icon for each marker with an svg image of a gate
        });
        //This event listener will trigger when the user clicks on each marker on the map
        mark.addListener("click", () => {
            infowindow.open(map, mark);
        });
        return mark;
    });

    //Here I am allowing the map canvas to be resized in the page
    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.addDomListener(window, "resize", function() {
        google.maps.event.trigger(map, "resize");
    });

    //This is taken from the google API tutorial to create both the markers image for our map, and create them in a cluster if they're close together using the clusterer library.
    var markerCluster = new MarkerClusterer(map, markers,{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
    

    