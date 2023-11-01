<?php

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
$API_KEY = "JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D";
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
        continue; 
    }
    
    // Extract JSON data from the response
    $jsonStart = strpos($response, '{');
    $jsonEnd = strrpos($response, '}');
    if ($jsonStart !== false && $jsonEnd !== false) {
        $jsonStr = substr($response, $jsonStart, $jsonEnd - $jsonStart + 1);
        $json = json_decode($jsonStr, true);
        
        if ($json !== null && isset($json["result"])) {
            $sum += $json["result"] / 1e5;
        } else {
            // Handle unexpected JSON structure
        }
    } else {
        // Handle missing JSON data
        echo "JSON data not found in the response.";
    }
}

$cal = 10000000 - $sum;

// Create an associative array for the JSON response
$responseData = [
    "calculated_value" => number_format($cal, 5, '.', ''),
    "api_response" => $jsonStr // Include the extracted JSON data in the response
];

// Set the Content-Type header for JSON
header('Content-Type: application/json');

// Output the JSON response
echo json_encode($responseData);
?>
