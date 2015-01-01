<?php
    // $ytid = basename($_SERVER[REQUEST_URI]);
    // $imgPath = "http://img.youtube.com/vi/" . $ytid . "/0.jpg";

    // $ytid = ctype_digit($_GET['id']) ? $_GET['id'] : 1;
    $ytid = $_GET['id'];
    $imgPath = "http://img.youtube.com/vi/" . $ytid . "/0.jpg";    
// $SITE_ROOT = "http://www.underviewed.com/";
// $jsonData = getData($SITE_ROOT);
// makePage($jsonData, $SITE_ROOT);

// function getData($siteRoot) {
//     $id = ctype_digit($_GET['id']) ? $_GET['id'] : 1;
//     $rawData = file_get_contents($siteRoot.'videos/'.$id);
//     return json_decode($rawData);
// }



    $title = 'Underviewed: Real life, seldom seen.';
    $description = 'Searching YouTube for underviewed videos, using the default filenames of cameras and mobile devices. Giving you a glimpse of the seldom seen. Home of the next viral video.';



    function makePage() {
        global $ytid, $imgPath, $title, $description;

        ?>
        <!DOCTYPE html>
        <html>
            <head>
                <meta property="og:title" content="<?php echo $title; ?>" /> 
                <meta property="og:type" content="website" /> 
                <meta property="og:url" content="http://underviewed.com/videos/<?php echo $ytid; ?>" />
                <meta property="og:image" content="<?php echo $imgPath; ?>" />
                <meta property="og:description" content="<?php echo $description; ?>" />
                <meta property="og:site_name" content="Underviewed" /> 
            </head>
            <body>
                <h1><?php echo $title; ?></h1>
                <img src="<?php echo $imgPath; ?>" />
                <p><?php echo $description; ?></p>
            </body>
        </html>
        <?php
    }

    makePage();    
?>


