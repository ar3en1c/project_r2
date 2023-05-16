<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

try {
    $db = new PDO('sqlite:' . __DIR__ . '/mov.db');
    
    $qgetdata = $db->query("SELECT movie.id as 'id' , name , raiting , cover , genras , year , summery , link , media.id as 'media_id' FROM movie INNER JOIN media ON media.key = movie.id and media.type like 'Movie'");
    $getdata = $qgetdata->fetchAll(PDO::FETCH_ASSOC);
    
    $option = [];
    foreach ($getdata as $value) {
        $option[] = [$value["id"], $value["name"], $value["raiting"], $value["cover"], $value["genras"], $value["year"], $value["summery"], $value["link"] , $value["media_id"]];
    }
    
    $qgetdata12 = $db->query("SELECT series.id as 'id' , name , raiting , cover , genras , year , summery , link , media.id as 'media_id' FROM SERIES INNER JOIN media ON media.key = SERIES.id and media.type like 'Series'");
    $getdata12 = $qgetdata12->fetchAll(PDO::FETCH_ASSOC);
    
    foreach ($getdata12 as $value) {
        $option[] = [$value["id"], $value["name"], $value["raiting"], $value["cover"], $value["genras"], $value["year"], $value["summery"], $value["link"] , $value["media_id"]];
    }
    
    echo json_encode($option);
    
    $db = null;
} catch (PDOException $e) {
    echo "Database connection failed: " . $e->getMessage();
}
