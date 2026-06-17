<?php
// Sends CV form submission to contact@huquo.com via Resend.
// Place at site root on cPanel. Requires PHP 7.4+ with cURL.

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']); exit;
}

$RESEND_API_KEY = 're_ejFmQJ1w_EqrnpGRH9Wzbp74zsLUxdUKK';
$FROM           = 'HuQuo Careers <no-reply@huquo.com>';
$TO             = 'contact@huquo.com';

function v($k) { return isset($_POST[$k]) ? trim((string)$_POST[$k]) : ''; }
function esc($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

$name        = v('name');
$email       = v('email');
$mobile      = v('mobile');
$outside     = v('outsideIndia');
$location    = v('location');
$country     = v('country');
$experience  = v('experience');
$noResume    = v('noResume');
$company     = v('company');
$designation = v('designation');
$ugCourse    = v('ugCourse');
$ugSpec      = v('ugSpec');
$pgCourse    = v('pgCourse');
$pgCourseOther = v('pgCourseOther');
$pgSpec      = v('pgSpec');
$ctc         = v('ctc');
$ctcCurrency = strtoupper(v('ctcCurrency'));
$ctcExample  = v('ctcExample');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid name or email']); exit;
}

$rows = [
  ['Name', $name],
  ['Email', $email],
  ['Mobile', $mobile . ($outside === 'true' ? ' (Outside India)' : '')],
  ['Current Location', $location],
  ['Country', $country],
  ['Total Experience', $experience],
  ['Company', $company],
  ['Designation', $designation],
  ['UG Course', $ugCourse . ($ugSpec ? ' - ' . $ugSpec : '')],
  ['PG Course', $pgCourse . ($pgCourseOther ? ' / ' . $pgCourseOther : '') . ($pgSpec ? ' - ' . $pgSpec : '')],
  ['CTC', ($ctc ? $ctcCurrency . ' ' . $ctc : '') . ($ctcExample ? ' (eg ' . $ctcExample . ')' : '')],
  ['Has Resume', $noResume === 'true' ? 'No' : 'Yes'],
];

$html = '<h2 style="font-family:Arial,sans-serif;color:#1a1a1a;">New CV Submission</h2>';
$html .= '<table cellpadding="8" cellspacing="0" border="0" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">';
foreach ($rows as $r) {
  if ($r[1] === '') continue;
  $html .= '<tr><td style="background:#f5f5f5;font-weight:bold;border:1px solid #e5e5e5;">'.esc($r[0]).'</td><td style="border:1px solid #e5e5e5;">'.nl2br(esc($r[1])).'</td></tr>';
}
$html .= '</table>';

$attachments = [];
if (!empty($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
  $tmp = $_FILES['resume']['tmp_name'];
  $size = $_FILES['resume']['size'];
  if ($size > 8 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'Resume must be under 8MB']); exit;
  }
  $data = base64_encode(file_get_contents($tmp));
  $attachments[] = [
    'filename' => $_FILES['resume']['name'],
    'content'  => $data,
  ];
}

$payload = [
  'from'     => $FROM,
  'to'       => [$TO],
  'reply_to' => $email,
  'subject'  => 'New CV Submission - ' . $name,
  'html'     => $html,
];
if ($attachments) $payload['attachments'] = $attachments;

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $RESEND_API_KEY,
    'Content-Type: application/json',
  ],
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_TIMEOUT => 30,
]);
$resp = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

if ($code >= 200 && $code < 300) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(502);
  echo json_encode(['error' => 'Email send failed', 'status' => $code, 'detail' => $resp ?: $err]);
}