<?php

ini_set('display_errors', 1);
error_reporting(1);

$data = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['limit'])
{
    $start = $_GET['from'];
    $to = $_GET['from'] + $_GET['limit'];
    $output = json_encode(array_values($data));
    echo "addElements($start, $to, $output);";
}