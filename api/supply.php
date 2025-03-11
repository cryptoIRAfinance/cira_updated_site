<?php
header('Content-Type: application/json');

// Function to perform HTTP GET requests
function http_request($url){
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch); 
    curl_close($ch);      
    return $output;
}

// URLs for the API requests
$url_total_supply = "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&apikey=5FYCSW5QEIH6J8ATQUE6FS12N52G2AAJYH";
$url_balances = [
    "Developer" => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xAe50A9404e79160c51e7266021B644B906972B3F&tag=latest&apikey=5FYCSW5QEIH6J8ATQUE6FS12N52G2AAJYH",
    "Marketing" => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xaa24b8bfab73f1b96deda252a58bf809676a97e6&tag=latest&apikey=5FYCSW5QEIH6J8ATQUE6FS12N52G2AAJYH",
    "Staking"  => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xfB5f80106F71E7f9850aF204da259a467A7Cc0DD&tag=latest&apikey=5FYCSW5QEIH6J8ATQUE6FS12N52G2AAJYH",
    "Burn"     => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=5FYCSW5QEIH6J8ATQUE6FS12N52G2AAJYH"
];

// Fetch total supply
$total_supply_json = http_request($url_total_supply);
$total_supply_arr = json_decode($total_supply_json, true);

if (!isset($total_supply_arr["result"]) || !is_numeric($total_supply_arr["result"])) {
    // Handle the error gracefully (e.g. default to 0, or return error msg)
    $total_supply = 0;
} else {
    $total_supply = floatval($total_supply_arr["result"]) / 1e5;
}

// Initialize an array to hold balances
$balances = [];

// Fetch balances
foreach ($url_balances as $label => $url) {
    $json = http_request($url);
    $arr = json_decode($json, true);
    
    if (!isset($arr["result"]) || !is_numeric($arr["result"])) {
        $balances[$label] = 0;
    } else {
        $balances[$label] = floatval($arr["result"]) / 1e5;
    }
}

// Calculate the remaining balance
$remaining_balance = 10000000 - array_sum($balances);

// Output the results
$output = [
    "Total Supply" => number_format($total_supply, 5, '.', ','),
    "Balances" => array_map(function($balance) {
        return number_format($balance, 5, '.', ',');
    }, $balances),
    "Circulating_supply" => number_format($remaining_balance, 5, '.', ',')
];

echo json_encode($output);
