<?php
$db = new PDO('sqlite:' . __DIR__ . '/mov.db');

$qgetdata = $db->query("SELECT * FROM MOVIE");
$getdata = $qgetdata->fetchAll(PDO::FETCH_ASSOC);
$option = [];
foreach ($getdata as $value) {
    $option[] = [$value["id"] , $value["name"] , $value["raiting"] , $value["cover"] , $value["genras"] , $value["year"] , $value["summery"] , $value["link"]];
}
echo json_encode($option);

header('Access-Control-Allow-Origin: http://localhost:3000');
?>