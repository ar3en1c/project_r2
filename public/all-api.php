<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$db = new PDO('sqlite:' . __DIR__ . '/mov.db');

$qgetdata = $db->query("SELECT media.id as 'id' , name , raiting , cover , genras , year , summery , link , movie.id as 'item_id' FROM media INNER JOIN movie ON media.key = movie.id and media.type like 'Movie' union SELECT media.id as 'id' , name , raiting , cover , genras , year
, summery , link , series.id as 'item_id' FROM media INNER JOIN series ON media.key = SERIES.id and media.type like 'Series'");
$getdata = $qgetdata->fetchAll(PDO::FETCH_ASSOC);
$option = [];
foreach ($getdata as $value) {
    $option[] = [$value["id"] , $value["name"] , $value["raiting"] , $value["cover"] , $value["genras"] , $value["year"] , $value["summery"] , $value["link"] , $value["item_id"]];
}
echo json_encode($option);

$db= null;
?>