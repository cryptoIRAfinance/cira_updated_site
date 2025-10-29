<?php
header('Content-Type: application/json');

// Enable error logging for debugging
$errors = [];

// Chainstack RPC endpoint
$rpc_url = "https://bsc-mainnet.core.chainstack.com/9a1f3131dda40771f214f101ee402efc";

// Contract and wallet addresses
$token_contract = "0xDd25E1955FD9F7B3aBE83CC419070A7ace104DCE";
$addresses = [
    "Developer" => "0xAe50A9404e79160c51e7266021B644B906972B3F",
    "Marketing" => "0xaa24b8bfab73f1b96deda252a58bf809676a97e6",
    "Burn" => "0x000000000000000000000000000000000000dead"
];

// ERC20 balanceOf function signature
$balance_of_signature = "0x70a08231";

// Function to make JSON-RPC call to get token balance
function get_token_balance($rpc_url, $token_contract, $wallet_address, &$errors = null) {
    // Prepare the data parameter: balanceOf(address)
    $data = "0x70a08231" . str_pad(substr($wallet_address, 2), 64, "0", STR_PAD_LEFT);

    $payload = json_encode([
        "jsonrpc" => "2.0",
        "method" => "eth_call",
        "params" => [
            [
                "to" => $token_contract,
                "data" => $data
            ],
            "latest"
        ],
        "id" => 1
    ]);

    $ch = curl_init($rpc_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);

    if ($curl_error) {
        if (is_array($errors)) {
            $errors[] = "cURL Error: " . $curl_error;
        }
        return 0;
    }

    if ($http_code !== 200) {
        if (is_array($errors)) {
            $errors[] = "HTTP Error: " . $http_code;
        }
        return 0;
    }

    $result = json_decode($response, true);

    if (isset($result['result'])) {
        // Convert hex to decimal
        return hexdec($result['result']);
    }

    if (is_array($errors)) {
        $errors[] = "Invalid response: " . substr($response, 0, 200);
    }
    return 0;
}

// Hardcode total supply to 10 million
$total_supply = 10000000;

// Fetch balances from Chainstack node
$balances = [];

foreach ($addresses as $label => $wallet_address) {
    $balance_raw = get_token_balance($rpc_url, $token_contract, $wallet_address, $errors);
    // Convert from wei to token units (assuming 5 decimals based on original /1e5)
    $balances[$label] = $balance_raw / 1e5;
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
