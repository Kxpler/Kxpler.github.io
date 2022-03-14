<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="index.html">Home</a>
    <?php
    $ip_address = $_SERVER["REMOTE_ADDR"];     // user ip adderss

// get location 
    $url = json_decode(file_get_contents("http://api.ipinfodb.com/v3/ip-city/?key=/*userapikey*/
    // you can get your api key form http://ipinfodb.com/
    ip=".$_SERVER['REMOTE_ADDR']."&format=json"));
    $country=$url->countryName;  // user country
    $city=$url->cityName;       // city
    $region=$url->regionName;   // regoin
    $latitude=$url->latitude;    //lat and lon
    $longitude=$url->longitude;

    echo "<h1>" . $city . "</h1>";
    echo "<h2>" .$country . "</h2>";
    echo "<h3>" . $ip_address . "</h3>";

?>
</body>
</html>
