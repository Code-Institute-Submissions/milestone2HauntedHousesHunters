/* ---------------- Houses page --------------- 
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

   /*
$(document).ready(function() {
   $(".house3_read").on("click", function() {
        $(".house1").removeClass('highlight_house');
        $(".house2").removeClass('highlight_house');
        $(".house3").removeClass('highlight_house');
        $(".house3").addClass('highlight_house');
   });
}); 

*/

/*------------Contact page EmailJS-------------------- 
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

*/
/*-------------------------Locations page GoogleMaps API --------------------------- */

/*-----------Option 1 only one marker with info. (working)-----------
function initMap(){
    const house1 = {lat:51.901716 , lng: -2.077738};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:house1,
        styles:'map-retro'
    });

    const contentString =
        '<div id="content">' +
            '<h4>House 1. Garden Reach</h4>' +
            '<div id="bodyContent">' +
                "<p><b>Location: Cheltenham, UK </b></p>" +
                '<div><img border="1" align="center" height="100px" width="100px" SRC="images/house1.png"></div>'+
                "<p>The building was the home of the Despard family whose daughter Rosina saw the ghost of a veiled" +
                "woman on several occasions in the 1880s</p>" +
                '<p>Attribution: Garden Reach, <a href="https://en.wikipedia.org/wiki/The_Cheltenham_Ghost">' +
                "Wikipedia</a> </p>" +
            "</div>" +
        "</div>";
        
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
    });

    const marker = new google.maps.Marker({
        position: house1,
        icon: {
            path: "M26.21,28.03h7.77v-9.36c0-1.4,1.14-2.54,2.54-2.54s2.54,1.14,2.54,2.54v7.65c2.5-1.17,5.09-2.12,7.76-2.85v-9.56 c0-1.41,1.14-2.54,2.54-2.54c1.41,0,2.54,1.14,2.54,2.54v8.47c2.23-0.35,4.52-0.55,6.88-0.59l0.08,0V8.86 c0-1.4,1.14-2.54,2.54-2.54c1.4,0,2.54,1.14,2.54,2.54v13.09c2.26,0.18,4.58,0.5,6.96,0.97v-9.01c0-1.41,1.14-2.54,2.54-2.54 c1.41,0,2.54,1.14,2.54,2.54v10.23c2.52,0.7,5.11,1.57,7.76,2.6v-8.07c0-1.4,1.14-2.54,2.54-2.54c1.4,0,2.54,1.14,2.54,2.54v9.36 h7.82v-6.91h-2.31c-1.34,0-2.43-1.09-2.43-2.43v-1.21c0-1.34,1.09-2.43,2.43-2.43h3.67c-0.69-1.39-1.07-2.96-1.07-4.61 C96.95,4.67,101.63,0,107.39,0c5.77,0,10.44,4.67,10.44,10.44c0,1.66-0.39,3.22-1.07,4.61h3.7c1.34,0,2.43,1.09,2.43,2.43v1.21 c0,1.34-1.09,2.43-2.43,2.43h-2.31v86.53H96.67v-7.44H86.48c-0.06,0-0.11,0.01-0.17,0.01c-0.06,0-0.12,0-0.17-0.01H73.72 c-0.08,0.01-0.17,0.01-0.25,0.01c-0.08,0-0.17,0-0.25-0.01H61.65c-0.08,0.01-0.16,0.01-0.24,0.01c-0.08,0-0.16,0-0.24-0.01H49.62 c-0.08,0.01-0.17,0.01-0.25,0.01c-0.08,0-0.17,0-0.25-0.01H36.69c-0.06,0-0.11,0.01-0.17,0.01c-0.06,0-0.12,0-0.17-0.01H26.21v7.44 H4.74V21.12H2.43C1.09,21.12,0,20.03,0,18.69v-1.21c0-1.34,1.09-2.43,2.43-2.43H6.1c-0.69-1.39-1.07-2.96-1.07-4.61 C5.02,4.67,9.7,0,15.46,0S25.9,4.67,25.9,10.44c0,1.66-0.39,3.22-1.07,4.61h3.7c1.34,0,2.43,1.09,2.43,2.43v1.21 c0,1.34-1.09,2.43-2.43,2.43h-2.31V28.03L26.21,28.03z M51.91,52.07h6.96V37.65c-2.39,0.04-4.71,0.27-6.96,0.66V52.07L51.91,52.07z M63.96,52.07h6.96V38.9c-2.39-0.52-4.71-0.87-6.96-1.07V52.07L63.96,52.07z M70.92,68.19h-6.96v26.95h6.96V68.19L70.92,68.19z M58.87,68.19h-6.96v26.95h6.96V68.19L58.87,68.19z M60.21,60.82l-1.59,4.15h5.58l-1.47-4.21c0.93-0.47,1.58-1.45,1.58-2.57 c0-1.59-1.3-2.89-2.89-2.89c-1.59,0-2.89,1.3-2.89,2.89C58.53,59.35,59.21,60.36,60.21,60.82L60.21,60.82L60.21,60.82z M96.67,33.1 h-7.82v5.75h7.82V33.1L96.67,33.1z M96.67,43.91h-7.82v51.23h7.82V43.91L96.67,43.91z M26.21,95.14h7.77V43.91h-7.77V95.14 L26.21,95.14z M26.21,38.85h7.77V33.1h-7.77V38.85L26.21,38.85z M76.01,29.4v5.56c2.52,0.7,5.11,1.57,7.76,2.6v-5.37 C81.11,31.08,78.52,30.15,76.01,29.4L76.01,29.4z M76.01,40.22v54.93h7.76V43.01C81.11,41.9,78.52,40.97,76.01,40.22L76.01,40.22z M70.92,33.74v-5.66c-2.39-0.52-4.71-0.87-6.96-1.07v5.75C66.22,32.95,68.54,33.27,70.92,33.74L70.92,33.74z M58.87,26.83 c-2.39,0.04-4.71,0.27-6.96,0.66v5.7c2.23-0.35,4.52-0.55,6.88-0.59l0.08,0V26.83L58.87,26.83z M46.82,28.72 c-2.69,0.83-5.27,1.91-7.76,3.23v5.19c2.5-1.17,5.09-2.12,7.76-2.85V28.72L46.82,28.72z M46.82,39.54 c-2.69,0.83-5.27,1.91-7.76,3.23v52.37h7.76V39.54L46.82,39.54z",
            scale: 0.30,
            strokeWeight: 1,
            fillColor:'red',
            strokeColor:'red'
        },
        map,
        title: "Garden Reach House. Location: Cheltenham, UK",
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

----------------------------------*/

