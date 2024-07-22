<?php
// Define allowed origins
$allowed_origins = [
    "https://www.originalmoxie.com",
    "https://designfwddev.com", // Add other allowed origins here
    "http://localhost",
    "http://127.0.0.1"
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : 'Origin not set';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: https://www.originalmoxie.com"); // Default origin
}

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) && 
        ($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST' ||
         $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'GET' ||
         $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'PUT' ||
         $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'DELETE')) {
        header("Access-Control-Allow-Origin: " . $origin);
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        exit(0);
    }
}
require 'src/MailChimp.php';
use \DrewM\MailChimp\MailChimp;


$MailChimp = new MailChimp('api-key-here');
$list_id = '6afcf9b516';
$source = "Hair Assessment";

$data = json_decode(file_get_contents("php://input"), true);
//santize data
foreach($data as $key=>$value){
	$$key = filter_var($value);
}
$email = filter_var($data['EMAIL'], FILTER_SANITIZE_EMAIL);
$subscriber_hash = MailChimp::subscriberHash($email);
// Returns The member_id of the new or updated member, whether the member was added or an existing member was updated, and the status of the member. The status will be reported as 'a' (active), 'e' (error), or 'o' (optout).
 $merge_vars = array(
        'EMAIL'     => $email,
        'CURLPATTER'     => $curlPattern,
        'POROSITY'     => $porosity,
        'CURLSHAPE'	=> $curlShape,
        'HAIRTEXTUR'	=> $hairTexture,
        'SCALPCONDI'	=> $scalpCondition,
        'STYLINGPRE'	=> $stylingPreference,
        'CATEGORYUR'	=> $categoryURL,
        'HAIRTYPE'	=> $hairTypeMC,
        'KITURL'    => $kitURL,
        'SOURCE'          => $source,
        'MMERGE3'   => '',
        'MMERGE4'   => '',
        'MMERGE5'   => ''        

    ); 

  $result = $MailChimp->put('/lists/'.$list_id.'/members/'.$subscriber_hash, array(
            'email_address' => $email,
            'merge_fields'  => $merge_vars,
            'status'        => 'subscribed'     // double opt-in
            // 'status'     => 'pending'  // single opt-in
        )
    );

  if($hairTypeMC == "locs"){
        $tag_result = $MailChimp->post('/lists/'.$list_id.'/members/'.$subscriber_hash.'/tags', [
                'tags' => [
                    [
                        'name' => 'Hair Assessment',
                        'status' => 'active',
                    ],
                    [
                        'name' => 'Locs',
                        'status' => 'active',
                    ],                    
                ]
            ]);
  }
  elseif($hairTypeMC == "protectiveStyles"){
        $tag_result = $MailChimp->post('/lists/'.$list_id.'/members/'.$subscriber_hash.'/tags', [
                'tags' => [
                    [
                        'name' => 'Hair Assessment',
                        'status' => 'active',
                    ],
                    [
                        'name' => 'protectiveStyles',
                        'status' => 'active',
                    ],                    
                ]
            ]);    
  }
  else{
        $tag_result = $MailChimp->post('/lists/'.$list_id.'/members/'.$subscriber_hash.'/tags', [
                'tags' => [
                    [
                        'name' => 'Hair Assessment',
                        'status' => 'active',
                    ],
                    [
                        'name' => $hairTypeMC,
                        'status' => 'active',
                    ],                    
                ]
            ]);
  }

if ($MailChimp->success()) {
echo $categoryURL;  
} else {
    echo "problem<br>";
	echo $MailChimp->getLastError();
	print_r($MailChimp->getLastResponse());
}
  

?>
