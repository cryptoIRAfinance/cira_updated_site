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
$url_total_supply = "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&apikey=YourApiKeyToken";
$url_balances = [
    "Developer" => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xAe50A9404e79160c51e7266021B644B906972B3F&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D",
    "Marketing" => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xaa24b8bfab73f1b96deda252a58bf809676a97e6&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D",
    "Staking"  => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xfB5f80106F71E7f9850aF204da259a467A7Cc0DD&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D",
    "PinkSale" => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x7ee058420e5937496f5a2096f04caa7721cf70cc&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D",
    "Burn"     => "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=JAGR4Z37B7PRU9GBQTHR5G6E2QRXG8BA4D"
];

// Fetch total supply
$total_supply_json = http_request($url_total_supply);
$total_supply_arr = json_decode($total_supply_json, true);
$total_supply = $total_supply_arr["result"] / 1e5;

// Initialize an array to hold balances
$balances = [];

// Fetch balances
foreach ($url_balances as $label => $url) {
    $json = http_request($url);
    $arr = json_decode($json, true);
    $balances[$label] = $arr["result"] / 1e5;
}

// Calculate the remaining balance
$remaining_balance = 10000000 - array_sum($balances);

// Output the results
$output = [
    "Total Supply" => number_format($total_supply, 5, '.', ','),
    "Balances" => array_map(function($balance) {
        return number_format($balance, 5, '.', ',');
    }, $balances),
    "Remaining Balance" => number_format($remaining_balance, 5, '.', ',')
];

echo json_encode($output);

?>