/* -----------Option 2 trying several markers (not working)--------
 function initMap(){
    const house1 = {lat:51.901716 , lng: -2.077738};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:house1,
        styles:'map-retro'
    });

    var locations = [
        ['<h4>House 1. Garden Reach</h4>',
        '<p><b>Location. Cheltenham, UK </b></p>',
        '<div><img border="1" align="center" height="100px" width="100px" SRC="images/house1.png"></div>',
            '<p>The building was the home of the Despard family whose daughter Rosina saw the ghost of a veiled woman on several occasions in the 1880s</p>',
            '<p>Attribution. Garden Reach, <a href="https://en.wikipedia.org/wiki/The_Cheltenham_Ghost">Wikipedia</a> </p>',
        51.901716 , -2.077738],
        
        ['<h4>House 2 Boleskine House.</h4>', 
        '<p><b>Location. Foyers Scotland, UK</b></p>',
        '<div><img border="1" align="center" height="100px" width="100px" SRC="images/house2.jpg"></div>',
            '<p>notable for having been the home of author and occultist Aleister Crowley, and Led Zeppelin guitarist Jimmy Page. Crowley became infamous for stories of conducting black magic and various other rituals while residing at the house</p>',
           '<p>Attribution: Boleskine House, <a href="https://en.wikipedia.org/wiki/Boleskine_House">Wikipedia</a> </p>', 
        52.268746 , -4.474540],
    ];

    function initialize(){
        var Options = {
            center: new google.maps.LatLng(33.890542, 151.274856),
            zoom:3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
        Options);

        setMarkers(map,locations)
    }

    function setMarkers(map,locations){
        var marker, i
        for (i=0; i < locations.length; i++)
        {
            var houseName = locations[i][0]
            var houseWhere = locations[i][1]
            var houseImage = locations[i][2]
            var houseDescription = locations[i][3]
            var houseLink = locations[i][4]
            var lat = locations[i][5]
            var long = locations[i][6]

            latlngset = new google.maps,LatLng(lat, long);
            var marker = new google.maps.Marker({
                map:map, title: houseName , position: latlngset
            });
            map.setCenter(marker.getPosition())

            var content = houseName + houseWhere + add
            var infowindow = new google.maps.InfoWindow()

            google.maps.event.addListener(marker,'click',(function(marker, content, infowindow){
                return function(){
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })
            (marker,content,infowindow));
        }
    }

 } 
    var markerCluster = new MarkerClusterer(map, markers,{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
    
    */
 /* -----------Option 3 several markers (not working) ---------
    const locations = [{
        title:"House 1. Garden Reach",
        lat:"51.901716",
        lng:"-2.077738",
        description:
            '<p>Some text here<a href="#">See more info</a></p><img style="width:50px;height:50px;" src="images/house1.png"></img>',
    },
    {   title:"House 2 Boleskine House.",
        lat:"52.268746",
        lng:"-4.474540",
        description:
            '<p>Some text here<a href="#">See more info</a></p><img style="width:50px;height:50px;" src="images/house2.jpg"></img>',
    }];

    let locations;
    function initMap(){
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom:3,
            center:{
                "lat":"51.901716" , 
                "lng": "-2.077738",
            },
        });

        var mapOptions = {
            center:new google.maps.LatLng(
                parseFloat(locations[0].lat),
                parseFloat(locations[0].lng)
            ),
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var infoWindow = new google.maps.InfoWindow();
        for (var i=0; i< locations.length; i++){
            var data = locations[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title,
                icon: {
                    path: "M26.21,28.03h7.77v-9.36c0-1.4,1.14-2.54,2.54-2.54s2.54,1.14,2.54,2.54v7.65c2.5-1.17,5.09-2.12,7.76-2.85v-9.56 c0-1.41,1.14-2.54,2.54-2.54c1.41,0,2.54,1.14,2.54,2.54v8.47c2.23-0.35,4.52-0.55,6.88-0.59l0.08,0V8.86 c0-1.4,1.14-2.54,2.54-2.54c1.4,0,2.54,1.14,2.54,2.54v13.09c2.26,0.18,4.58,0.5,6.96,0.97v-9.01c0-1.41,1.14-2.54,2.54-2.54 c1.41,0,2.54,1.14,2.54,2.54v10.23c2.52,0.7,5.11,1.57,7.76,2.6v-8.07c0-1.4,1.14-2.54,2.54-2.54c1.4,0,2.54,1.14,2.54,2.54v9.36 h7.82v-6.91h-2.31c-1.34,0-2.43-1.09-2.43-2.43v-1.21c0-1.34,1.09-2.43,2.43-2.43h3.67c-0.69-1.39-1.07-2.96-1.07-4.61 C96.95,4.67,101.63,0,107.39,0c5.77,0,10.44,4.67,10.44,10.44c0,1.66-0.39,3.22-1.07,4.61h3.7c1.34,0,2.43,1.09,2.43,2.43v1.21 c0,1.34-1.09,2.43-2.43,2.43h-2.31v86.53H96.67v-7.44H86.48c-0.06,0-0.11,0.01-0.17,0.01c-0.06,0-0.12,0-0.17-0.01H73.72 c-0.08,0.01-0.17,0.01-0.25,0.01c-0.08,0-0.17,0-0.25-0.01H61.65c-0.08,0.01-0.16,0.01-0.24,0.01c-0.08,0-0.16,0-0.24-0.01H49.62 c-0.08,0.01-0.17,0.01-0.25,0.01c-0.08,0-0.17,0-0.25-0.01H36.69c-0.06,0-0.11,0.01-0.17,0.01c-0.06,0-0.12,0-0.17-0.01H26.21v7.44 H4.74V21.12H2.43C1.09,21.12,0,20.03,0,18.69v-1.21c0-1.34,1.09-2.43,2.43-2.43H6.1c-0.69-1.39-1.07-2.96-1.07-4.61 C5.02,4.67,9.7,0,15.46,0S25.9,4.67,25.9,10.44c0,1.66-0.39,3.22-1.07,4.61h3.7c1.34,0,2.43,1.09,2.43,2.43v1.21 c0,1.34-1.09,2.43-2.43,2.43h-2.31V28.03L26.21,28.03z M51.91,52.07h6.96V37.65c-2.39,0.04-4.71,0.27-6.96,0.66V52.07L51.91,52.07z M63.96,52.07h6.96V38.9c-2.39-0.52-4.71-0.87-6.96-1.07V52.07L63.96,52.07z M70.92,68.19h-6.96v26.95h6.96V68.19L70.92,68.19z M58.87,68.19h-6.96v26.95h6.96V68.19L58.87,68.19z M60.21,60.82l-1.59,4.15h5.58l-1.47-4.21c0.93-0.47,1.58-1.45,1.58-2.57 c0-1.59-1.3-2.89-2.89-2.89c-1.59,0-2.89,1.3-2.89,2.89C58.53,59.35,59.21,60.36,60.21,60.82L60.21,60.82L60.21,60.82z M96.67,33.1 h-7.82v5.75h7.82V33.1L96.67,33.1z M96.67,43.91h-7.82v51.23h7.82V43.91L96.67,43.91z M26.21,95.14h7.77V43.91h-7.77V95.14 L26.21,95.14z M26.21,38.85h7.77V33.1h-7.77V38.85L26.21,38.85z M76.01,29.4v5.56c2.52,0.7,5.11,1.57,7.76,2.6v-5.37 C81.11,31.08,78.52,30.15,76.01,29.4L76.01,29.4z M76.01,40.22v54.93h7.76V43.01C81.11,41.9,78.52,40.97,76.01,40.22L76.01,40.22z M70.92,33.74v-5.66c-2.39-0.52-4.71-0.87-6.96-1.07v5.75C66.22,32.95,68.54,33.27,70.92,33.74L70.92,33.74z M58.87,26.83 c-2.39,0.04-4.71,0.27-6.96,0.66v5.7c2.23-0.35,4.52-0.55,6.88-0.59l0.08,0V26.83L58.87,26.83z M46.82,28.72 c-2.69,0.83-5.27,1.91-7.76,3.23v5.19c2.5-1.17,5.09-2.12,7.76-2.85V28.72L46.82,28.72z M46.82,39.54 c-2.69,0.83-5.27,1.91-7.76,3.23v52.37h7.76V39.54L46.82,39.54z",
                    scale: 0.30,
                    strokeWeight: 1,
                    strokeColor:'red',
                },
            });
        (function (marker, data){
            google.maps.event.addListener(marker, "click", function (e){
                infoWindow.setContent(
                    "<div style = 'width:100%;min-height:80px;'>" + "<div style = 'font-weight:bold;'>" + data.title + "</div>" + data.description + "</div>"
                );
                infoWindow.open(map, marker);
            });
        })
        (marker, data);    
        }
        
    }
    -----------------------------
    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
      return function() {
          infoWindow.setContent(infoWindowContent[i]);
          infoWindow.open(map, marker);
      };
    })(marker, i));
*/
   /* -----------Option 4 several markers but no info --------
   function initMap(){
        var map = new google.maps.Map(document.getElementById("map"),{
            zoom:3,
            center:{
                lat:51.901716 , 
                lng: -2.077738
            }
        }); 
   
   var labels = "ABCDEFGHIJKL";

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
         
        {location: {lat:57.266329 , lng: -4.47479}, message: '<div id="content">' +
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
        {location: {lat:45.431068 , lng: 12.332400}, message: 'Scarey house 3'},/*House 3 Palazzo Dario Venice
        {location: {lat:40.419971, lng:-3.692151}, message: 'Scarey house 4'}, /*House 4 Palacio de Linares, madrid
        {location: {lat:48.833988 , lng:2.332444}, message: 'Scarey house 5'}, /*House 5 catacombs of paris
        {location: {lat:53.028119 , lng:-7.808400}, message: 'Scarey house 6'}, /*House 6  Leap Castle. Coolderry
        {location: {lat:40.6789893 , lng:-73.4170673}, message: 'Scarey house 7'}, /*House 7  Amityville House 
        {location: {lat:29.962072 , lng:-90.061264}, message: 'Scarey house 8'}, /*House 8  LaLaurie Mansion 
        {location: {lat:19.290305 , lng:-99.096538}, message: 'Scarey house 9'}, /*House 9 isla de las muñecas mexico
        {location: {lat:-23.547790 , lng:-46.641106}, message: 'Scarey house 10'},/*House 10 Joelma Building. Sao Paulo
        {location: {lat:4.576359 , lng:-74.296661}, message: 'Scarey house 11'}, /*House 11 El Salto Hotel. Tequendama
        {location: {lat:43.667025 , lng:-79.377915}, message: 'Scarey house 12'} /*House 12 Keg Mansion. Toronto
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
            label: labels[i % labels.length],
            icon: {
                    strokeWeight: 1,
                    strokeColor:'red',
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

    var markerCluster = new MarkerClusterer(map, markers,{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

    /*--------------------------------------------*/

    