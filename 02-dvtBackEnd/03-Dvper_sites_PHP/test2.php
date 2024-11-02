<?php
function strpos_recursive($haystack, $needle, $offset = 0, &$results = array()) {                
    $offset = strpos($haystack, $needle, $offset);
    if($offset === false) {
        return $results;            
    } else {
        $results[] = $offset;
        return strpos_recursive($haystack, $needle, ($offset + 1), $results);
    }
}
$string = 'Git is a fast, *scalable*, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals. Git is an *Open Source project* covered by the *GNU General Public License* version 2 (some parts of it are under different licenses, compatible with the GPLv2). It was originally written by *Linus Torvalds* with help of a group of *hackers* around the net.';
$search = '*';
$found = strpos_recursive($string, $search);
//print_r($found);

echo substr($string,$found[0]+1,$found[1]-$found[0]-1);
for ($k = 0 ; $k < count($found)-1 ; $k+=2) {
    $elements[] = '<em>' . substr($string,$found[$k]+1,$found[$k+1]-$found[$k]-1) . '</em>';
}

print_r($elements);
?>