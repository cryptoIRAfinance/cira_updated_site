<?php
header('Content-Type: application/json');
function http_request($url){
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch); 
    curl_close($ch);      
    return $output;
}  
$ur1 = http_request("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$j1 = json_decode($ur1, true);

$re1 = $j1["result"];
$s1 = $re1 / 1e5;

print number_format($s1, 5, '.', '');
//print $s1;
?>