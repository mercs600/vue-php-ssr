<?php
require_once("../vendor/autoload.php");

use Spatie\Ssr\Renderer;
use Spatie\Ssr\Engines\Node;

$engine = new Node('node', '../tmp');
$renderer = new Renderer($engine);
?>

<?php echo $renderer
        ->debug(true)
        ->context(['foo' => 'bar'])
        ->entry(__DIR__ . '/dist/server.js')
        ->render(); ?>

<script src="/dist/client.js"></script>

