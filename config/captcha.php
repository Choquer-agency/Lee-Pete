<?php

return [
    'service' => 'Recaptcha', // options: Recaptcha / Hcaptcha / Turnstile
    'sitekey' => env('CAPTCHA_SITEKEY', ''),
    'secret' => env('CAPTCHA_SECRET', ''),
    'collections' => [],
    'forms' => 'all',
    'user_login' => false,
    'user_registration' => false,
    'error_message' => 'Please verify that you are not a robot.',
    'disclaimer' => '',
    'invisible' => false,
    'hide_badge' => false,
    'enable_api_routes' => false,
];
