<?php
header('Content-Type: application/json');

// Enable error logging for debugging
$errors = [];

// Function to perform parallel HTTP GET requests (like Promise.all in JavaScript)
function http_request_parallel($urls, &$errors = null) {
    $multi_handle = curl_multi_init();
    $curl_handles = [];
    $results = [];

    // Create individual cURL handles for each URL
    foreach ($urls as $key => $url) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

        curl_multi_add_handle($multi_handle, $ch);
        $curl_handles[$key] = $ch;
    }

    // Execute all requests simultaneously
    $running = null;
    do {
        curl_multi_exec($multi_handle, $running);
        curl_multi_select($multi_handle);
    } while ($running > 0);

    // Collect results and check for errors
    foreach ($curl_handles as $key => $ch) {
        $output = curl_multi_getcontent($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curl_error = curl_error($ch);

        if ($curl_error) {
            if (is_array($errors)) {
                $errors[] = "$key: cURL Error - " . $curl_error;
            }
        }

        if ($http_code !== 200) {
            if (is_array($errors)) {
                $errors[] = "$key: HTTP Error - " . $http_code;
            }
        }

        $results[$key] = $output;
        curl_multi_remove_handle($multi_handle, $ch);
        curl_close($ch);
    }

    curl_multi_close($multi_handle);
    return $results;
}

// URLs for the API requests - combine all into one array for parallel execution
$all_urls = [
    "Total_Supply" => "https://api.etherscan.io/v2/api?chainid=56&module=stats&action=tokensupply&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&apikey=RFF96R27NMKHINI94RSV44R247HQFN8TQK",
    "Developer" => "https://api.etherscan.io/v2/api?chainid=56&module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xAe50A9404e79160c51e7266021B644B906972B3F&tag=latest&apikey=RFF96R27NMKHINI94RSV44R247HQFN8TQK",
    "Marketing" => "https://api.etherscan.io/v2/api?chainid=56&module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0xaa24b8bfab73f1b96deda252a58bf809676a97e6&tag=latest&apikey=RFF96R27NMKHINI94RSV44R247HQFN8TQK",
    "Burn" => "https://api.etherscan.io/v2/api?chainid=56&module=account&action=tokenbalance&contractaddress=0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=RFF96R27NMKHINI94RSV44R247HQFN8TQK"
];

// Execute all requests in parallel (like Promise.all in JavaScript)
$responses = http_request_parallel($all_urls, $errors);

// Process total supply
$total_supply_arr = json_decode($responses["Total_Supply"], true);
if (!isset($total_supply_arr["result"]) || !is_numeric($total_supply_arr["result"])) {
    $total_supply = 0;
    $errors[] = "Total Supply: Invalid or missing result";
} else {
    $total_supply = floatval($total_supply_arr["result"]) / 1e5;
}

// Process balances
$balances = [];
$balance_keys = ["Developer", "Marketing", "Burn"];

foreach ($balance_keys as $label) {
    $arr = json_decode($responses[$label], true);

    if (!isset($arr["result"]) || !is_numeric($arr["result"])) {
        $balances[$label] = 0;
        $errors[] = "$label: Invalid or missing result";
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

// Include errors in output if any occurred (for debugging)
if (!empty($errors)) {
    $output["errors"] = $errors;
}

echo json_encode($output);
