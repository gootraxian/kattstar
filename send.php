<?php
$webhookurl = "https://discord.com/api/webhooks/1427860935925698580/B2jzHDinyRTysWMDXJA6Uep7KzgktrCq2cwSFinnF2o0tFUvFDrIKg5vNXR_MQAAOIFk";

if(isset($_POST['content']) && !empty(trim($_POST['content']))) {
    $message = htmlspecialchars($_POST['content']); // sanitize
    $json_data = json_encode([
        "content" => $message
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

    $ch = curl_init($webhookurl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    $response = curl_exec($ch);

    if($response === false) {
        // cURL failed, show the error
        echo 'cURL Error: ' . curl_error($ch);
    } else {
        // cURL succeeded, show Discord response
        echo 'Response from Discord: ' . $response;
    }

    curl_close($ch);
} else {
    echo "Please enter a message.";
}
?>
