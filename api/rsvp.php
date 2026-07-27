<?php

// =========================
// Telegram Bot
// =========================

$botToken = "8708527326:AAHH8DC_qABjc2qnSiOwo3sa-6i-RNuUNhc";
$chatId   = "760322587";

// =========================

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    exit;
}

$name = htmlspecialchars($data["fullname"]);
$attendance = htmlspecialchars($data["attendance"]);
$food = htmlspecialchars($data["food"]);
$comment = htmlspecialchars($data["comment"]);

$message =
"💍 Новая анкета\n\n".
"👤 {$name}\n".
"✅ Присутствие: {$attendance}\n".
"🍽 Предпочтения: {$food}\n".
"💬 Комментарий: {$comment}";

$url = "https://api.telegram.org/bot{$botToken}/sendMessage";

file_get_contents($url . "?" . http_build_query([
    "chat_id" => $chatId,
    "text" => $message
]));

echo json_encode([
    "success" => true
]);
