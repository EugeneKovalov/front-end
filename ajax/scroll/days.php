<?php

ini_set('display_errors', 1);
error_reporting(1);

$data = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['limit'])
{
    $start = $_GET['from'];
    $to = $_GET['from'] + $_GET['limit'];

    $output = [];

    for ($i = $start; $i < $to; $i++)
    {
        $tmp = $i % count($data);
        switch ($tmp)
        {
            case 1:
                array_push($output, $data[$tmp - 1]);
                break;
            case 2:
                array_push($output, $data[$tmp - 1]);
                break;
            case 3:
                array_push($output, $data[$tmp - 1]);
                break;
            case 4:
                array_push($output, $data[$tmp - 1]);
                break;
            case 5:
                array_push($output, $data[$tmp - 1]);
                break;
            case 6:
                array_push($output, $data[$tmp - 1]);
                break;
            case 0:
                array_push($output, $data[6]);
                break;

            default:
                break;
        }
    }

    $output = json_encode(array_values($output));
    echo "addElements($start, $to, $output);";
}