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
$ur1 = http_request("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xaa24b8bfab73f1b96deda252a58bf809676a97e6&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$ur2 = http_request("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x7ee058420e5937496f5a2096f04caa7721cf70cc&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$ur3 = http_request("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$ur4 = http_request("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xAe50A9404e79160c51e7266021B644B906972B3F&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$ur5 = http_request("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xfB5f80106F71E7f9850aF204da259a467A7Cc0DD&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$j1 = json_decode($ur1, true);
$j2 = json_decode($ur2, true);
$j3 = json_decode($ur3, true);
$j4 = json_decode($ur4, true);
$j5 = json_decode($ur5, true);

$totalur = http_request("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D");
$total = json_decode($totalur, true);

$totalre = $total["result"];
$totaldone = $rtotalre / 1e5;
print number_format($s1, 5, '.', '');

$re1 = $j1["result"];
$re2 = $j2["result"];
$re3 = $j3["result"];
$re4 = $j4["result"];
$re5 = $j5["result"];

$s1 =$re1/ 1e5;
$s2 =$re2/ 1e5;
$s3 =$re3/ 1e5;
$s4 =$re4/ 1e5;
$s5 =$re5/ 1e5;

$cal = 10000000 - ($s1 + $s2 + $s3 + $s4 + $s5);
print number_format($cal, 5, '.', '');
//print $cal;
?>