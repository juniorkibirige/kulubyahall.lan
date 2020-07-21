
<script src="/resources/static/js/jquery-3.4.1.min.js"></script>
<script src="test.js" type="module"></script>
<?php
$dp = [];
$f = [];
$idb = [];
if ($f = fopen('../../sha256_verify.txt', 'r')) {
  while (!feof($f)) {
    $line = fgets($f);
    if (trim($line) == '') {
      continue;
    }
    $l = explode(' ', $line);
    $sha256sum = $l[0];
    $loc = rtrim($l[2], "\n");
    $idb[$loc] = $sha256sum;
    if (strcmp($sha256sum, hash_file('sha256', "../." . $loc)) == 0) {
      // echo $loc . " \t <i style='color:green;'>checksum verified.</i> <hr>";
    } else {
      echo $loc . ' <i style="color:red;">checksum verification failed.</i><hr>';
    }
  }
  fclose($f);
} else {
  echo "File not found";
}
$idb = json_encode($idb);
echo "<script>
// window.idb = '".base64_encode($idb)."'
</script>";
?>