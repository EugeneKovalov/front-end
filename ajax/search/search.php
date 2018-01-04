<?php
ini_set('display_errors', 1);
error_reporting(1);

$hintList = ['javascript', 'java', 'downLoad', 'downtown', 'Dow!', 'Ad'];
$articles = [
    [
        'title' => 'Java для улиток',
        'article' => 'Максимально улучшенное руководство по Java. Java для всех.'
    ],
    [
        'title' => 'downtown is where u been',
        'article' => 'Get down to downtown. In this town all are down. downtown'
    ],
    [
        'title' => 'Javascript for all!',
        'article' => 'Be Javascript cause Javascript is everywhere!'
    ],
    [
        'title' => 'downLoad greatest books from our store',
        'article' => 'downLoad all books! downLoad ur life'
    ],
    [
        'title' => 'Dow! Hell yeah',
        'article' => 'Dow! We all gonna Dow! tonight'
    ],
    [
        'title' => 'Ad is for adversary',
        'article' => 'Ad is what makes u happy. Be happy with Ad'
    ]
];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $a = $_REQUEST['a'];
    $search = "Ad";

    if ($a !== "") {
        $a = strtolower($a);
        $len = strlen($a);

        foreach ($hintList as $name) {
            if (stristr($a, substr($name, 0, $len))) {
                if ($search === "") {
                    $search = $name;
                } else if($name !== 'Ad'){
                    $search .= ", $name";
                }
            }
        }
    }
    echo $search;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $a = [];
    $input = strtolower($_POST['input']);
    if ($input !== 'ad') {
        for ($i = 0; $i < count($articles); $i++) {
            if (substr_count(strtolower($articles[$i]['title']), $input) >= 1) {
                array_push($a, $articles[$i]);
                break;
            }
        }
    } else if ($input === 'ad') {
        array_push($a, $articles[count($articles) -1]);
    }

    echo json_encode(array_values($a));
}