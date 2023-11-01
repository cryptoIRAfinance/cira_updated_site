<?php
header('Content-Type: application/json');

// Function to perform HTTP GET requests
function http_request($url){
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch); 
    if (curl_errno($ch)) {
        return false; // Handle error as needed
    }
    curl_close($ch);      
    return $output;
}

// API Key should be defined as a constant or variable
define('API_KEY', 'JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D');
$contract_address = "0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE";
$addresses = [
    "0xaa24b8bfab73f1b96deda252a58bf809676a97e6",
    "0x7ee058420e5937496f5a2096f04caa7721cf70cc",
    "0x000000000000000000000000000000000000dead",
    "0xAe50A9404e79160c51e7266021B644B906972B3F",
    "0xfB5f80106F71E7f9850aF204da259a467A7Cc0DD"
];

$sum = 0;
foreach ($addresses as $address) {
    $url = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress={$contract_address}&address={$address}&tag=latest&apikey={$API_KEY}";
    $response = http_request($url);
    if ($response === false) {
        continue; // Handle error as needed
    }
    $json = json_decode($response, true);
    if (isset($json["result"])) {
        $sum += $json["result"] / 1e5;
    } else {
        // Handle unexpected JSON structure
    }
}

$cal = 10000000 - $sum;
echo number_format($cal, 5, '.', '');

// Debugging code to examine the raw API response
if ($response === false) {
    echo "HTTP request failed: " . curl_error($ch); // Print the curl error
} else {
    echo "API Response: " . $response; // Print the raw API response
}

?>
